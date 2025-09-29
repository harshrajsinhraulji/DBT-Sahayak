
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { HelpCircle } from "lucide-react";

export function Legend() {
    return (
        <Card className="shadow-lg sticky top-24">
            <CardHeader>
                <CardTitle>DBT Performance Legend</CardTitle>
                <CardDescription>A composite index of DBT readiness and performance.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <div
                            className="h-8 w-full rounded-md border border-border"
                            style={{ background: 'linear-gradient(to right, #ef4444, #fde047, #a3e635, #22c55e)' }}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1 px-1">
                            <span>Needs Improvement</span>
                            <span>Good</span>
                            <span>Excellent</span>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                         <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-green-500 border"></div>
                            <div className="flex justify-between w-full">
                                <span className="font-semibold">Excellent</span>
                                <span className="font-mono text-muted-foreground">80 - 100</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-lime-400 border"></div>
                             <div className="flex justify-between w-full">
                                <span className="font-semibold">Good</span>
                                <span className="font-mono text-muted-foreground">60 - 79.9</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                           <div className="h-4 w-4 rounded-full bg-yellow-400 border"></div>
                             <div className="flex justify-between w-full">
                                <span className="font-semibold">Moderate</span>
                                <span className="font-mono text-muted-foreground">40 - 59.9</span>
                            </div>
                        </div>
                         <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-red-500 border"></div>
                             <div className="flex justify-between w-full">
                                <span className="font-semibold">Needs Improvement</span>
                                <span className="font-mono text-muted-foreground">0 - 39.9</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 border-t pt-4">
                     <div className="flex items-start gap-3 text-sm text-muted-foreground">
                        <HelpCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <p>
                            <strong>DBT Score:</strong> A composite index based on DBT payment success rates, Aadhaar seeding percentage, and grievance redressal efficiency.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
