
"use client"

import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, UserCircle } from "lucide-react";
import { OrgChart } from "../org-chart";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function AboutSection() {
    const { content } = useLanguage();
    const { title, mandate, ourTeam } = content.about;
    const teamMembers = [
        "Harshrajsinh Raulji",
        "Vraj Rana",
        "Krishay Shah",
        "Khushi Dholakiya",
        "Malhar Patel",
        "Om Jangid"
    ];
    
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                            {title}
                        </h2>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-5">
                    {/* Mandate Section */}
                    <Card className="lg:col-span-3 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline"><Building /> {mandate.title}</CardTitle>
                            <CardDescription>{mandate.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            {mandate.aboutText.map((text, i) => <p key={i} className="text-sm">{text}</p>)}
                        </CardContent>
                    </Card>
                    {/* Team Section */}
                    <Card className="lg:col-span-2 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                             <CardTitle className="flex items-center gap-2 font-headline"><Users /> {ourTeam.title}</CardTitle>
                             <CardDescription>{ourTeam.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col items-center justify-center gap-4 pt-6">
                           {teamMembers.map((name, i) => (
                               <div key={i} className="flex items-center gap-4 w-full p-2 rounded-md transition-all duration-300 hover:bg-muted/50 hover:scale-105">
                                   <Avatar className="h-12 w-12 border-2 border-primary">
                                        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                   </Avatar>
                                   <div>
                                       <p className="font-semibold text-foreground">{name}</p>
                                   </div>
                               </div>
                           ))}
                        </CardContent>
                    </Card>
                </div>
                 <div className="pt-12">
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
    )
}
