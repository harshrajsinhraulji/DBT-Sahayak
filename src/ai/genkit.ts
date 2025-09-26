import {genkit, Genkit} from 'genkit';

// This is a placeholder for the ai object that will be initialized in index.ts
// This allows us to have a single ai object that is used throughout the app.
export let ai: Genkit;

export function setAi(newAi: Genkit) {
  ai = newAi;
}
