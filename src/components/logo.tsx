import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-6 h-6", className)}
  >
    <title>DBT Sahayak Logo</title>
    {/* A 'B' shape for "Benefit" combined with Rupee symbol lines */}
    <path d="M12 2a10 10 0 0 0-10 10v0a10 10 0 0 0 10 10h1" />
    <path d="M6 10h10" />
    <path d="M6 14h10" />
  </svg>
);
