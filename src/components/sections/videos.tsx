"use client";

import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function VideoSection() {
    const { content } = useLanguage();
    const videoPlaceholders = [
        PlaceHolderImages.find(p => p.id === "video-placeholder-1"),
        PlaceHolderImages.find(p => p.id === "video-placeholder-2"),
        PlaceHolderImages.find(p => p.id === "video-placeholder-3"),
        PlaceHolderImages.find(p => p.id === "video-placeholder-4"),
    ]

    return (
        <section id="videos" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                            {content.videos.title}
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {content.videos.subtitle}
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-12">
                    {content.videos.videos.map((video, index) => {
                        const placeholder = videoPlaceholders[index];
                        return (
                            <Card key={index} className="overflow-hidden group cursor-pointer">
                                <div className="relative">
                                    {placeholder && (
                                        <Image
                                            src={placeholder.imageUrl}
                                            width={400}
                                            height={225}
                                            alt={video.title}
                                            data-ai-hint={placeholder.imageHint}
                                            className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <PlayCircle className="h-12 w-12 text-white/80 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold">{video.title}</CardTitle>
                                </CardHeader>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
