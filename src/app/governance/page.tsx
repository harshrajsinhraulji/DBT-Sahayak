
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { Briefcase, UserCircle, Building } from "lucide-react";
import { OrgChart } from "@/components/org-chart";

export default function GovernancePage() {
    const { content } = useLanguage();
    const { institutionalFramework, mandate } = content.about;

    return (
        <section id="governance" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6 space-y-12">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                        DBT Governance & Framework
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Understanding the structure and mandate behind the Direct Benefit Transfer mission.
                    </p>
                </div>

                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline"><Building /> {mandate.title}</CardTitle>
                        <CardDescription>{mandate.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        {mandate.aboutText.map((text, i) => <p key={i} className="text-sm">{text}</p>)}
                    </CardContent>
                </Card>

                <div className="grid gap-8 lg:grid-cols-2">
                    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline"><Briefcase /> {institutionalFramework.title}</CardTitle>
                            <CardDescription>{institutionalFramework.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 text-sm text-muted-foreground flex-1">
                            {institutionalFramework.points.map((point, i) => (
                               <div key={i}>
                                   <h4 className="font-semibold text-foreground">{point.title}</h4>
                                   <p className="text-xs">{point.description}</p>
                               </div>
                           ))}
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                             <CardTitle className="flex items-center gap-2 font-headline"><UserCircle /> {mandate.orgChartTitle}</CardTitle>
                             <CardDescription>An overview of the DBT Mission's team structure.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex items-center justify-center p-6">
                            <OrgChart />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
