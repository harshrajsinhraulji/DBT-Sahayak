/**
 * @fileOverview This file initializes the Genkit client and should not
 * contain the "use server" directive. It is safe to be imported by
 * server-side files.
 */
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import 'dotenv/config';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
