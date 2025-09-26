"use client";

import { useState, useTransition, ChangeEvent, useRef } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Upload, AlertTriangle, CheckCircle, FileCheck, PartyPopper } from "lucide-react";
import { formChecker } from "@/ai";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

type FeedbackResult = {
  feedback: string;
  errorCount: number;
}

export function FormChecker() {
  const { content } = useLanguage();
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<FeedbackResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setFeedback(null);
      setError(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (!file || !preview) return;

    setError(null);
    setFeedback(null);

    startTransition(async () => {
      try {
        const result = await formChecker({ photoDataUri: preview });
        setFeedback(result);
      } catch (e) {
        console.error("Form checker error:", e);
        setError("Sorry, I encountered an error analyzing the form. The image might be too large or unclear. Please try again.");
      }
    });
  };

  const parseFeedback = (text: string) => {
    return text.split('*').filter(s => s.trim() !== '').map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
        <span>{item.trim()}</span>
      </li>
    ));
  }

  return (
    <section id="form-checker" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">New AI Feature</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              AI-Powered Form Assistant
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.formChecker.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><FileCheck /> {content.formChecker.cardTitle}</CardTitle>
              <CardDescription>{content.formChecker.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <Card className="flex flex-col items-center justify-center border-2 border-dashed p-8 text-center bg-background">
                    {preview ? (
                        <div className="relative w-full max-w-md">
                            <Image src={preview} alt="Form preview" width={400} height={500} className="rounded-md object-contain max-h-[400px] w-full" />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-2 text-muted-foreground">
                            <Upload className="h-12 w-12" />
                            <p className="font-semibold">{content.formChecker.uploadPrompt}</p>
                            <p className="text-xs">{content.formChecker.uploadHint}</p>
                        </div>
                    )}
                </Card>
                <Input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleFileChange}
                />
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={handleUploadClick} variant="outline" size="lg" disabled={isPending}>
                        <Upload className="mr-2 h-5 w-5" />
                        {preview ? content.formChecker.changeButton : content.formChecker.uploadButton}
                    </Button>
                    <Button onClick={handleSubmit} size="lg" disabled={!preview || isPending}>
                        {isPending ? (
                            <>
                                <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                                {content.formChecker.analyzingButton}
                            </>
                        ) : content.formChecker.checkButton}
                    </Button>
                </div>

                {isPending && (
                    <div className="text-center text-muted-foreground flex items-center justify-center gap-2">
                        <LoaderCircle className="animate-spin" />
                        <p>{content.formChecker.analyzingText}</p>
                    </div>
                )}
                
                {error && (
                    <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>{content.formChecker.error.title}</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {feedback && (
                  <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-center">{content.formChecker.resultTitle}</h3>
                  <Card className="bg-background relative">
                    <CardContent className="p-6">
                      {feedback.errorCount > 0 ? (
                         <Alert variant="destructive">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>Found {feedback.errorCount} Potential Error(s)!</AlertTitle>
                            <AlertDescription>
                                <ul className="mt-4 space-y-3">
                                {parseFeedback(feedback.feedback)}
                                </ul>
                                <p className="mt-4 font-semibold">{content.formChecker.error.suggestion}</p>
                            </AlertDescription>
                        </Alert>
                      ) : (
                         <Alert variant="default" className="border-green-500 text-green-700">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <AlertTitle className="text-green-600">{content.formChecker.success.title}</AlertTitle>
                            <AlertDescription>
                                <div className="flex items-center gap-4">
                                  <PartyPopper className="h-10 w-10 text-green-500" />
                                  <div>
                                    <p className="font-semibold">{feedback.feedback}</p>
                                    <p className="text-xs mt-1">{content.formChecker.success.subtitle}</p>
                                  </div>
                                </div>
                            </AlertDescription>
                        </Alert>
                      )}
                    </CardContent>
                  </Card>
                </div>
                )}

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
