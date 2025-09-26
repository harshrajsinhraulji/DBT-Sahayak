// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview An AI chatbot (Aadhaar Dost) powered by the Gemini API that can answer user queries related to DBT, Aadhaar seeding, and scholarships.
 *
 * - aadhaarDostChatbot - A function that handles the chatbot interaction.
 * - AadhaarDostChatbotInput - The input type for the aadhaarDostChatbot function.
 * - AadhaarDostChatbotOutput - The return type for the aadhaarDostChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AadhaarDostChatbotInputSchema = z.object({
  query: z.string().describe('The user query related to DBT, Aadhaar seeding, or scholarships.'),
});
export type AadhaarDostChatbotInput = z.infer<typeof AadhaarDostChatbotInputSchema>;

const AadhaarDostChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type AadhaarDostChatbotOutput = z.infer<typeof AadhaarDostChatbotOutputSchema>;

export async function aadhaarDostChatbot(input: AadhaarDostChatbotInput): Promise<AadhaarDostChatbotOutput> {
  return aadhaarDostChatbotFlow(input);
}

const askClarifyingQuestion = ai.defineTool({
  name: 'askClarifyingQuestion',
  description: 'If the user question is ambiguous, ask a clarifying question to better understand their needs.',
  inputSchema: z.object({
    question: z.string().describe('The clarifying question to ask the user.'),
  }),
  outputSchema: z.string().describe('The clarifying question that was asked to the user'),
}, async (input) => {
  return input.question; // Just return the question, the flow will handle sending it to the user.
});

const prompt = ai.definePrompt({
  name: 'aadhaarDostChatbotPrompt',
  input: {schema: AadhaarDostChatbotInputSchema},
  output: {schema: AadhaarDostChatbotOutputSchema},
  tools: [askClarifyingQuestion],
  prompt: `You are Aadhaar Dost, an AI chatbot that answers user questions related to Direct Benefit Transfer (DBT), Aadhaar seeding, and scholarships.

  If a user question is unclear or ambiguous, use the askClarifyingQuestion tool to ask for more information. Do not make assumptions.

  Answer the following question:

  {{query}}`,
});

const aadhaarDostChatbotFlow = ai.defineFlow(
  {
    name: 'aadhaarDostChatbotFlow',
    inputSchema: AadhaarDostChatbotInputSchema,
    outputSchema: AadhaarDostChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
