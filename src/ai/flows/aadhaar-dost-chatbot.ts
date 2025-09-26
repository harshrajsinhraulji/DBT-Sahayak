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
import { pageContent } from '@/lib/data';

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
  return input.question;
});

const getBankInfo = ai.defineTool({
    name: 'getBankInfo',
    description: 'Get information about a specific bank, including a link to their Aadhaar seeding form.',
    inputSchema: z.object({
        bankName: z.string().describe("The name of the bank, e.g., 'State Bank of India', 'SBI', 'PNB'.")
    }),
    outputSchema: z.object({
        name: z.string(),
        description: z.string(),
        link: z.string(),
    }).nullable(),
}, async ({ bankName }) => {
    const banks = pageContent.en.contact.bankForms;
    const lowerCaseBankName = bankName.toLowerCase();
    
    const bank = banks.find(b => 
        b.name.toLowerCase().includes(lowerCaseBankName) || 
        (b.name.includes("State Bank of India") && lowerCaseBankName.includes("sbi")) ||
        (b.name.includes("Punjab National Bank") && lowerCaseBankName.includes("pnb")) ||
        (b.name.includes("Bank of Baroda") && lowerCaseBankName.includes("bob"))
    );

    return bank || null;
});


const prompt = ai.definePrompt({
  name: 'aadhaarDostChatbotPrompt',
  model: 'googleai/gemini-1.5-flash-latest',
  input: {schema: AadhaarDostChatbotInputSchema},
  output: {schema: AadhaarDostChatbotOutputSchema},
  tools: [askClarifyingQuestion, getBankInfo],
  prompt: `You are Aadhaar Dost, an AI chatbot that answers user questions related to Direct Benefit Transfer (DBT), Aadhaar seeding, and scholarships.

  If a user's question is unclear or ambiguous, use the askClarifyingQuestion tool to ask for more information. Do not make assumptions.

  If a user asks about a specific bank for Aadhaar seeding, use the getBankInfo tool to provide them with the official name of the form and a direct link to download it. If you find information, present it clearly. If you cannot find the specific bank, inform the user and suggest they check the contact section or visit the bank's official website.

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
