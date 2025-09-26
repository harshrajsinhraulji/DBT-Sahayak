'use server';

/**
 * @fileOverview An AI agent that helps users draft formal grievance letters related to scholarship issues.
 *
 * - grievanceHelper - A function that takes a user's problem description and generates a formal letter.
 * - GrievanceHelperInput - The input type for the grievanceHelper function.
 * - GrievanceHelperOutput - The return type for the grievanceHelper function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GrievanceHelperInputSchema = z.object({
  name: z.string().describe("The user's full name."),
  problemDescription: z.string().describe("A simple description of the user's problem."),
  language: z.string().describe("The language for the output letter (e.g., 'English', 'Hindi')."),
});
export type GrievanceHelperInput = z.infer<typeof GrievanceHelperInputSchema>;

const GrievanceHelperOutputSchema = z.object({
  grievanceLetter: z.string().describe('The formally drafted grievance letter.'),
});
export type GrievanceHelperOutput = z.infer<typeof GrievanceHelperOutputSchema>;

export async function grievanceHelper(input: GrievanceHelperInput): Promise<GrievanceHelperOutput> {
  return grievanceHelperFlow(input);
}

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

const grievanceHelperFlow = ai.defineFlow(
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
