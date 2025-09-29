
"use client"

import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function AboutSection() {
    const { content } = useLanguage();
    const { ourTeam } = content.about;
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
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                            {ourTeam.title}
                        </h2>
                         <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {ourTeam.subtitle}
                        </p>
                    </div>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                       {teamMembers.map((name, i) => (
                           <div key={i} className="flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:scale-105">
                               <Avatar className="h-24 w-24 border-2 border-primary text-2xl">
                                    <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                               </Avatar>
                               <div>
                                   <p className="font-semibold text-lg text-foreground">{name}</p>
                               </div>
                           </div>
                       ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
