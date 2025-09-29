
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { Download, Printer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function PrintKitSection() {
    const { content } = useLanguage();
    const flyerImage = PlaceHolderImages.find(p => p.id === "infographic-abstract");

    return (
        <section id="print" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                            Community Action
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                            {content.printKit.title}
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {content.printKit.subtitle}
                        </p>
                        <Button asChild size="lg">
                            <Link href="/print-kit">
                                <Printer className="mr-2 h-5 w-5" /> {content.printKit.instructions.printButton}
                            </Link>
                        </Button>
                    </div>
                    <div className="flex justify-center">
                         <Card className="w-full max-w-md shadow-lg hover:shadow-2xl transition-shadow duration-300">
                             <CardHeader>
                                 <CardTitle>What's Inside</CardTitle>
                                 <CardDescription>A poster and two flyer designs.</CardDescription>
                             </CardHeader>
                             <CardContent>
                                {flyerImage && (
                                    <Image
                                        src={flyerImage.imageUrl}
                                        alt="Printable flyer preview"
                                        data-ai-hint={flyerImage.imageHint}
                                        width={500}
                                        height={350}
                                        className="rounded-lg object-cover"
                                    />
                                )}
                                 <p className="text-sm text-muted-foreground mt-4">
                                    Perfect for notice boards in schools, colleges, and panchayat offices to spread awareness offline.
                                 </p>
                             </CardContent>
                         </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
