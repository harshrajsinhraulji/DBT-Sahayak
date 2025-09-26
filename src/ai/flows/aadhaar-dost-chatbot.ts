/**
 * @fileOverview A function that defines a Genkit flow for the Aadhaar Dost chatbot.
 *
 * This file exports a function that creates a Genkit flow capable of answering user queries
 * about DBT, Aadhaar seeding, and scholarships. It uses tools to ask clarifying questions
 * and retrieve bank-specific information.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {pageContent} from '@/lib/data';
import {Language} from '@/lib/types';
import type {AadhaarDostChatbotInput, AadhaarDostChatbotOutput} from './flow-types';
import {AadhaarDostChatbotInputSchema, AadhaarDostChatbotOutputSchema} from './flow-types';

export function defineAadhaarDostChatbot() {
  const askClarifyingQuestion = ai.defineTool(
    {
      name: 'askClarifyingQuestion',
      description: 'If the user question is ambiguous, ask a clarifying question to better understand their needs.',
      inputSchema: z.object({
        question: z.string().describe('The clarifying question to ask the user.'),
      }),
      outputSchema: z.string().describe('The clarifying question that was asked to the user'),
    },
    async input => {
      return input.question;
    }
  );

  const getBankInfo = ai.defineTool(
    {
      name: 'getBankInfo',
      description: 'Get information about a specific bank, including a link to their Aadhaar seeding form.',
      inputSchema: z.object({
        bankName: z.string().describe("The name of the bank, e.g., 'State Bank of India', 'SBI', 'PNB'."),
      }),
      outputSchema: z
        .object({
          name: z.string(),
          description: z.string(),
          link: z.string(),
        })
        .nullable(),
    },
    async ({bankName}) => {
      // This tool searches in English content as bank names are universal
      const banks = pageContent.en.contact.bankForms;
      const lowerCaseBankName = bankName.toLowerCase();

      const bank = banks.find(
        b =>
          b.name.toLowerCase().includes(lowerCaseBankName) ||
          (b.name.includes('State Bank of India') && lowerCaseBankName.includes('sbi')) ||
          (b.name.includes('Punjab National Bank') && lowerCaseBankName.includes('pnb')) ||
          (b.name.includes('Bank of Baroda') && lowerCaseBankName.includes('bob'))
      );

      return bank || null;
    }
  );

  const prompt = ai.definePrompt({
    name: 'aadhaarDostChatbotPrompt',
    model: 'gemini-pro',
    input: {schema: AadhaarDostChatbotInputSchema},
    output: {schema: AadhaarDostChatbotOutputSchema},
    tools: [askClarifyingQuestion, getBankInfo],
    prompt: `You are Aadhaar Dost, an AI chatbot that answers user questions related to Direct Benefit Transfer (DBT), Aadhaar seeding, and scholarships.

  VERY IMPORTANT: You MUST respond in the same language the user is asking in. The user's language is {{language}}.

  If a user's question is unclear or ambiguous, use the askClarifyingQuestion tool to ask for more information. Do not make assumptions.

  If a user asks about a specific bank for Aadhaar seeding, use the getBankInfo tool to provide them with the official name of the form and a direct link to download it. If you find information, present it clearly. If you cannot find the specific bank, inform the user and suggest they check the contact section or visit the bank's official website.

  Answer the following question:

  {{query}}`,
  });

  return ai.defineFlow(
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
}
