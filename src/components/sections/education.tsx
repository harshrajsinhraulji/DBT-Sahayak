
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { CheckCircle, Info } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function EducationSection() {
  const { content } = useLanguage()
  const { education } = content;

  const comparisonData = education.comparison.features;

  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {education.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {education.subtitle}
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
                    {education.card1.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{education.card1.description}</p>
                </CardContent>
              </Card>
              <Card className="border-primary shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CheckCircle />
                    {education.card2.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{education.card2.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{education.comparison.title}</CardTitle>
                <CardDescription>{education.comparison.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">{education.comparison.feature}</TableHead>
                      <TableHead>{education.comparison.linked}</TableHead>
                      <TableHead className="font-bold text-primary">{education.comparison.seeded}</TableHead>
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

    