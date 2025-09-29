
'use server';

/**
 * @fileOverview An AI flow for checking Aadhaar Seeding Forms.
 * 
 * - checkAadhaarSeedingForm - A function that analyzes an image of a form.
 * - CheckFormInput - The input type for the checkAadhaarSeedingForm function.
 * - CheckFormOutput - The return type for the checkAadhaarSeedingForm function.
 */

import { ai } from '@/lib/genkit';
import { z } from 'zod';
import { defineFlow, definePrompt } from 'genkit';

const CheckFormInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A photo of a completed Aadhaar Seeding Consent Form, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type CheckFormInput = z.infer<typeof CheckFormInputSchema>;

const CheckFormOutputSchema = z.object({
  isCorrect: z.boolean().describe('Whether the form appears to be filled out correctly with no obvious issues.'),
  issues: z.array(z.string()).describe('A list of potential issues or errors found on the form.'),
});
export type CheckFormOutput = z.infer<typeof CheckFormOutputSchema>;

const formCheckerPrompt = definePrompt({
  name: 'aadhaarFormCheckerPrompt',
  input: { schema: CheckFormInputSchema },
  output: { schema: CheckFormOutputSchema },
  prompt: `You are an expert verifier for bank documents in India, specializing in the "Aadhaar Seeding Consent Form" used for DBT (Direct Benefit Transfer).

Your task is to analyze the provided image of a form and identify any common mistakes. Assume the user wants to enable DBT for scholarship funds.

Here are the key fields to check for:
1.  **Bank Account Number:** Must be clearly written and not empty.
2.  **Name:** The name should be present and legible. Note if it looks like it might not match the signature.
3.  **Signature:** A signature must be present in the designated box. Note if it's missing.
4.  **Date:** The date field must be filled.
5.  **Options for Linking:** The user must tick one of the options to link their account. Note if no option is selected.
6.  **Legibility:** Note any areas that are hard to read, crossed out heavily, or unclear.

Based on your analysis, identify all potential issues. If you find no issues, return an empty array for the 'issues' field and set 'isCorrect' to true. If you find one or more issues, list them clearly in the 'issues' array and set 'isCorrect' to false.

Be concise and direct in your feedback.

Image of the form to analyze:
{{media url=imageDataUri}}
`,
});

const checkFormFlow = defineFlow(
  {
    name: 'checkFormFlow',
    inputSchema: CheckFormInputSchema,
    outputSchema: CheckFormOutputSchema,
  },
  async (input) => {
    const { output } = await formCheckerPrompt(input);
    return output!;
  }
);

export async function checkAadhaarSeedingForm(input: CheckFormInput): Promise<CheckFormOutput> {
  return checkFormFlow(input);
}
