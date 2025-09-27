'use server';
/**
 * @fileOverview This file contains the server-side Next.js functions
 * that can be called from client components. It should only export
 * async functions.
 */
import {ai} from './genkitClient';
import {generate} from 'genkit';

/**
 * A simple example of a server action that runs a text-only prompt.
 * @param input The user's text input.
 * @returns The generated text from the model.
 */
export async function runChatbot(input: string): Promise<string> {
  const {output} = await generate({
    model: 'googleai/gemini-1.5-pro',
    prompt: input,
  });
  return output || 'No response';
}
