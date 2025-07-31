'use server';

import { assessClientInquiry, type AssessClientInquiryOutput } from '@/ai/flows/client-assessor';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  inquiry: z.string(),
});

export async function handleInquiry(values: z.infer<typeof formSchema>): Promise<AssessClientInquiryOutput> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    // This should not happen with client-side validation, but as a safeguard:
    throw new Error('Invalid form data provided.');
  }

  const { inquiry } = validatedFields.data;

  try {
    const assessment = await assessClientInquiry({ inquiry });
    return assessment;
  } catch (error) {
    console.error("AI assessment failed:", error);
    // In a real app, you might want to still save the contact form
    // and just return a default/error assessment state.
    throw new Error('Failed to get an assessment from the AI model.');
  }
}
