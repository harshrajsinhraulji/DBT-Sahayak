
"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FileCheck, GraduationCap, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function HeroSection() {
  const { content } = useLanguage();
  const heroBg = PlaceHolderImages.find((p) => p.id === "hero-background");
  
  const heroCards = [
    {
        title: "Check your DBT Status",
        description: "Verify if your account is ready to receive funds.",
        icon: <Search className="h-8 w-8 text-white" />,
        href: "#status",
        bgColor: "bg-blue-500/30",
        borderColor: "border-blue-400"
    },
    {
        title: "Explore Scholarships",
        description: "Find scholarship opportunities waiting for you.",
        icon: <GraduationCap className="h-8 w-8 text-white" />,
        href: "#scholarships",
        bgColor: "bg-purple-500/30",
        borderColor: "border-purple-400"
    },
    {
        title: "AI Form Checker",
        description: "Let our AI check your seeding form for errors before you submit.",
        icon: <FileCheck className="h-8 w-8 text-white" />,
        href: "/form-checker",
        bgColor: "bg-green-500/30",
        borderColor: "border-green-400"
    }
  ]

  return (
    <section className="relative w-full min-h-[90vh] py-20 flex items-center justify-center text-center text-white overflow-hidden">
      {heroBg && (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          data-ai-hint={heroBg.imageHint}
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WQ8AAn8B2p5IppEAAAAASUVORK5CYII="
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-primary/60 to-accent/60" />

      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-semibold bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 inline-block">
              {content.hero.tagline}
            </p>
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
              {content.hero.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              {content.hero.subtitle}
            </p>
          </div>
        </div>
        
        <div className="mt-12">
            <Carousel 
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
                className="w-full max-w-4xl mx-auto"
            >
                <CarouselContent>
                    {heroCards.map((card, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                             <Link href={card.href}>
                                <Card className={`h-full group text-left backdrop-blur-lg transition-all duration-300 hover:scale-105 ${card.bgColor} ${card.borderColor} border`}>
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="p-3 rounded-full bg-white/10">
                                           {card.icon}
                                        </div>
                                        <CardTitle className="font-headline text-xl text-white">{card.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300">{card.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
      </div>
    </section>
  );
}
