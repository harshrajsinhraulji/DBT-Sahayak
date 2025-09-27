
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { Phone, Download, ChevronDown, Link as LinkIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const INITIAL_VISIBLE_FORMS = 3;

export function ContactSection() {
  const { content } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleForms = isExpanded ? content.contact.bankForms : content.contact.bankForms.slice(0, INITIAL_VISIBLE_FORMS);

  const toggleExpansion = () => setIsExpanded(!isExpanded);
  
  const officialLinks = [
    {
        title: "National Scholarship Portal (NSP)",
        description: "Official portal for all central government scholarships.",
        link: "https://scholarships.gov.in/",
        icon: <ExternalLink />
    },
    {
        title: "UIDAI Website (Aadhaar)",
        description: "Check status and manage your Aadhaar details.",
        link: "https://myaadhaar.uidai.gov.in/",
        icon: <ExternalLink />
    },
     {
        title: "NPCI Website",
        description: "Learn about the National Payments Corporation of India.",
        link: "https://www.npci.org.in/",
        icon: <ExternalLink />
    }
  ]

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {content.contact.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.contact.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
          
          <div className="grid gap-8">
            <Card>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Phone /> Official Helpline
                </CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-lg font-semibold">{content.contact.helpline}</p>
                <p className="text-sm text-muted-foreground">For any queries related to national scholarships.</p>
                </CardContent>
            </Card>
             {officialLinks.map((item, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span className="flex items-center gap-2">
                             {item.icon} {item.title}
                            </span>
                            <Button asChild variant="ghost" size="icon">
                                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                <LinkIcon className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
             ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{content.contact.resources}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {visibleForms.map((form, index) => (
                <div key={index} className="flex items-center justify-between rounded-md border p-4">
                  <div>
                    <h4 className="font-semibold">{form.name}</h4>
                    <p className="text-sm text-muted-foreground">{form.description}</p>
                  </div>
                  <Button asChild variant="outline" size="icon">
                    <Link href={form.link} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download form</span>
                    </Link>
                  </Button>
                </div>
              ))}
               {content.contact.bankForms.length > INITIAL_VISIBLE_FORMS && (
                <div className="pt-4 text-center">
                  <Button onClick={toggleExpansion} variant="secondary" className="w-full">
                     {isExpanded ? "Show Less" : "Show More"}
                    <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
