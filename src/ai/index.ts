'use server';

import './genkit';
import {
  aadhaarDostChatbotFlow,
} from './flows/aadhaar-dost-chatbot';
import type {
  AadhaarDostChatbotInput,
  AadhaarDostChatbotOutput,
} from './flows/flow-types';


export async function aadhaarDostChatbot(
  input: AadhaarDostChatbotInput
): Promise<AadhaarDostChatbotOutput> {
  return await aadhaarDostChatbotFlow(input);
}
