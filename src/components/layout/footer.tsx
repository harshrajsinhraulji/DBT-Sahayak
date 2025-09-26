"use client"

import { useLanguage } from "@/hooks/use-language";
import { Logo } from "@/components/logo";
import { Github, Linkedin, Twitter, Send } from "lucide-react";
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
            <p>{content.footer.tagline}</p>
            <p>{content.footer.credits}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://t.me/your-telegram-bot" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-primary transition-colors"><Send /></Link>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin /></a>
            <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><Github /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
