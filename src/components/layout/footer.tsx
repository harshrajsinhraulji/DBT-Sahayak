
"use client"

import { useLanguage } from "@/hooks/use-language";
import { Logo } from "@/components/logo";
import { Github, Linkedin, Twitter, Send, Printer, Megaphone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { content } = useLanguage();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-headline font-semibold text-foreground">DBT Sahayak</span>
          </div>
          <div className="text-center">
            <p>An initiative by Team Code Technicians for Smart India Hackathon 2025.</p>
            <p>{content.footer.credits}</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/print-kit" className="text-primary hover:underline flex items-center justify-center gap-2">
                  <Printer className="h-4 w-4" /> {content.printKit.instructions.printButton}
              </Link>
              <Link href="/request-drive" className="text-primary hover:underline flex items-center justify-center gap-2">
                  <Megaphone className="h-4 w-4" /> Request a Drive
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://t.me/your-telegram-bot" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-primary transition-colors"><Send /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin /></a>
            <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><Github /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
