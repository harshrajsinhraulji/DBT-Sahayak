
/**
 * @fileoverview This file initializes the Genkit AI singleton with the Google AI plugin.
 *
 * It configures Genkit to use the Google AI provider (e.g., for Gemini models)
 * and exports the initialized `ai` object for use throughout the application.
 */

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

// Initialize Genkit with the Google AI plugin.
// This makes Google's AI models available for use in flows and prompts.
export const ai = genkit({
  plugins: [
    googleAI({
      // The Gemini API key is automatically read from the GCE metadata server
      // when deployed on Firebase, or from the GOOGLE_GENAI_API_KEY / GEMINI_API_KEY
      // environment variables when running locally.
    }),
  ],
});
