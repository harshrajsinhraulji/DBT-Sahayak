
"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Printer } from "lucide-react";
import Link from "next/link";

export function PrintKitSection() {
    const { content } = useLanguage();

    return (
        <section id="print" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:gap-12 items-center text-center lg:text-left">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                            Community Action
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                            {content.printKit.title}
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                            {content.printKit.subtitle}
                        </p>
                        <Button asChild size="lg">
                            <Link href="/print-kit">
                                <Printer className="mr-2 h-5 w-5" /> {content.printKit.instructions.printButton}
                            </Link>
                        </Button>
                    </div>
                     <div className="flex justify-center items-center p-8 bg-muted/50 rounded-lg">
                        <div className="text-center">
                            <Printer className="h-24 w-24 text-primary mx-auto" />
                            <p className="text-muted-foreground mt-4">
                                Perfect for notice boards in schools, colleges, and panchayat offices to spread awareness offline.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
