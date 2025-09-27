/**
 * @fileoverview This file initializes the Genkit AI plugin and exports the `ai` object.
 */
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Initialize the Genkit AI plugin with Google AI.
// You can add other plugins to this array, such as a vector database.
// See https://firebase.google.com/docs/genkit
export const ai = genkit({
  plugins: [
    googleAI({
      apiVersion: ['v1', 'v1beta'],
    }),
  ],
  logLevel: 'debug',
  enableTracing: true,
});
