
'use server';
/**
 * @fileOverview A Genkit flow for sending emails via the Gmail API.
 * 
 * - sendEmail - A function that handles sending the contact form data as an email.
 * - SendEmailSchema - The Zod schema for the email content.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { google } from 'googleapis';

// IMPORTANT: Follow the setup guide to get these values.
// You will need to set them as environment variables.
const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const GMAIL_REDIRECT_URI = process.env.GMAIL_REDIRECT_URI;
const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const MY_EMAIL_ADDRESS = 'canur@canpixel.com'; // The email address you're sending from and to.

const SendEmailSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  message: z.string().describe('The content of the message.'),
});

export type SendEmailInput = z.infer<typeof SendEmailSchema>;

// This is the main function the frontend will call.
export async function sendEmail(input: SendEmailInput): Promise<{ success: boolean; message: string }> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailSchema,
    outputSchema: z.object({ success: z.boolean(), message: z.string() }),
  },
  async (input) => {
    if (!GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REDIRECT_URI || !GMAIL_REFRESH_TOKEN) {
      console.error('Gmail API environment variables are not set.');
      throw new Error('Server configuration error: Missing Gmail API credentials.');
    }

    const oAuth2Client = new google.auth.OAuth2(
      GMAIL_CLIENT_ID,
      GMAIL_CLIENT_SECRET,
      GMAIL_REDIRECT_URI
    );

    oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

    try {
      // Get a new access token.
      const { token: accessToken } = await oAuth2Client.getAccessToken();
      if (!accessToken) {
        throw new Error('Failed to create access token.');
      }
      
      const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

      const subject = `New message from ${input.name} via canpixel.com`;
      const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
      const messageParts = [
        `From: CanPixel <${MY_EMAIL_ADDRESS}>`,
        `To: Can Ur <${MY_EMAIL_ADDRESS}>`,
        'Content-Type: text/html; charset=utf-8',
        'MIME-Version: 1.0',
        `Subject: ${utf8Subject}`,
        '',
        `You've received a new message from your portfolio contact form:<br/><br/>`,
        `<b>Name:</b> ${input.name}<br/>`,
        `<b>Email:</b> ${input.email}<br/><br/>`,
        `<b>Message:</b><br/>${input.message.replace(/\n/g, '<br/>')}`,
      ];
      const message = messageParts.join('\n');

      // The body needs to be Base64-encoded.
      const encodedMessage = Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

      const res = await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: encodedMessage,
        },
      });

      if (res.status === 200) {
        return { success: true, message: 'Email sent successfully.' };
      } else {
        throw new Error(`Gmail API responded with status: ${res.status}`);
      }

    } catch (error: any) {
      console.error('Failed to send email:', error.message);
      // It's important not to expose detailed error messages to the client.
      throw new Error('An error occurred while trying to send the email.');
    }
  }
);
