
"use client";

import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, VideoOff } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface Video {
  id: string;
  title: string;
  description: string;
}

export function VideoSection() {
  const { content, language } = useLanguage();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const videos: Video[] = content.videos.videos.map((v, i) => ({
      ...v,
      id: ['dbt', 'linking-vs-seeding', 'how-to-seed', 'common-myths'][i]
  }));

  const videoPlaceholders = [
    PlaceHolderImages.find(p => p.id === "video-placeholder-1"),
    PlaceHolderImages.find(p => p.id === "video-placeholder-2"),
    PlaceHolderImages.find(p => p.id === "video-placeholder-3"),
    PlaceHolderImages.find(p => p.id === "video-placeholder-4"),
  ];

  const playVideo = (videoId: string) => {
    // Construct the video URL based on ID and current language
    const videoUrl = `/videos/${videoId}-${language}.mp4`;
    setActiveVideoUrl(videoUrl);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    // If a video fails to load, close the player
    console.error("Failed to load video:", (e.target as HTMLVideoElement).src);
    setActiveVideoUrl(null);
    // Optionally, show a toast notification to the user
  };

  // Close video player when language changes
  useEffect(() => {
    setActiveVideoUrl(null);
  }, [language]);

  return (
    <>
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
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden group flex flex-col">
                <div
                  className="relative aspect-video w-full bg-secondary cursor-pointer"
                  onClick={() => playVideo(video.id)}
                >
                  {videoPlaceholders[index] ? (
                    <Image
                      src={videoPlaceholders[index]!.imageUrl}
                      alt={video.description}
                      data-ai-hint={videoPlaceholders[index]!.imageHint}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                       <VideoOff className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="h-12 w-12 text-white/80 transition-colors" />
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-lg font-semibold">{video.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {activeVideoUrl && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveVideoUrl(null)}
        >
          <video
            src={activeVideoUrl}
            controls
            autoPlay
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onError={handleVideoError}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
}

    