
"use client";

import { useLanguage } from "@/hooks/use-language";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, Info, GitCompareArrows, FileText, BadgeHelp } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

interface Video {
  id: string;
  title: string;
  description: string;
}

const iconMap: Record<string, ReactNode> = {
    'dbt': <Info className="h-12 w-12 text-primary/80" />,
    'linking-vs-seeding': <GitCompareArrows className="h-12 w-12 text-primary/80" />,
    'how-to-seed': <FileText className="h-12 w-12 text-primary/80" />,
    'common-myths': <BadgeHelp className="h-12 w-12 text-primary/80" />
};

export function VideoSection() {
  const { content, language } = useLanguage();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const videos: Video[] = content.videos.videos.map((v, i) => ({
      ...v,
      id: ['dbt', 'linking-vs-seeding', 'how-to-seed', 'common-myths'][i]
  }));

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
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
            {videos.map((video, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group flex flex-col shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => playVideo(video.id)}
              >
                <div
                  className="relative aspect-video w-full bg-primary/5 flex flex-col items-center justify-center p-4 text-center"
                >
                  {iconMap[video.id]}
                   <h3 className="mt-4 font-bold text-lg text-primary">{video.title}</h3>

                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="h-16 w-16 text-white/80 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-base font-semibold leading-normal">{video.description}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {activeVideoUrl && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in-0"
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
