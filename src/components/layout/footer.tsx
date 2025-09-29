
"use client"

import { useLanguage } from "@/hooks/use-language";
import { Logo } from "@/components/logo";
import { Github, Send, Printer, Users, GanttChartSquare, BrainCircuit, Users2, BookOpen, Search, GraduationCap, HelpCircle, Phone, Info, Video } from "lucide-react";
import Link from "next/link";
import { NationalEmblemOfIndia } from "../national-emblem";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export function Footer() {
  const { content } = useLanguage();
  const { education, about } = content;

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold sm:inline-block font-headline text-lg">
                {content.header.title}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              {content.footer.tagline}
            </p>
             <div className="flex items-center gap-4">
                <NationalEmblemOfIndia className="h-10 w-10 text-muted-foreground" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">{content.footer.credits}</p>
                  <a href="https://socialjustice.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline font-semibold">
                    Ministry of Social Justice & Empowerment
                  </a>
                </div>
            </div>
          </div>
          
          {/* Right Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="grid gap-2">
               <h3 className="font-semibold text-foreground">{content.footer.navigation}</h3>
               <Link href="/#education" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><BookOpen className="h-4 w-4" />{content.header.nav.education}</Link>
               <Link href="/#videos" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Video className="h-4 w-4"/>{content.header.nav.videos}</Link>
               <Link href="/#status" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Search className="h-4 w-4"/>{content.header.nav.status}</Link>
               <Link href="/#scholarships" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><GraduationCap className="h-4 w-4"/>{content.header.nav.scholarships}</Link>
               <Link href="/#faq" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><HelpCircle className="h-4 w-4"/>{content.header.nav.faq}</Link>
               <Link href="/#contact" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Phone className="h-4 w-4"/>{content.header.nav.contact}</Link>
            </div>
             <div className="grid gap-2">
               <h3 className="font-semibold text-foreground">{content.footer.resources}</h3>
               <Link href="/governance" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><GanttChartSquare className="h-4 w-4" />{content.header.nav.governance}</Link>
               <Link href="/resources" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><BrainCircuit className="h-4 w-4" />{content.header.nav.resources}</Link>
               <Link href="/print-kit" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Printer className="h-4 w-4" />{content.header.nav.printKit}</Link>
               <Link href="/request-drive" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Users className="h-4 w-4" />{content.header.nav.requestDrive}</Link>
            </div>
             <div className="grid gap-2">
               <h3 className="font-semibold text-foreground">{content.footer.about}</h3>
               <Link href="/about-team" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Users2 className="h-4 w-4" />{content.header.nav.aboutTeam}</Link>

                <Dialog>
                    <DialogTrigger asChild>
                       <Button variant="link" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2 p-0 h-auto justify-start"><Info className="h-4 w-4" />{content.footer.learnMore}</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                        <DialogTitle className="font-headline text-2xl">{content.footer.learnMore}</DialogTitle>
                        <DialogDescription>
                            A quick overview of the Direct Benefit Transfer mission and its framework.
                        </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="max-h-[70vh] pr-6">
                            <div className="space-y-6 text-sm py-4">
                                <h4 className="font-semibold text-primary">{about.mandate.title}</h4>
                                {about.mandate.aboutText.map((text, i) => <p key={i} className="text-muted-foreground">{text}</p>)}

                                <Separator />

                                 <h4 className="font-semibold text-primary">{education.title}</h4>
                                 <p className="text-muted-foreground">{education.subtitle}</p>
                                 <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-bold">{education.card1.title}</h5>
                                        <p className="text-muted-foreground">{education.card1.description}</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold">{education.card2.title}</h5>
                                        <p className="text-muted-foreground">{education.card2.description}</p>
                                    </div>
                                 </div>

                                <Separator />

                                <h4 className="font-semibold text-primary">{about.institutionalFramework.title}</h4>
                                <ul className="space-y-4">
                                  {about.institutionalFramework.points.map((point, i) => (
                                    <li key={i}>
                                      <span className="font-semibold text-foreground">{point.title}: </span>
                                      <span className="text-muted-foreground">{point.description}</span>
                                    </li>
                                  ))}
                                </ul>
                            </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
                
                 <a href="https://github.com/harshrajsinhraulji/DBT-Sahayak" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Github className="h-4 w-4" />{content.footer.github}</a>
                 <a href="https://t.me/your-telegram-bot" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Send className="h-4 w-4" />{content.footer.telegram}</a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
