// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview An AI agent that analyzes a user's uploaded bank form to check for common errors.
 *
 * - formChecker - A function that takes an image of a form and provides feedback.
 * - FormCheckerInput - The input type for the formChecker function.
 * - FormCheckerOutput - The return type for the formChecker function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FormCheckerInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user's filled-out bank form, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type FormCheckerInput = z.infer<typeof FormCheckerInputSchema>;

const FormCheckerOutputSchema = z.object({
  feedback: z.string().describe('Constructive, bulleted feedback on the form, highlighting potential errors or omissions. If the form is perfect, provide a confirmation message like "Everything looks great!".'),
  errorCount: z.number().describe('The total number of potential errors found.'),
});
export type FormCheckerOutput = z.infer<typeof FormCheckerOutputSchema>;

export async function formChecker(input: FormCheckerInput): Promise<FormCheckerOutput> {
  return formCheckerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'formCheckerPrompt',
  input: {schema: FormCheckerInputSchema},
  output: {schema: FormCheckerOutputSchema},
  prompt: `You are an expert assistant for verifying official bank forms, specifically the "Aadhaar Seeding and NPCI Mapping Application Form". Your task is to analyze an image of a user's filled-out form and identify common mistakes before they submit it to the bank.

You will receive an image of the form:
{{media url=photoDataUri}}

Analyze the image and check for the following potential errors:
1.  **Missing Signature:** Check if the signature field is empty.
2.  **Missing Date or Name:** Ensure the date and name fields are filled out.
3.  **Account Number Missing:** Verify that the bank account number is provided.
4.  **Aadhaar Number Missing:** Verify that the Aadhaar number is provided.
5.  **Incorrect Options Selected:** Users should typically select the option to 'Link Aadhaar to my account'. Check if this or a similar option is ticked.
6.  **Illegible Handwriting:** Note if any critical information is hard to read.

Based on your analysis, provide constructive, bulleted feedback in the 'feedback' field. Start each point with a '*'. For each potential error found, create a bullet point explaining the issue and how to fix it. 

If the form looks complete and correct, provide a positive confirmation like "Our AI analysis did not find any common errors. You look ready to visit the bank!". Do not use bullet points if there are no errors.

Finally, count the number of potential errors you found and set the 'errorCount' field. If everything looks good, this should be 0.`,
});

const formCheckerFlow = ai.defineFlow(
  {
    name: 'formCheckerFlow',
    inputSchema: FormCheckerInputSchema,
    outputSchema: FormCheckerOutputSchema,
  },
  async input => {
    const {output} = await ai.generate({
        model: 'googleai/gemini-1.5-flash-latest',
        prompt: prompt.compile({input}),
        output: {
            schema: prompt.config.output!.schema!,
        },
    });
    return output!;
  }
);
