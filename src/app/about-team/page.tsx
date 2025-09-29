
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, School, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const teamMembers = [
    {
        name: "Harshrajsinh Raulji",
        github: "https://github.com/harshrajsinhraulji",
        linkedin: "https://www.linkedin.com/in/harshrajsinhraulji",
        gender: "male"
    },
    {
        name: "Vraj Rana",
        github: "https://github.com/Vraj3654",
        linkedin: "https://www.linkedin.com/in/vraj-rana-765b8329a",
        gender: "male"
    },
    {
        name: "Krishay Shah",
        github: null,
        linkedin: "https://www.linkedin.com/in/krishay-shah-73991a280",
        gender: "male"
    },
    {
        name: "Khushi Dholakiya",
        github: null,
        linkedin: null,
        gender: "female"
    },
    {
        name: "Malhar Patel",
        github: null,
        linkedin: "https://www.linkedin.com/in/malhar-patel-660441297",
        gender: "male"
    },
    {
        name: "Om Jangid",
        github: "https://github.com/omjangid16",
        linkedin: "https://www.linkedin.com/in/om-jangid-4568b827a",
        gender: "male"
    }
];

const COLLEGE_NAME = "A.D. Patel Institute of Technology";

export default function AboutTeamPage() {
    return (
        <section id="about-team" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                            About The Team
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            The students behind DBT Sahayak for SIH 2025.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
                   {teamMembers.map((member, i) => (
                       <TooltipProvider key={i}>
                           <Tooltip>
                               <TooltipTrigger asChild>
                                   <Card className={cn(
                                       "group text-center p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-xl",
                                       "border-border hover:border-primary",
                                       member.gender === 'male' && "hover:border-blue-500",
                                       member.gender === 'female' && "hover:border-pink-500"
                                   )}>
                                       <Avatar className="h-24 w-24 border-2 border-primary text-2xl">
                                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                       </Avatar>
                                       <div className="flex-1">
                                           <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                                           <p className="text-sm text-muted-foreground">{COLLEGE_NAME}</p>
                                       </div>
                                       <div className="flex items-center gap-4 mt-auto">
                                            {member.linkedin && <Link href={member.linkedin} target="_blank"><Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" /></Link>}
                                            {member.github && <Link href={member.github} target="_blank"><Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" /></Link>}
                                       </div>
                                   </Card>
                               </TooltipTrigger>
                               <TooltipContent>
                                   <div className="flex items-center gap-2">
                                       <School className="h-4 w-4" />
                                       <p>{COLLEGE_NAME}</p>
                                        <User className="h-4 w-4 ml-2" />
                                        <p>{member.gender === 'male' ? 'M' : 'F'}</p>
                                   </div>
                               </TooltipContent>
                           </Tooltip>
                       </TooltipProvider>
                   ))}
                </div>
            </div>
        </section>
    );
}
