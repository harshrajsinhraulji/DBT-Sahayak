
"use client";

import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, LoaderCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { generateVideo } from "@/ai/flows/video-generator";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";

interface Video {
  title: string;
  description: string;
}

interface GeneratedVideo extends Video {
  videoUrl?: string;
  isLoading: boolean;
  error?: string;
}

export function VideoSection() {
  const { content } = useLanguage();
  const [videos, setVideos] = useState<GeneratedVideo[]>(
    content.videos.videos.map((v) => ({ ...v, isLoading: false }))
  );
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerateVideo = async (index: number) => {
    const videoToGenerate = videos[index];
    if (videoToGenerate.videoUrl || videoToGenerate.isLoading) return;

    setVideos((prev) =>
      prev.map((v, i) => (i === index ? { ...v, isLoading: true } : v))
    );

    try {
      const languageMap = { en: "English", hi: "Hindi", gu: "Gujarati" };
      const prompt = `Create a short, informative video about '${videoToGenerate.title}'. The narration should be in ${languageMap[content.language]}. The video should be visually engaging for students, using simple graphics and text overlays.`;
      
      const result = await generateVideo(prompt);

      setVideos((prev) =>
        prev.map((v, i) =>
          i === index
            ? { ...v, isLoading: false, videoUrl: result }
            : v
        )
      );

    } catch (error) {
       console.error("Video generation failed:", error);
       toast({
        variant: 'destructive',
        title: 'Video Generation Failed',
        description: 'Sorry, we couldn\'t generate the video right now. Please try again later.',
      });
      setVideos((prev) =>
        prev.map((v, i) =>
          i === index
            ? { ...v, isLoading: false, error: "Failed to generate video." }
            : v
        )
      );
    }
  };

  const playVideo = (index: number) => {
    const video = videos[index];
    if (video.videoUrl) {
      setActiveVideoUrl(video.videoUrl);
    } else {
      handleGenerateVideo(index);
    }
  }

  // Reset videos when language changes
  useEffect(() => {
    setVideos(content.videos.videos.map((v) => ({ ...v, isLoading: false })));
  }, [content.language, content.videos.videos]);


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
                  onClick={() => playVideo(index)}
                >
                  {video.videoUrl ? (
                     <video src={video.videoUrl} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-muted" />
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    {video.isLoading ? (
                      <LoaderCircle className="h-12 w-12 text-white/80 animate-spin" />
                    ) : (
                      <PlayCircle className="h-12 w-12 text-white/80 group-hover:text-white transition-colors" />
                    )}
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-lg font-semibold">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {!video.videoUrl && !video.isLoading && (
                        <Button onClick={() => handleGenerateVideo(index)} size="sm" variant="secondary" className="w-full">Generate Video</Button>
                    )}
                     {video.error && (
                        <p className="text-sm text-destructive">{video.error}</p>
                    )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {activeVideoUrl && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setActiveVideoUrl(null)}
        >
          <video
            src={activeVideoUrl}
            controls
            autoPlay
            className="max-w-[90vw] max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
