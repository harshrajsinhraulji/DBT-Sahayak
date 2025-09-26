"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function AwarenessSection() {
  const { content } = useLanguage()

  const storyImages = [
    PlaceHolderImages.find(p => p.id === "success-story-1"),
    PlaceHolderImages.find(p => p.id === "success-story-2"),
    PlaceHolderImages.find(p => p.id === "success-story-3"),
  ]

  return (
    <section id="awareness" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {content.awareness.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.awareness.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-10 pt-12">
            <Carousel
                opts={{
                align: "start",
                loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                {content.awareness.stories.map((story, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-full">
                        <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                            <Avatar className="w-24 h-24 border-2 border-primary">
                                {storyImages[index] && (
                                    <AvatarImage 
                                        src={storyImages[index]?.imageUrl} 
                                        alt={`Photo of ${story.name}`}
                                        data-ai-hint={storyImages[index]?.imageHint} 
                                    />
                                )}
                                <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <blockquote className="text-lg font-semibold leading-snug">
                            “{story.story}”
                            </blockquote>
                            <p className="font-headline text-accent">- {story.name}</p>
                        </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  )
}
