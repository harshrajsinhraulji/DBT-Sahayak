
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { Megaphone, SearchCheck } from "lucide-react";
import Link from "next/link";

export function TakeActionSection() {

  return (
    <section id="take-action" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Take Action Now
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              You've learned the importance of a DBT-enabled account. Here's how you can move forward.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 md:grid-cols-2">
            <Card className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <div className="flex items-center gap-3">
                         <SearchCheck className="h-10 w-10 text-accent" />
                         <div>
                            <CardTitle className="font-headline text-2xl">Track Your Journey</CardTitle>
                            <CardDescription>Use our dashboard to complete the seeding process.</CardDescription>
                         </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        If your account is not DBT-enabled, our personalized dashboard will guide you through every step, from downloading the form to checking your final status.
                    </p>
                </CardContent>
                <CardContent>
                     <Button asChild size="lg" className="w-full">
                        <Link href="/dashboard">
                           Go to Dashboard
                        </Link>
                    </Button>
                </CardContent>
            </Card>
             <Card className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <div className="flex items-center gap-3">
                         <Megaphone className="h-10 w-10 text-accent" />
                         <div>
                            <CardTitle className="font-headline text-2xl">Request a Drive</CardTitle>
                            <CardDescription>Bring DBT awareness to your community.</CardDescription>
                         </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                       We conduct free awareness seminars at schools, colleges, and local communities. Fill out a simple form to request a drive in your area.
                    </p>
                </CardContent>
                <CardContent>
                     <Button asChild size="lg" className="w-full" variant="secondary">
                        <Link href="/request-drive">
                           Request an Awareness Drive
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
