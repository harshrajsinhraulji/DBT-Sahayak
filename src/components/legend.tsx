
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { HelpCircle } from "lucide-react";

const legendItems = [
    { color: '#22c55e', label: 'Excellent', range: '80 - 100' },
    { color: '#a3e635', label: 'Good', range: '60 - 79.9' },
    { color: '#fde047', label: 'Moderate', range: '40 - 59.9' },
    { color: '#ef4444', label: 'Needs Improvement', range: '0 - 39.9' },
];

export function Legend() {
    return (
        <Card className="shadow-lg sticky top-24">
            <CardHeader>
                <CardTitle>DBT Performance Legend</CardTitle>
                <CardDescription>Color scale for state performance scores.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {legendItems.map(item => (
                        <div key={item.label} className="flex items-center gap-3">
                            <div
                                className="h-6 w-6 rounded-sm border border-border"
                                style={{ backgroundColor: item.color }}
                            />
                            <div className="flex-1">
                                <span className="font-semibold">{item.label}</span>
                                <span className="text-sm text-muted-foreground ml-2">({item.range})</span>
                            </div>
                        </div>
                    ))}
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
