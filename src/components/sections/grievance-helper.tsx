"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle, Clipboard, ClipboardCheck } from "lucide-react";
import { grievanceHelper } from "@/ai/flows/grievance-helper-flow";

export function GrievanceHelper() {
  const { content, language } = useLanguage();
  const [isPending, startTransition] = useTransition();
  const [grievanceLetter, setGrievanceLetter] = useState("");
  const [copied, setCopied] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    problemDescription: z.string().min(20, "Problem description must be at least 20 characters."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      problemDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await grievanceHelper({ ...values, language });
        setGrievanceLetter(result.grievanceLetter);
      } catch (error) {
        console.error("Grievance helper error:", error);
        setGrievanceLetter("Sorry, I encountered an error. Please try again.");
      }
    });
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(grievanceLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="grievance" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {content.grievance.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.grievance.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">{content.grievance.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{content.grievance.form.name}</FormLabel>
                        <FormControl>
                          <Input placeholder={content.grievance.form.namePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="problemDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{content.grievance.form.problem}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={content.grievance.form.problemPlaceholder}
                            className="resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isPending}>
                    {isPending && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                    {content.grievance.form.generate}
                  </Button>
                </form>
              </Form>

              {(isPending || grievanceLetter) && (
                <div className="mt-8">
                  <h3 className="text-xl font-headline font-semibold mb-4">{content.grievance.form.resultTitle}</h3>
                  <Card className="bg-muted/50 relative">
                    <CardContent className="p-6">
                      {isPending ? (
                        <div className="flex items-center gap-3">
                           <LoaderCircle className="animate-spin" />
                           <p>Generating your letter...</p>
                        </div>
                      ) : (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={handleCopy}
                          >
                            {copied ? <ClipboardCheck className="text-green-500" /> : <Clipboard />}
                          </Button>
                          <p className="whitespace-pre-wrap font-code text-sm">{grievanceLetter}</p>
                        </>
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
