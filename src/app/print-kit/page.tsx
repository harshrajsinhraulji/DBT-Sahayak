
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { ArrowLeft, Printer, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function PrintKitPage() {
  const { content } = useLanguage();
  const { title, subtitle, poster, flyer1, flyer2, instructions } = content.printKit;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <header className="no-print mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-headline text-primary">{title}</h1>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <div className="flex gap-4">
             <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft /> Back to Home
              </Link>
            </Button>
            <Button onClick={handlePrint}>
              <Printer /> {instructions.printButton}
            </Button>
          </div>
        </header>

        <main className="printable-area">
          <div className="space-y-8">
            {/* Poster Section */}
            <Card className="p-8 border-4 border-primary border-dashed bg-background text-center">
                <div className="flex justify-center items-center gap-4 mb-4">
                    <Logo className="h-16 w-16 text-primary" />
                    <div className="text-left">
                        <p className="font-bold text-muted-foreground">{content.footer.credits}</p>
                        <p className="font-bold text-muted-foreground">{content.footer.tagline}</p>
                    </div>
                </div>
              <h2 className="text-4xl font-bold font-headline text-primary mb-4">{poster.title}</h2>
              <p className="text-xl text-foreground mb-6">{poster.subtitle}</p>
              <div className="text-left text-lg space-y-2">
                <p className="flex items-start gap-2"><CheckCircle className="text-green-500 mt-1 h-6 w-6 flex-shrink-0" /> <span>{poster.point1}</span></p>
                <p className="flex items-start gap-2"><AlertTriangle className="text-red-500 mt-1 h-6 w-6 flex-shrink-0" /> <span>{poster.point2}</span></p>
              </div>
              <p className="mt-8 text-2xl font-bold font-headline text-accent">{poster.cta}</p>
               <p className="mt-2 text-muted-foreground">{instructions.visitWebsite} <strong>dbt-sahayak.gov.in</strong></p>
            </Card>

            {/* Flyers Section - 2 column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ pageBreakBefore: 'always' }}>
                <Card className="border-2 border-dashed bg-background p-6">
                    <CardHeader>
                        <CardTitle className="font-headline text-primary text-2xl">{flyer1.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>{flyer1.text}</p>
                        <div className="border-t pt-4">
                            <h4 className="font-bold mb-2">{flyer1.stepsTitle}</h4>
                            <ol className="list-decimal list-inside space-y-2 text-sm">
                                {flyer1.steps.map((step, i) => <li key={i}>{step}</li>)}
                            </ol>
                        </div>
                    </CardContent>
                </Card>
                 <Card className="border-2 border-dashed bg-background p-6">
                    <CardHeader>
                        <CardTitle className="font-headline text-primary text-2xl">{flyer2.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>{flyer2.text}</p>
                        <div className="border-t pt-4">
                            <h4 className="font-bold mb-2">{flyer2.myths.title}</h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                {flyer2.myths.list.map((myth, i) => <li key={i}><span className="font-semibold">{instructions.mythLabel}</span> {myth}</li>)}
                            </ul>
                        </div>
                         <p className="font-bold text-accent pt-4 border-t mt-4">{flyer2.tip}</p>
                    </CardContent>
                </Card>
            </div>
             <p className="text-center text-sm text-muted-foreground italic" style={{ pageBreakBefore: 'always' }}>{instructions.footer}</p>
          </div>
        </main>
      </div>
    </div>
  );
}
