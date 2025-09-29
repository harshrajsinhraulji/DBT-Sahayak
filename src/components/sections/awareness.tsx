
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";
import { PiggyBank, Tractor, Hammer, HandCoins, HeartPulse, GraduationCap, Home, HelpingHand, Sprout, ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

const iconMap: Record<string, ReactNode> = {
    Subsidies: <PiggyBank className="h-8 w-8" />,
    "Income Support": <Tractor className="h-8 w-8" />,
    "Wage Payments": <Hammer className="h-8 w-8" />,
    "Social Security Pensions": <HandCoins className="h-8 w-8" />,
    "Healthcare-linked": <HeartPulse className="h-8 w-8" />,
    "Educational Benefits": <GraduationCap className="h-8 w-8" />,
    "Housing & Asset Support": <Home className="h-8 w-8" />,
    "Relief & Emergency Transfers": <HelpingHand className="h-8 w-8" />,
    Others: <Sprout className="h-8 w-8" />
};

const SCHEMES_PREVIEW_COUNT = 2;

export function AwarenessSection() {
  const { content } = useLanguage();
  const { awareness } = content;
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategoryExpansion = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section id="awareness" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {awareness.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {awareness.subtitle}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {awareness.categories.map((category, index) => {
                    const isExpanded = expandedCategories.includes(category.category);
                    const visibleSchemes = isExpanded ? category.schemes : category.schemes.slice(0, SCHEMES_PREVIEW_COUNT);

                    return (
                        <AccordionItem key={index} value={`item-${index}`} className="border-none">
                            <Card className="shadow-md hover:shadow-lg transition-shadow">
                                <AccordionTrigger className="hover:no-underline p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 text-primary rounded-lg">
                                            {iconMap[category.category] || <Sprout className="h-8 w-8" />}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-headline text-left">{category.category}</h3>
                                            <p className="text-sm text-muted-foreground text-left">{category.description}</p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>{awareness.tableHeaders.scheme}</TableHead>
                                                <TableHead>{awareness.tableHeaders.ministry}</TableHead>
                                                <TableHead>{awareness.tableHeaders.beneficiaries}</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {visibleSchemes.map((scheme, i) => (
                                                <TableRow key={i}>
                                                    <TableCell className="font-medium">{scheme.name}</TableCell>
                                                    <TableCell>{scheme.ministry}</TableCell>
                                                    <TableCell>{scheme.beneficiaries}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    {category.schemes.length > SCHEMES_PREVIEW_COUNT && (
                                        <div className="pt-4 text-center">
                                            <Button variant="ghost" onClick={() => toggleCategoryExpansion(category.category)}>
                                                {isExpanded ? "Show Less" : "Show More"}
                                                <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
                                            </Button>
                                        </div>
                                    )}
                                </AccordionContent>
                            </Card>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
