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
import { ArrowRight, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useAuth } from "@/hooks/use-auth";

export function StatusCheckerSection() {
  const { content } = useLanguage();
  const router = useRouter();
  const { user } = useAuth();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showStatusPrompt, setShowStatusPrompt] = useState(false);
  const [showGuidance, setShowGuidance] = useState(false);

  const handleCheckStatusClick = () => {
    // Directly open the portal for all users
    window.open("https://myaadhaar.uidai.gov.in/bank-seeding-status", "_blank");
    // Then show the prompt to ask for their status
    setShowStatusPrompt(true);
  };

  const handleStatusResponse = (isSeeded: boolean) => {
    setShowStatusPrompt(false);
    if (!isSeeded) {
      if (user) {
        setShowGuidance(true);
        // Here you would typically save the user's status to your database
      } else {
        // If not logged in, prompt them to log in to get guidance
        setShowLoginPrompt(true);
      }
    }
  };

  const handleLoginForGuidance = () => {
    setShowLoginPrompt(false);
    router.push("/login");
  }

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
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Button
              onClick={handleCheckStatusClick}
              size="lg"
              className="bg-accent hover:bg-accent/90"
            >
              {content.statusChecker.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Login Prompt Dialog for Guidance */}
      <AlertDialog open={showLoginPrompt} onOpenChange={setShowLoginPrompt}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Login for Personalized Guidance</AlertDialogTitle>
            <AlertDialogDescription>
              It looks like your account isn't DBT-enabled. Please log in or create an account to get personalized steps on how to fix it.
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

      {/* Status Check Prompt Dialog */}
      <AlertDialog open={showStatusPrompt} onOpenChange={setShowStatusPrompt}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Is Your Account DBT Enabled?</AlertDialogTitle>
            <AlertDialogDescription>
              After checking the UIDAI portal, please confirm if your bank account is active and seeded for DBT. This helps us provide better guidance.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => handleStatusResponse(false)}>
              No, it&apos;s not enabled
            </AlertDialogAction>
            <AlertDialogAction onClick={() => handleStatusResponse(true)}>
              Yes, it is enabled
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Guidance Dialog */}
      <Dialog open={showGuidance} onOpenChange={setShowGuidance}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="text-primary" /> Steps to Enable DBT
            </DialogTitle>
            <DialogDescription>
              Don&apos;t worry, here&apos;s how you can get your account seeded for DBT payments.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-sm text-muted-foreground space-y-4">
              <p>
                To receive scholarships, your bank account must be 'seeded' with your Aadhaar in the NPCI database. Follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 font-semibold text-foreground">
                  <li>Visit your nearest bank branch.</li>
                  <li>Fill out the "Aadhaar Seeding and NPCI Mapping Application Form". You can find many of these forms in our <a href="#contact" onClick={() => setShowGuidance(false)} className="text-primary underline">Contact section</a>.</li>
                  <li>Submit the form along with a self-attested copy of your Aadhaar card.</li>
                  <li>The bank will process your request, which may take a few business days.</li>
                  <li>You can check the status again on the UIDAI portal after a week.</li>
              </ol>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
