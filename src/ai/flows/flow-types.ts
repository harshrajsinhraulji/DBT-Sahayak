/**
 * @fileOverview This file defines the shared input and output types for all Genkit flows.
 *
 * It uses Zod to create schemas for runtime validation and TypeScript for static type checking.
 */

import {z} from 'genkit';
import {Language} from '@/lib/types';

// ================================================================================================
// Aadhaar Dost Chatbot Flow Types
// ================================================================================================

export const AadhaarDostChatbotInputSchema = z.object({
  query: z.string().describe('The user\'s question.'),
  language: z.nativeEnum(Language).describe('The language the user is asking in.'),
});
export type AadhaarDostChatbotInput = z.infer<typeof AadhaarDostChatbotInputSchema>;

export const AadhaarDostChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s answer to the user\'s question.'),
});
export type AadhaarDostChatbotOutput = z.infer<typeof AadhaarDostChatbotOutputSchema>;

// ================================================================================================
// Form Checker Flow Types
// ================================================================================================

export const FormCheckerInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user's filled-out bank form as a data URI, including MIME type and Base64 encoding."
    ),
});
export type FormCheckerInput = z.infer<typeof FormCheckerInputSchema>;

export const FormCheckerOutputSchema = z.object({
  feedback: z
    .string()
    .describe(
      'Bulleted list of feedback on the form. If no errors, a positive confirmation message.'
    ),
  errorCount: z.number().describe('The number of potential errors found in the form.'),
});
export type FormCheckerOutput = z.infer<typeof FormCheckerOutputSchema>;


// ================================================================================================
// Grievance Helper Flow Types
// ================================================================================================

export const GrievanceHelperInputSchema = z.object({
  name: z.string().describe("The user's full name."),
  problemDescription: z.string().describe("A simple description of the user's problem."),
  language: z.nativeEnum(Language).describe('The language for the grievance letter.'),
});
export type GrievanceHelperInput = z.infer<typeof GrievanceHelperInputSchema>;

export const GrievanceHelperOutputSchema = z.object({
  grievanceLetter: z.string().describe('The generated formal grievance letter.'),
});
export type GrievanceHelperOutput = z.infer<typeof GrievanceHelperOutputSchema>;
