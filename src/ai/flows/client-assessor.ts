'use server';

/**
 * @fileOverview A client inquiry assessor AI agent.
 *
 * - assessClientInquiry - A function that handles the client inquiry assessment process.
 * - AssessClientInquiryInput - The input type for the assessClientInquiry function.
 * - AssessClientInquiryOutput - The return type for the assessClientInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessClientInquiryInputSchema = z.object({
  inquiry: z.string().describe('The client inquiry text from the contact form.'),
});
export type AssessClientInquiryInput = z.infer<typeof AssessClientInquiryInputSchema>;

const AssessClientInquiryOutputSchema = z.object({
  suitabilityScore: z
    .number()
    .describe(
      'A score from 0 to 1 indicating how well the client inquiry aligns with CanPixel brand ethos. 1 is perfect alignment, 0 is no alignment.'
    ),
  relevantElements: z
    .string()
    .describe(
      'A comma separated list of project elements from the inquiry that align with CanPixel brand ethos.'
    ),
  summary: z
    .string()
    .describe(
      'A brief summary of the client inquiry and its potential fit with CanPixel brand ethos.'
    ),
});
export type AssessClientInquiryOutput = z.infer<typeof AssessClientInquiryOutputSchema>;

export async function assessClientInquiry(
  input: AssessClientInquiryInput
): Promise<AssessClientInquiryOutput> {
  return assessClientInquiryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assessClientInquiryPrompt',
  input: {schema: AssessClientInquiryInputSchema},
  output: {schema: AssessClientInquiryOutputSchema},
  prompt: `You are an AI assistant that analyzes client inquiries for CanPixel, a brand with a philosophical, mysterious, meta, rebellious, punk/metal ethos. CanPixel's mission is crafting distinct realms in games, music, and thought that provoke, inspire, and defy through pluralistic, soulful experiences.

  Assess the following client inquiry based on its suitability for CanPixel, providing a suitability score (0-1), a list of relevant project elements, and a brief summary.

  Inquiry: {{{inquiry}}}
  `,
});

const assessClientInquiryFlow = ai.defineFlow(
  {
    name: 'assessClientInquiryFlow',
    inputSchema: AssessClientInquiryInputSchema,
    outputSchema: AssessClientInquiryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
