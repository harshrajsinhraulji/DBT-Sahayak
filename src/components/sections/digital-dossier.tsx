
"use client";

import { useState, useTransition, ChangeEvent, useRef } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Upload, AlertTriangle, FileText, Banknote, UserSquare, Sparkles } from "lucide-react";
import { digitalDossier, type DigitalDossierOutput } from "@/ai/flows/digital-dossier-flow";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Progress } from "../ui/progress";

type FileState = {
  file: File | null;
  preview: string | null;
};

type DocumentType = 'aadhaar' | 'passbook' | 'form';

export function DigitalDossier() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<DigitalDossierOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [aadhaar, setAadhaar] = useState<FileState>({ file: null, preview: null });
  const [passbook, setPassbook] = useState<FileState>({ file: null, preview: null });
  const [form, setForm] = useState<FileState>({ file: null, preview: null });

  const fileInputRefs = {
    aadhaar: useRef<HTMLInputElement>(null),
    passbook: useRef<HTMLInputElement>(null),
    form: useRef<HTMLInputElement>(null),
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, type: DocumentType) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileState = { file: selectedFile, preview: reader.result as string };
        if (type === 'aadhaar') setAadhaar(fileState);
        else if (type === 'passbook') setPassbook(fileState);
        else if (type === 'form') setForm(fileState);
      };
      reader.readAsDataURL(selectedFile);
      setResult(null);
      setError(null);
    }
  };

  const handleUploadClick = (type: DocumentType) => {
    fileInputRefs[type].current?.click();
  };

  const handleSubmit = () => {
    if (!aadhaar.preview || !passbook.preview || !form.preview) return;

    setError(null);
    setResult(null);

    startTransition(async () => {
      try {
        const dossierResult = await digitalDossier({
          aadhaarDataUri: aadhaar.preview!,
          passbookDataUri: passbook.preview!,
          formDataUri: form.preview!,
        });
        setResult(dossierResult);
      } catch (e) {
        console.error("Dossier creation error:", e);
        setError("Sorry, I encountered an error creating the dossier. Please ensure all images are clear and try again.");
      }
    });
  };
  
  const allFilesUploaded = aadhaar.file && passbook.file && form.file;

  const UploadBox = ({ type, state }: { type: DocumentType, state: FileState }) => {
    const icons = {
        aadhaar: <UserSquare className="h-10 w-10 text-muted-foreground" />,
        passbook: <Banknote className="h-10 w-10 text-muted-foreground" />,
        form: <FileText className="h-10 w-10 text-muted-foreground" />,
    }
    const titles = {
        aadhaar: "Upload Aadhaar Card",
        passbook: "Upload Bank Passbook",
        form: "Upload Application Form",
    }
    return (
        <Card className="flex flex-col items-center justify-center border-2 border-dashed p-6 text-center bg-background h-full">
            {state.preview ? (
                 <div className="relative w-full h-full">
                    <Image src={state.preview} alt={`${type} preview`} layout="fill" className="rounded-md object-contain" />
                </div>
            ) : (
                <div className="flex flex-col items-center gap-2">
                    {icons[type]}
                    <p className="font-semibold">{titles[type]}</p>
                </div>
            )}
            <Button onClick={() => handleUploadClick(type)} variant="outline" size="sm" className="mt-4">
                <Upload className="mr-2 h-4 w-4" />
                {state.file ? "Change" : "Upload"}
            </Button>
            <Input
                ref={fileInputRefs[type]}
                type="file"
                className="hidden"
                accept="image/png, image/jpeg, image/webp"
                onChange={(e) => handleFileChange(e, type)}
            />
        </Card>
    )
  }

  return (
    <section id="digital-dossier" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">New AI Feature</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Digital Dossier Creator
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Upload your documents, and our AI will extract key information to help you verify everything is in order.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Sparkles /> Your Digital Dossier</CardTitle>
              <CardDescription>Upload your Aadhaar card, bank passbook (front page), and filled application form.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[250px]">
                    <UploadBox type="aadhaar" state={aadhaar} />
                    <UploadBox type="passbook" state={passbook} />
                    <UploadBox type="form" state={form} />
                </div>
                
                <div className="flex justify-center">
                    <Button onClick={handleSubmit} size="lg" disabled={!allFilesUploaded || isPending}>
                        {isPending ? (
                            <>
                                <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                                Creating Dossier...
                            </>
                        ) : "Create Digital Dossier"}
                    </Button>
                </div>

                {isPending && (
                    <div className="text-center text-muted-foreground flex items-center justify-center gap-2">
                        <LoaderCircle className="animate-spin" />
                        <p>Our AI is analyzing your documents. This may take a moment...</p>
                    </div>
                )}
                
                {error && (
                    <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Dossier Creation Failed</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {result && (
                  <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-center font-headline">Extracted Information</h3>
                  <Card className="bg-muted/50">
                    <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {result.extractedFields.map(({ field, value, confidence }) => (
                        <div key={field} className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">{field}</p>
                            <p className="text-lg font-semibold text-foreground">{value}</p>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">Confidence:</span>
                                <Progress value={confidence * 100} className="w-24 h-2" />
                                <span className="text-xs font-mono">{Math.round(confidence * 100)}%</span>
                            </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
                )}

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
