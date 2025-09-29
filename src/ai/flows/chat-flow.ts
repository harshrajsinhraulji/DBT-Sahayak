
'use server';

/**
 * @fileOverview A conversational AI flow for the Aadhaar Dost chatbot.
 *
 * - chat - A streaming function that takes conversation history and returns a response.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The output type for the chat function (a stream of strings).
 */

import { ai } from '@/lib/genkit';
import { z } from 'zod';
import { defineFlow } from 'genkit';
import { pageContent } from '@/lib/data';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })),
  language: z.enum(['en', 'hi', 'gu']),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export type ChatOutput = z.infer<typeof z.string>;

const systemPrompt = `You are "Aadhaar Dost", a friendly and helpful AI assistant for the DBT Sahayak website. Your goal is to answer user questions about Aadhaar, DBT (Direct Benefit Transfer), and related scholarship processes.

Your knowledge base is strictly limited to the content provided below. Do not answer any questions that are outside of this context. If a user asks something you don't know, politely state that the query is outside your scope and guide them to the relevant section of the website or the official helpline.

You must answer in the language specified by the user ('en' for English, 'hi' for Hindi, 'gu' for Gujarati).

Your primary context is the DBT Sahayak website content:
---
${JSON.stringify(pageContent)}
---
`;

const chatFlow = defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: z.string(),
    stream: true,
  },
  async (input) => {
    const { history, language } = input;
    
    // Map our history role to Gemini's 'user' or 'model'
    const messages = history.map(msg => ({
      role: msg.role,
      content: [{ text: msg.content }],
    }));

    const model = ai.getGenerator('gemini-1.5-flash-latest');
    
    const { stream } = await model.generate({
      system: systemPrompt,
      history: messages,
      config: {
          // You can add safety settings here if needed
      },
      output: {
        format: 'text',
      },
      prompt: `Language for response: ${language}`,
    });

    const resultStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          controller.enqueue(chunk.output!.toString());
        }
        controller.close();
      },
    });

    return resultStream;
  }
);


export async function chat(input: ChatInput): Promise<ReadableStream<string>> {
  return chatFlow(input);
}
