"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { CheckCircle, Info } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function EducationSection() {
  const { content } = useLanguage()
  const infographicImage = PlaceHolderImages.find(p => p.id === "infographic-abstract");

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
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
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
          {infographicImage && (
            <Image
                src={infographicImage.imageUrl}
                width={800}
                height={600}
                alt={infographicImage.description}
                data-ai-hint={infographicImage.imageHint}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          )}
        </div>
      </div>
    </section>
  )
}
