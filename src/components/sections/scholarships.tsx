
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { GraduationCap, ArrowRight, Landmark, Leaf, HeartHandshake, UserCheck } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Scheme } from "@/lib/types";
import { ReactNode } from "react";
import { Separator } from "../ui/separator";

const categoryIcons: Record<string, ReactNode> = {
    scholarship: <GraduationCap className="h-8 w-8 text-accent" />,
    pension: <Landmark className="h-8 w-8 text-accent" />,
    subsidy: <Leaf className="h-8 w-8 text-accent" />,
    other: <HeartHandshake className="h-8 w-8 text-accent" />
}

const SchemeCard = ({ scheme }: { scheme: Scheme }) => (
    <Card className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
        <div className="flex items-start justify-between">
            <CardTitle className="font-headline text-xl">{scheme.title}</CardTitle>
            {categoryIcons[scheme.category] || <HeartHandshake className="h-8 w-8 text-accent" />}
        </div>
        <CardDescription>{scheme.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
        <p className="text-sm">
            <span className="font-semibold">Eligibility: </span>{scheme.eligibility}
        </p>
        </CardContent>
        <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto">
            <Link href={scheme.link} target="_blank" rel="noopener noreferrer">
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
        </CardFooter>
    </Card>
);

export function ScholarshipSection() {
  const { content } = useLanguage();
  const { title, subtitle, schemes, categories } = content.scholarships;
  const [activeTab, setActiveTab] = useState("all");

  const filteredSchemes = activeTab === 'all' 
    ? schemes 
    : schemes.filter(s => s.category === activeTab);

  return (
    <section id="scholarships" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {subtitle}
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto py-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mx-auto max-w-lg mb-8">
                    <TabsTrigger value="all">{categories.all}</TabsTrigger>
                    <TabsTrigger value="scholarship">{categories.scholarships}</TabsTrigger>
                    <TabsTrigger value="pension">{categories.pensions}</TabsTrigger>
                    <TabsTrigger value="subsidy">{categories.subsidies}</TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeTab}>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredSchemes.map((scheme, index) => (
                           <SchemeCard key={`${activeTab}-${index}`} scheme={scheme} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
             {filteredSchemes.length === 0 && (
                <div className="text-center text-muted-foreground py-12">
                    <p>No schemes found in this category.</p>
                </div>
            )}
            <Separator className="my-12" />
            <div className="text-center">
                <h3 className="text-2xl font-bold font-headline mb-4">Not sure where to start?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">Let our Eligibility Checker do the work. Answer a few questions to find the exact DBT schemes you qualify for.</p>
                <Button asChild size="lg">
                    <Link href="/eligibility-checker">
                        <UserCheck className="mr-2 h-5 w-5" />
                        Check Your Eligibility
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  )
}

    