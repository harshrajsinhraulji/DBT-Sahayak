
'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';
import { LoaderCircle, PartyPopper } from 'lucide-react';
import Link from 'next/link';

const journeySteps = [
  { id: 'download-form', label: 'Download Aadhaar Seeding Form' },
  { id: 'fill-form', label: 'Fill out the form correctly' },
  { id: 'visit-bank', label: 'Visit bank with form and Aadhaar copy' },
  { id: 'submit-docs', label: 'Submit documents and get acknowledgement' },
  { id: 'wait-days', label: 'Wait for 3-5 business days for processing' },
  { id: 'check-status', label: 'Check status on UIDAI portal again' },
];

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  
  // Persist state to localStorage
  useEffect(() => {
    if (user) {
      const savedSteps = localStorage.getItem(`dbt-journey-${user.uid}`);
      if (savedSteps) {
        setCompletedSteps(JSON.parse(savedSteps));
      }
    }
  }, [user]);

  useEffect(() => {
     if (user) {
      localStorage.setItem(`dbt-journey-${user.uid}`, JSON.stringify(completedSteps));
    }
  }, [completedSteps, user]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleStepToggle = (stepId: string) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId]
    );
  };
  
  const progressPercentage = (completedSteps.length / journeySteps.length) * 100;
  const allStepsCompleted = completedSteps.length === journeySteps.length;

  if (loading || !user) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }
  
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">My DBT Journey</CardTitle>
          <CardDescription>
            Welcome, {user.displayName}! Track your progress to get your bank account DBT-enabled.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
                <p className="text-sm font-medium">{Math.round(progressPercentage)}% Complete</p>
                <Progress value={progressPercentage} />
            </div>

            {allStepsCompleted && (
                 <Alert className="border-green-500 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                    <PartyPopper className="h-5 w-5 text-green-500" />
                    <AlertTitle className="font-bold">Congratulations!</AlertTitle>
                    <AlertDescription>
                        You have completed all the steps. Your account should now be active for DBT.
                    </AlertDescription>
                </Alert>
            )}

            <div className="space-y-4">
              {journeySteps.map((step) => (
                <div key={step.id} className="flex items-center space-x-3 rounded-md border p-4 transition-colors hover:bg-muted/50">
                  <Checkbox
                    id={step.id}
                    checked={completedSteps.includes(step.id)}
                    onCheckedChange={() => handleStepToggle(step.id)}
                    className="h-5 w-5"
                  />
                  <Label
                    htmlFor={step.id}
                    className={`flex-1 text-base cursor-pointer ${completedSteps.includes(step.id) ? 'text-muted-foreground line-through' : 'text-foreground'}`}
                  >
                    {step.label}
                  </Label>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
                <Button variant="outline" asChild>
                    <Link href="/#contact">Find Bank Forms</Link>
                </Button>
                 <Button variant="secondary" asChild>
                    <Link href="https://myaadhaar.uidai.gov.in/bank-seeding-status" target="_blank">
                        Check Official Status
                    </Link>
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
