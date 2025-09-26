"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, CheckSquare } from "lucide-react"
import Link from "next/link"

export function StatusCheckerSection() {
  const { content } = useLanguage()

  return (
    <section id="status" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">
            {content.statusChecker.title}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {content.statusChecker.description}
          </p>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>How to Check</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 text-left">
                {content.statusChecker.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</div>
                    <p className="flex-1 text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link href="https://resident.uidai.gov.in/bank-mapper" target="_blank" rel="noopener noreferrer">
              {content.statusChecker.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
