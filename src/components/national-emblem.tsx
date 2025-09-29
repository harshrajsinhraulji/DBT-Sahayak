
import { cn } from "@/lib/utils";
import React from 'react';

// Icon for the National Emblem of India (Satyamev Jayate)
export const NationalEmblemOfIndia = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
    aria-labelledby="nationalEmblemTitle"
  >
    <title id="nationalEmblemTitle">National Emblem of India</title>
    <path d="M12 2L8 5h8l-4-3zM8 6v5l-2 1v-5l2-1zm8 0v5l2 1v-5l-2-1zM4 12h16v-1H4v1zm7 1h2v5h-2v-5zm-4.5 1c-.83 0-1.5.67-1.5 1.5S4.67 17 5.5 17s1.5-.67 1.5-1.5S6.33 14 5.5 14zm13 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 18c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);
