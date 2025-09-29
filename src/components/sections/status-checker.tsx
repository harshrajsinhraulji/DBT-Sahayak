
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";

export function StatusCheckerSection() {
  const { content } = useLanguage();
  const router = useRouter();
  const { user } = useAuth();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showStatusPrompt, setShowStatusPrompt] = useState(false);

  const handleCheckStatusClick = () => {
    window.open("https://myaadhaar.uidai.gov.in/bank-seeding-status", "_blank");
    setShowStatusPrompt(true);
  };

  const handleStatusResponse = (isSeeded: boolean) => {
    setShowStatusPrompt(false);
    if (!isSeeded) {
      if (user) {
        router.push('/dashboard');
      } else {
        setShowLoginPrompt(true);
      }
    }
  };

  const handleLoginForGuidance = () => {
    setShowLoginPrompt(false);
    router.push("/login?redirect=/dashboard");
  };

  return (
    <>
      <section
        id="status"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">
              {content.statusChecker.title}
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.statusChecker.description}
            </p>
          </div>
          <div className="mx-auto w-full max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>How to Check</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 text-left">
                  {content.statusChecker.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <p className="flex-1 text-muted-foreground">{step}</p>
                    </li>
                  ))}
                </ol>
                 {showStatusPrompt ? (
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
                        <h4 className="font-bold text-primary">What was your status?</h4>
                        <p className="text-sm text-muted-foreground mt-2 mb-4">After checking the portal, let us know what you found. This helps us guide you better.</p>
                        <div className="flex justify-center gap-4">
                            <Button variant="destructive" onClick={() => handleStatusResponse(false)}>It's NOT Enabled</Button>
                            <Button className="bg-green-600 hover:bg-green-700" onClick={() => handleStatusResponse(true)}>Yes, it IS Enabled!</Button>
                        </div>
                    </div>
                ) : (
                     <div className="mt-6">
                        <Button
                        onClick={handleCheckStatusClick}
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90"
                        >
                        {content.statusChecker.cta} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Login Prompt Dialog for Guidance */}
      <AlertDialog open={showLoginPrompt} onOpenChange={setShowLoginPrompt}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Login for Personalized Guidance</AlertDialogTitle>
            <AlertDialogDescription>
              It looks like your account isn't DBT-enabled. Please log in or create an account to get a personalized dashboard to track your progress.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLoginForGuidance}>
              Login / Sign Up
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

    