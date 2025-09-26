'use server';

/**
 * @fileOverview This file is the main entry point for all Genkit AI functionality.
 *
 * It initializes the Genkit AI instance with the necessary plugins, defines all the AI flows
 * used in the application by calling the defining functions from other files, and then
 * exports the flow functions so they can be used as Server Actions in the frontend.
 */

import {config} from 'dotenv';
config();

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {setAi} from './genkit';

import {defineAadhaarDostChatbot} from './flows/aadhaar-dost-chatbot';
import {defineFormCheckerFlow} from './flows/form-checker-flow';
import {defineGrievanceHelperFlow} from './flows/grievance-helper-flow';
import type {
  AadhaarDostChatbotInput,
  AadhaarDostChatbotOutput,
  FormCheckerInput,
  FormCheckerOutput,
  GrievanceHelperInput,
  GrievanceHelperOutput,
} from './flows/flow-types';

// Initialize Genkit and the Google AI plugin
const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
});

// Set the exported `ai` object so other files can use it
setAi(ai);

// Define all the flows using the configured `ai` instance
const aadhaarDostChatbotFlow = defineAadhaarDostChatbot();
const formCheckerFlow = defineFormCheckerFlow();
const grievanceHelperFlow = defineGrievanceHelperFlow();

// Define and export the async functions that the frontend will call as Server Actions.
export async function aadhaarDostChatbot(input: AadhaarDostChatbotInput): Promise<AadhaarDostChatbotOutput> {
  return aadhaarDostChatbotFlow(input);
}

export async function formChecker(input: FormCheckerInput): Promise<FormCheckerOutput> {
  return formCheckerFlow(input);
}

export async function grievanceHelper(input: GrievanceHelperInput): Promise<GrievanceHelperOutput> {
  return grievanceHelperFlow(input);
}
