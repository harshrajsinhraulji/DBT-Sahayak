import {z} from 'genkit';
import {ai} from '../genkit';
import {pageContent} from '@/lib/data';
import {
  AadhaarDostChatbotInputSchema,
  AadhaarDostChatbotOutputSchema,
} from './flow-types';

const getBankInfo = ai.defineTool(
  {
    name: 'getBankInfo',
    description:
      'Get information about a specific bank, including a link to their Aadhaar seeding form.',
    inputSchema: z.object({
      bankName: z
        .string()
        .describe(
          "The name of the bank, e.g., 'State Bank of India', 'SBI', 'PNB'."
        ),
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
        (b.name.includes('State Bank of India') &&
          lowerCaseBankName.includes('sbi')) ||
        (b.name.includes('Punjab National Bank') &&
          lowerCaseBankName.includes('pnb')) ||
        (b.name.includes('Bank of Baroda') && lowerCaseBankName.includes('bob'))
    );

    return bank || null;
  }
);

const prompt = ai.definePrompt({
  name: 'aadhaarDostChatbotPrompt',
  model: 'googleai/gemini-2.5-flash-preview',
  input: {schema: AadhaarDostChatbotInputSchema},
  output: {schema: AadhaarDostChatbotOutputSchema},
  tools: [getBankInfo],
  prompt: `You are Aadhaar Dost, an AI chatbot that answers user questions related to Direct Benefit Transfer (DBT), Aadhaar seeding, and scholarships.

  VERY IMPORTANT: You MUST respond in the same language the user is asking in. The user's language is {{language}}.

  If a user asks about a specific bank for Aadhaar seeding, use the getBankInfo tool to provide them with the official name of the form and a direct link to download it. If you find information, present it clearly. If you cannot find the specific bank, inform the user and suggest they check the contact section or visit the bank's official website.

  Answer the following question:

  {{query}}`,
});

export const aadhaarDostChatbotFlow = ai.defineFlow(
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
