
'use server';
/**
 * @fileOverview A Genkit flow for generating videos from a text prompt.
 *
 * This file defines a flow that uses the Veo model to generate a video based on a
 * user-provided text prompt. It includes logic to handle the asynchronous nature
 * of video generation, polling for completion, and returning the video data as a
 * base64-encoded data URI.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { MediaPart } from 'genkit/model';

// Define the schema for the flow's input, now including context.
const VideoRequestSchema = z.object({
  title: z.string().describe('The title of the video.'),
  language: z.string().describe('The language for the narration (e.g., "English", "Hindi").'),
  context: z.string().describe('Additional context for the video, like related FAQs or myths.'),
});
export type VideoRequest = z.infer<typeof VideoRequestSchema>;


// Define the schema for the flow's output.
const VideoResponseSchema = z.string().describe('The generated video as a data:video/mp4;base64 URI.');

// The main exported function that clients will call.
export async function generateVideo(request: VideoRequest): Promise<string> {
  return videoGeneratorFlow(request);
}

// Define the Genkit prompt with a more sophisticated structure
const videoPrompt = ai.definePrompt({
  name: 'videoGeneratorPrompt',
  input: { schema: VideoRequestSchema },
  prompt: `
    You are an expert video creator specializing in educational content for students.
    Your task is to generate a script and visual cues for a short, engaging video.

    **Video Topic:** {{{title}}}
    **Narration Language:** {{{language}}}
    **Key Information to Include:** {{{context}}}

    **Video Structure:**
    1.  **Intro:** Start with a catchy title screen and a friendly welcome.
    2.  **Content:** Explain the topic clearly. Use the "Key Information" to address a common question or debunk a myth. Use a Q&A or Myth/Fact format.
    3.  **Visuals:** The video should feature simple, clear graphics, text overlays for key points, and an optimistic, encouraging tone.
    4.  **Outro:** End with a summary and a call to action to visit the DBT Sahayak website.

    Generate the video based on this structure.
  `,
});


// Define the Genkit flow for video generation.
const videoGeneratorFlow = ai.defineFlow(
  {
    name: 'videoGeneratorFlow',
    inputSchema: VideoRequestSchema,
    outputSchema: VideoResponseSchema,
  },
  async (request) => {
    console.log(`Generating video for prompt: ${request.title}`);

    const prompt = await videoPrompt(request);

    // Start the video generation process with the Veo model.
    let { operation } = await ai.generate({
      model: 'googleai/veo-2.0-generate-001',
      prompt: prompt.content[0].text!,
      config: {
        durationSeconds: 8,
        aspectRatio: '16:9',
      },
    });

    if (!operation) {
      throw new Error('Expected the model to return an operation');
    }
    console.log('Video generation operation started...');

    // Poll the operation status until it is complete.
    while (!operation.done) {
      console.log('Checking operation status...');
      // Wait for 5 seconds before checking again to avoid excessive polling.
      await new Promise((resolve) => setTimeout(resolve, 5000));
      operation = await ai.checkOperation(operation);
    }

    console.log('Video generation operation finished.');
    
    // Handle any errors that occurred during the operation.
    if (operation.error) {
      console.error('Video generation failed:', operation.error);
      throw new Error(`Failed to generate video: ${operation.error.message}`);
    }

    // Find the video content in the operation's output.
    const video = operation.output?.message?.content.find((p) => !!p.media);
    if (!video || !video.media?.url) {
      throw new Error('Failed to find the generated video in the operation result');
    }

    console.log('Downloading generated video...');
    // Download the video and convert it to a base64 data URI.
    const dataUri = await downloadVideoAsDataUri(video.media);
    console.log('Video downloaded and converted to data URI.');

    return dataUri;
  }
);

/**
 * Downloads video content from a URL and returns it as a base64 data URI.
 * @param media - The media part containing the video URL.
 * @returns A promise that resolves to the video as a data URI string.
 */
async function downloadVideoAsDataUri(media: MediaPart): Promise<string> {
  const fetch = (await import('node-fetch')).default;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable not set.');
  }

  // The URL from the operation result needs the API key appended to be accessible.
  const downloadUrl = `${media.url}&key=${apiKey}`;
  const response = await fetch(downloadUrl);

  if (!response.ok || !response.body) {
    throw new Error(`Failed to download video file: ${response.statusText}`);
  }

  // Read the video content into a buffer.
  const buffer = await response.buffer();
  const contentType = media.contentType || 'video/mp4';

  // Convert the buffer to a base64 string and format it as a data URI.
  return `data:${contentType};base64,${buffer.toString('base64')}`;
}
