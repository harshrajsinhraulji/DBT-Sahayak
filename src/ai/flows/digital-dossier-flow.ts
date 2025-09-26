// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview An AI agent that extracts key information from user-uploaded documents to create a digital dossier.
 *
 * - digitalDossier - A function that takes images of documents and extracts information.
 * - DigitalDossierInput - The input type for the digitalDossier function.
 * - DigitalDossierOutput - The return type for the digitalDossier function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DigitalDossierInputSchema = z.object({
  aadhaarDataUri: z
    .string()
    .describe(
      "A photo of the user's Aadhaar card, as a data URI that must include a MIME type and use Base64 encoding."
    ),
  passbookDataUri: z
    .string()
    .describe(
      "A photo of the user's bank passbook, as a data URI that must include a MIME type and use Base64 encoding."
    ),
    formDataUri: z
    .string()
    .describe(
      "A photo of the user's filled-out application form, as a data URI that must include a MIME type and use Base64 encoding."
    ),
});
export type DigitalDossierInput = z.infer<typeof DigitalDossierInputSchema>;

const DigitalDossierOutputSchema = z.object({
  name: z.string().describe("The user's full name as found on the documents."),
  aadhaarNumber: z.string().describe("The user's 12-digit Aadhaar number."),
  bankName: z.string().describe("The name of the user's bank."),
  accountNumber: z.string().describe("The user's bank account number."),
  extractedFields: z.array(z.object({
      field: z.string().describe("Name of the extracted field"),
      value: z.string().describe("Value of the extracted field"),
      confidence: z.number().describe("Confidence score from 0.0 to 1.0"),
  })).describe("An array of all extracted fields with confidence scores.")
});
export type DigitalDossierOutput = z.infer<typeof DigitalDossierOutputSchema>;

export async function digitalDossier(input: DigitalDossierInput): Promise<DigitalDossierOutput> {
  return digitalDossierFlow(input);
}

const prompt = ai.definePrompt({
  name: 'digitalDossierPrompt',
  input: {schema: DigitalDossierInputSchema},
  output: {schema: DigitalDossierOutputSchema},
  prompt: `You are an expert at extracting information from official Indian documents. Your task is to analyze three images provided by the user: an Aadhaar Card, a Bank Passbook, and an Application Form for Aadhaar Seeding.

You will receive three images:
1. Aadhaar Card: {{media url=aadhaarDataUri}}
2. Bank Passbook: {{media url=passbookDataUri}}
3. Application Form: {{media url=formDataUri}}

Carefully analyze all three images to find and extract the following information. Cross-reference the documents to ensure accuracy. For each field, provide a confidence score from 0.0 (not found) to 1.0 (highly confident).

1.  **Name:** Find the full name of the individual. It should be consistent across the documents.
2.  **Aadhaar Number:** Find the 12-digit Aadhaar number. It will be on the Aadhaar card and likely on the application form.
3.  **Bank Name:** Find the name of the bank from the passbook or application form.
4.  **Account Number:** Find the bank account number from the passbook or application form.

Populate the output schema with the extracted values. In the 'extractedFields' array, list each piece of information you found along with your confidence score. If a piece of information cannot be found, set its value to 'Not Found' and confidence to 0.0.`,
});

const digitalDossierFlow = ai.defineFlow(
  {
    name: 'digitalDossierFlow',
    inputSchema: DigitalDossierInputSchema,
    outputSchema: DigitalDossierOutputSchema,
    model: 'googleai/gemini-2.5-flash',
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
