
'use server';
/**
 * @fileOverview A Genkit flow for sending emails via the Resend API.
 * 
 * - sendEmail - A function that handles sending the contact form data as an email.
 * - SendEmailSchema - The Zod schema for the email content.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';

// IMPORTANT: You need to set this environment variable.
const RESEND_API_KEY = process.env.RESEND_API_KEY;
// This is the email address you will send emails to.
const TO_EMAIL_ADDRESS = 'canur11@gmail.com';
// This is the email you will send emails from. It MUST be a verified domain in Resend.
// For example, if your domain is canpixel.com, you could use something like 'noreply@canpixel.com'.
const FROM_EMAIL_ADDRESS = 'noreply@canpixel.com';

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
    if (!RESEND_API_KEY) {
      console.error('Resend API key is not set.');
      throw new Error('Server configuration error: Missing Resend API key.');
    }

    const resend = new Resend(RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: `CanPixel Contact Form <${FROM_EMAIL_ADDRESS}>`,
        to: [TO_EMAIL_ADDRESS],
        subject: `New message from ${input.name} via canpixel.com`,
        html: `
          <p>You've received a new message from your portfolio contact form:</p>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message.replace(/\n/g, '<br>')}</p>
        `,
        reply_to: input.email,
      });

      if (error) {
        throw new Error(error.message);
      }
      
      return { success: true, message: 'Email sent successfully.' };

    } catch (error: any) {
      console.error('Failed to send email:', error.message);
      // It's important not to expose detailed error messages to the client.
      throw new Error('An error occurred while trying to send the email.');
    }
  }
);
