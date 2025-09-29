
'use client';

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, School, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const teamMembers = [
    {
        name: "Harshrajsinh Raulji",
        role: "Backend, AI & UI/UX Design",
        year: "3rd Year Computer Engineering",
        github: "https://github.com/harshrajsinhraulji",
        linkedin: "https://www.linkedin.com/in/harshrajsinhraulji",
        gender: "male",
        description: "Harshrajsinh led the technical architecture, focusing on backend development with Next.js and Firebase. He engineered the AI-powered form checker and chatbot using Genkit and was instrumental in designing the user interface and overall user experience."
    },
    {
        name: "Vraj Rana",
        role: "Team Lead, Research, QA & Strategy",
        year: "3rd Year Computer Engineering",
        github: "https://github.com/Vraj3654",
        linkedin: "https://www.linkedin.com/in/vraj-rana-765b8329a",
        gender: "male",
        description: "As the Team Lead, Vraj guided the project's strategic direction. He spearheaded the initial research and data gathering efforts, defined the project scope, and managed the Quality Assurance process to ensure a bug-free and reliable application."
    },
    {
        name: "Krishay Shah",
        role: "Telegram Bot & Presentation Lead",
        year: "3rd Year Computer Engineering",
        github: "https://github.com/Krishay-shah",
        linkedin: "https://www.linkedin.com/in/krishay-shah-73991a280",
        gender: "male",
        description: "Krishay expanded the project's reach by developing the complementary Telegram bot for instant user queries. He also took charge of crafting the final presentation, effectively communicating the project's impact and technical details to the judges."
    },
    {
        name: "Khushi Dholakiya",
        role: "Video Creation & Data Gathering",
        year: "2nd Year Computer Engineering",
        github: null,
        linkedin: null,
        gender: "female",
        description: "Khushi was responsible for creating the informative video resources that simplify complex topics for users. She played a key role in the initial data gathering phase, conducting surveys to understand user pain points and inform the project's features."
    },
    {
        name: "Malhar Patel",
        role: "Treasurer & Research",
        year: "3rd Year Computer Engineering",
        github: null,
        linkedin: "https://www.linkedin.com/in/malhar-patel-660441297",
        gender: "male",
        description: "Malhar managed the team's budget, handling all financial aspects including funding for API access and other essential resources. He also contributed significantly to the research phase, helping to gather and organize critical information about DBT schemes."
    },
    {
        name: "Om Jangid",
        role: "Frontend & UI/UX",
        year: "3rd Year Computer Science and Design",
        github: "https://github.com/omjangid16",
        linkedin: "https://www.linkedin.com/in/om-jangid-4568b827a",
        gender: "male",
        description: "Om was a key driver of the frontend development, translating design concepts into responsive and interactive components using React and Tailwind CSS. He collaborated closely on the UI/UX to ensure the application is intuitive and visually appealing."
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
                       <Dialog key={member.name}>
                           <TooltipProvider>
                               <Tooltip>
                                   <TooltipTrigger asChild>
                                       <DialogTrigger asChild>
                                           <Card className={cn(
                                               "group text-center p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-xl cursor-pointer",
                                               "border-border hover:border-primary",
                                               member.gender === 'male' && "hover:border-blue-500",
                                               member.gender === 'female' && "hover:border-pink-500"
                                           )}>
                                               <Avatar className="h-24 w-24 border-2 border-primary text-2xl">
                                                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                               </Avatar>
                                               <div className="flex-1">
                                                   <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                                                   <p className="font-semibold text-sm text-primary">{member.role}</p>
                                                   <p className="text-xs text-muted-foreground">{member.year}</p>
                                               </div>
                                               <div className="flex items-center gap-4 mt-auto">
                                                    {member.linkedin && <Link href={member.linkedin} target="_blank" onClick={(e) => e.stopPropagation()}><Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" /></Link>}
                                                    {member.github && <Link href={member.github} target="_blank" onClick={(e) => e.stopPropagation()}><Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" /></Link>}
                                               </div>
                                           </Card>
                                       </DialogTrigger>
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
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="font-headline text-2xl">{member.name}</DialogTitle>
                                    <DialogDescription className="text-base font-semibold text-primary pt-1">{member.role}</DialogDescription>
                                </DialogHeader>
                                <div className="py-4 text-muted-foreground">
                                    <p>{member.description}</p>
                                </div>
                            </DialogContent>
                       </Dialog>
                   ))}
                </div>
            </div>
        </section>
    );
}
