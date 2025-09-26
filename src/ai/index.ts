'use server';

import './genkit';

import {defineAadhaarDostChatbot} from './flows/aadhaar-dost-chatbot';
import type {AadhaarDostChatbotInput, AadhaarDostChatbotOutput} from './flows/flow-types';

const aadhaarDostChatbotFlow = defineAadhaarDostChatbot();

export async function aadhaarDostChatbot(
  input: AadhaarDostChatbotInput
): Promise<AadhaarDostChatbotOutput> {
  return await aadhaarDostChatbotFlow(input);
}
