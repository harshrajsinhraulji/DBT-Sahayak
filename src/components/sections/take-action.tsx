
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { Megaphone, SearchCheck } from "lucide-react";
import Link from "next/link";

export function TakeActionSection() {
  const { content } = useLanguage();
  const { takeAction } = content;

  return (
    <section id="take-action" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {takeAction.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {takeAction.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 md:grid-cols-2">
            <Card className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <div className="flex items-center gap-3">
                         <SearchCheck className="h-10 w-10 text-accent" />
                         <div>
                            <CardTitle className="font-headline text-2xl">{takeAction.card1.title}</CardTitle>
                            <CardDescription>{takeAction.card1.description}</CardDescription>
                         </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        {takeAction.card1.description}
                    </p>
                </CardContent>
                <CardContent>
                     <Button asChild size="lg" className="w-full">
                        <Link href="/dashboard">
                           {takeAction.card1.cta}
                        </Link>
                    </Button>
                </CardContent>
            </Card>
             <Card className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <div className="flex items-center gap-3">
                         <Megaphone className="h-10 w-10 text-accent" />
                         <div>
                            <CardTitle className="font-headline text-2xl">{takeAction.card2.title}</CardTitle>
                            <CardDescription>{takeAction.card2.description}</CardDescription>
                         </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                       {takeAction.card2.description}
                    </p>
                </CardContent>
                <CardContent>
                     <Button asChild size="lg" className="w-full" variant="secondary">
                        <Link href="/request-drive">
                           {takeAction.card2.cta}
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
