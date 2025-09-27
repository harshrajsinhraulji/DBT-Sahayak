'use server';
import { ai } from './genkitClient';

export async function runChatbot(input: string): Promise<string> {
  const { output } = await ai.generate({
    model: 'gemini-1.5-flash',
    prompt: input,
  });
  return output || 'No response';
}
