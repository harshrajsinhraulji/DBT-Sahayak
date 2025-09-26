/**
 * @fileOverview A function that defines a Genkit flow for checking bank forms.
 *
 * This file exports a function that creates a Genkit flow capable of analyzing an image
 * of a user's filled-out bank form and identifying common mistakes.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {FormCheckerInputSchema, FormCheckerOutputSchema} from './flow-types';

export function defineFormCheckerFlow() {
  const prompt = ai.definePrompt({
    name: 'formCheckerPrompt',
    model: 'gemini-pro-vision',
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

  return ai.defineFlow(
    {
      name: 'formCheckerFlow',
      inputSchema: FormCheckerInputSchema,
      outputSchema: FormCheckerOutputSchema,
    },
    async input => {
      const {output} = await prompt(input);
      return output!;
    }
  );
}
