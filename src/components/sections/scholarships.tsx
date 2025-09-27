
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { GraduationCap, ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils";

const INITIAL_VISIBLE_SCHOLARSHIPS = 3;

export function ScholarshipSection() {
  const { content } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleScholarships = isExpanded ? content.scholarships.scholarships : content.scholarships.scholarships.slice(0, INITIAL_VISIBLE_SCHOLARSHIPS);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <section id="scholarships" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {content.scholarships.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.scholarships.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl py-12">
          {visibleScholarships.map((scholarship, index) => (
            <Card key={index} className="flex flex-col shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                    <CardTitle className="font-headline text-xl">{scholarship.title}</CardTitle>
                    <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <CardDescription>{scholarship.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm">
                    <span className="font-semibold">Eligibility: </span>{scholarship.eligibility}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={scholarship.link} target="_blank" rel="noopener noreferrer">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {content.scholarships.scholarships.length > INITIAL_VISIBLE_SCHOLARSHIPS && (
          <div className="text-center">
            <Button onClick={toggleExpansion} variant="outline">
              {isExpanded ? "Show Less" : "Show More"}
              <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
