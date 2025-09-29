
"use client"

import { useLanguage } from "@/hooks/use-language";
import { Logo } from "@/components/logo";
import { Github, Send, Printer, Users, GanttChartSquare, BrainCircuit, Users2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { content } = useLanguage();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold sm:inline-block font-headline text-lg">
                {content.header.title}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              An initiative by Team Code Technicians for Smart India Hackathon 2025.
            </p>
             <div className="flex items-center gap-4">
                <a href="https://t.me/your-telegram-bot" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-muted-foreground hover:text-primary transition-colors"><Send /></a>
                <a href="https://github.com/harshrajsinhraulji/DBT-Sahayak" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors"><Github /></a>
            </div>
          </div>
          <div className="grid gap-1">
             <h3 className="font-semibold text-foreground">Navigation</h3>
             <Link href="/#education" className="text-muted-foreground hover:text-primary text-sm">Learn</Link>
             <Link href="/#status" className="text-muted-foreground hover:text-primary text-sm">Check Status</Link>
             <Link href="/#scholarships" className="text-muted-foreground hover:text-primary text-sm">Scholarships</Link>
             <Link href="/#faq" className="text-muted-foreground hover:text-primary text-sm">FAQ</Link>
          </div>
           <div className="grid gap-1">
             <h3 className="font-semibold text-foreground">Resources</h3>
             <Link href="/governance" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><GanttChartSquare />Governance</Link>
             <Link href="/resources" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><BrainCircuit />Resources</Link>
             <Link href="/print-kit" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Printer />Printable Kit</Link>
             <Link href="/request-drive" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Users />Request a Drive</Link>
          </div>
           <div className="grid gap-1">
             <h3 className="font-semibold text-foreground">About</h3>
             <Link href="/about-team" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Users2 />About the Team</Link>
             <Link href="/#contact" className="text-muted-foreground hover:text-primary text-sm">Contact Us</Link>
          </div>
        </div>
         <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>{content.footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}
