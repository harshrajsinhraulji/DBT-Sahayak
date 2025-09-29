
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { Phone, Download, ChevronDown, Link as LinkIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

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
    },
    {
        title: "UIDAI Website (Aadhaar)",
        description: "Check status and manage your Aadhaar details.",
        link: "https://myaadhaar.uidai.gov.in/",
    },
     {
        title: "NPCI Website",
        description: "Learn about the National Payments Corporation of India.",
        link: "https://www.npci.org.in/",
    },
    {
        title: "DBT Bharat Portal",
        description: "The official Direct Benefit Transfer mission website.",
        link: "https://dbtbharat.gov.in/",
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
          
          <div className="grid gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-accent" /> Official Helpline
                </CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-2xl font-bold font-headline">{content.contact.helpline}</p>
                <p className="text-sm text-muted-foreground mt-1">For any queries related to national scholarships.</p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {officialLinks.map((item, index) => (
                <Card key={index} className="flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                        <CardDescription className="text-xs">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
             ))}
            </div>
          </div>

          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{content.contact.resources}</CardTitle>
              <CardDescription>Download Aadhaar seeding forms for major banks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {visibleForms.map((form, index) => (
                <div key={index} className="flex items-center justify-between rounded-md border p-3 hover:bg-muted/50 transition-colors">
                  <div>
                    <h4 className="font-semibold">{form.name}</h4>
                  </div>
                  <Button asChild variant="ghost" size="icon">
                    <Link href={form.link} target="_blank" rel="noopener noreferrer">
                      <Download className="h-5 w-5 text-primary" />
                      <span className="sr-only">Download form</span>
                    </Link>
                  </Button>
                </div>
              ))}
               {content.contact.bankForms.length > INITIAL_VISIBLE_FORMS && (
                <div className="pt-4">
                  <Separator />
                  <Button onClick={toggleExpansion} variant="secondary" className="w-full mt-4">
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

    