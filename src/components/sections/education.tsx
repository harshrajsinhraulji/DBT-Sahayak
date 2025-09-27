"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { CheckCircle, Info } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function EducationSection() {
  const { content } = useLanguage()

  const comparisonData = [
    {
      feature: "Purpose",
      linked: "Identity verification (KYC)",
      seeded: "Receiving government benefits (DBT)",
    },
    {
      feature: "Mechanism",
      linked: "Simply connected to your bank account's internal system.",
      seeded: "Mapped via the national NPCI server.",
    },
    {
      feature: "Scholarship Funds",
      linked: "Does NOT guarantee receipt of funds.",
      seeded: "Guarantees receipt of DBT funds to this account.",
    },
    {
      feature: "Requirement",
      linked: "Good practice for banking.",
      seeded: "MANDATORY for all scholarships.",
    },
  ];


  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {content.education.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.education.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="text-accent" />
                    {content.education.card1.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{content.education.card1.description}</p>
                </CardContent>
              </Card>
              <Card className="border-primary shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CheckCircle />
                    {content.education.card2.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{content.education.card2.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Side-by-Side Comparison</CardTitle>
                <CardDescription>Key differences at a glance.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Feature</TableHead>
                      <TableHead>Aadhaar Linked</TableHead>
                      <TableHead className="font-bold text-primary">DBT-Enabled (Seeded)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row) => (
                      <TableRow key={row.feature}>
                        <TableCell className="font-semibold">{row.feature}</TableCell>
                        <TableCell>{row.linked}</TableCell>
                        <TableCell className="font-medium text-primary">{row.seeded}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
