import {z} from 'genkit';

export const AadhaarDostChatbotInputSchema = z.object({
  history: z.array(z.any()),
  query: z.string(),
  language: z.string(),
});
export type AadhaarDostChatbotInput = z.infer<
  typeof AadhaarDostChatbotInputSchema
>;

export const AadhaarDostChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query.'),
});
export type AadhaarDostChatbotOutput = z.infer<
  typeof AadhaarDostChatbotOutputSchema
>;
