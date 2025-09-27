
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
      prev.map((v, i) => (i === index ? { ...v, isLoading: true, error: undefined } : v))
    );

    try {
      const languageMap: Record<string, string> = { en: "English", hi: "Hindi", gu: "Gujarati" };
      const language = languageMap[content.language] || "English";

      // Find a relevant FAQ or Myth to provide context
      const faqContext = content.faq.faqs.find(f => f.question.toLowerCase().includes(videoToGenerate.title.toLowerCase()));
      const mythContext = content.mythBusters.myths.find(m => m.myth.toLowerCase().includes(videoToGenerate.title.toLowerCase()));
      
      let context = `Explain the concept of ${videoToGenerate.title}.`;
      if (faqContext) {
        context = `Answer this question: ${faqContext.question}. The answer is: ${faqContext.answer}`;
      } else if (mythContext) {
        context = `Debunk this myth: "${mythContext.myth}". The truth is: "${mythContext.fact}"`;
      }
      
      const result = await generateVideo({
        title: videoToGenerate.title,
        language: language,
        context: context,
      });

      setVideos((prev) =>
        prev.map((v, i) =>
          i === index
            ? { ...v, isLoading: false, videoUrl: result }
            : v
        )
      );
      // Automatically play the video after generation
      setActiveVideoUrl(result);

    } catch (error) {
       console.error("Video generation failed:", error);
       toast({
        variant: 'destructive',
        title: 'Video Generation Failed',
        description: 'Sorry, we couldn\'t generate the video right now. This can happen during periods of high demand. Please try again later.',
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
    } else if (!video.isLoading) {
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
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                       <p className="text-xs text-muted-foreground p-2">{video.description}</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {video.isLoading ? (
                      <LoaderCircle className="h-12 w-12 text-white/80 animate-spin" />
                    ) : (
                      <PlayCircle className="h-12 w-12 text-white/80 transition-colors" />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveVideoUrl(null)}
        >
          <video
            src={activeVideoUrl}
            controls
            autoPlay
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
