
"use client"

import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Info } from "lucide-react";
import { OrgChart } from "../org-chart";

export function AboutDbtSection() {
    const { content } = useLanguage();
    const { title, subtitle, aboutText, orgChartTitle } = content.aboutDbt;
    
    return (
        <section id="about-dbt" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                            {title}
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {subtitle}
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-2">
                    <Card className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Info /> About The Mission</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            {aboutText.map((text, i) => <p key={i}>{text}</p>)}
                        </CardContent>
                    </Card>
                    <Card className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                             <CardTitle className="flex items-center gap-2"><Users /> {orgChartTitle}</CardTitle>
                             <CardDescription>An overview of the team structure.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex items-center justify-center">
                            <OrgChart />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
