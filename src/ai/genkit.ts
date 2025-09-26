import {genkit, Genkit} from 'genkit';
import {config} from 'dotenv';
import {googleAI} from '@genkit-ai/googleai';

config();

// This is the global Genkit instance. It is initialized here and then
// imported by other files.
export const ai: Genkit = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
});
