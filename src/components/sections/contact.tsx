"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { Phone, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function ContactSection() {
  const { content } = useLanguage();

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
          <Card>
            <CardHeader>
              <CardTitle>{content.contact.resources}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.contact.bankForms.map((form, index) => (
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
