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
    <title>DBT Sahayak Logo</title>
    {/* Clean 'B' shape for 'Benefit' that also forms the Rupee Symbol '₹' */}
    <path d="M15 6H8a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h7" />
    <path d="M8 10h8" />
    <path d="M8 14h8" />
  </svg>
);
