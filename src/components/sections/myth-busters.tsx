"use client";

import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Lightbulb, LightbulbOff } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MythBustersSection() {
  const { content } = useLanguage();

  return (
    <section id="myths" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {content.mythBusters.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.mythBusters.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {content.mythBusters.myths.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                <Card className="bg-muted/30">
                  <AccordionTrigger className="p-6 text-left text-lg font-semibold hover:no-underline">
                    <div className="flex items-center gap-4">
                      <LightbulbOff className="h-8 w-8 text-destructive/80 flex-shrink-0" />
                      <span>{item.myth}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <Card className="bg-background border-primary shadow-md">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Lightbulb className="h-8 w-8 text-primary" />
                        <p className="font-semibold text-primary">{item.fact}</p>
                      </CardHeader>
                    </Card>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
