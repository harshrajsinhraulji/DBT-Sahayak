
"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const { content } = useLanguage();
  const heroBg = PlaceHolderImages.find((p) => p.id === "hero-background");
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const elem = document.getElementById('education');
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      {heroBg && (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          data-ai-hint={heroBg.imageHint}
          fill
          className="object-cover"
          priority
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
          <div className="space-x-4">
            <a href="#education" onClick={handleScroll}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg transition-transform hover:scale-105">
                {content.hero.cta}
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
