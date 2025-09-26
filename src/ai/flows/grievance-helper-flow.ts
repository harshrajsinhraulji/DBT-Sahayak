/**
 * @fileOverview A function that defines a Genkit flow for the Grievance Helper.
 *
 * This file exports a function that creates a Genkit flow capable of drafting a formal
 * grievance letter based on a user's simple problem description.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {GrievanceHelperInputSchema, GrievanceHelperOutputSchema} from './flow-types';

export function defineGrievanceHelperFlow() {
  const prompt = ai.definePrompt({
    name: 'grievanceHelperPrompt',
    model: 'gemini-pro',
    input: {schema: GrievanceHelperInputSchema},
    output: {schema: GrievanceHelperOutputSchema},
    prompt: `You are an expert assistant for drafting formal grievance letters for students facing issues with their scholarships. Your task is to convert a user's simple problem description into a polite, well-structured, and formal letter that can be sent to the appropriate authorities.

The user's name is {{name}}.
Their problem is: "{{problemDescription}}".
The letter should be written in the {{language}} language.

Generate a formal grievance letter based on this information. The letter should include:
- A clear subject line.
- A polite salutation.
- A concise opening stating the student's name and the purpose of the letter.
- A paragraph detailing the problem based on the user's description.
- A concluding paragraph requesting action and expressing gratitude.
- A formal closing (e.g., "Sincerely," or "Yours faithfully,").
- The student's name at the end.

Do not make up any information that is not provided. The output should be only the letter itself.`,
  });

  return ai.defineFlow(
    {
      name: 'grievanceHelperFlow',
      inputSchema: GrievanceHelperInputSchema,
      outputSchema: GrievanceHelperOutputSchema,
    },
    async input => {
      const {output} = await prompt(input);
      return output!;
    }
  );
}
