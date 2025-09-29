import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-6 h-6", className)}
  >
    {/* Rupee Symbol */}
    <path d="M6 3h8" />
    <path d="M6 8h8" />
    <path d="M7 3v13" />
    <path d="M9.5 8c3.5 0 5.5 2 5.5 5.5S13 19 9.5 19h-2" />
    
    {/* Supportive Hand */}
    <path d="M7 16.5c-1.7 0-3 1.3-3 3v0c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v0c0-1.7-1.3-3-3-3" />
    <path d="M5.5 16.5c.3-2.2 2.3-4 4.5-4s4.2 1.8 4.5 4" />
  </svg>
);