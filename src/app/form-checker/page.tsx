
'use client';

import { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, LoaderCircle, AlertTriangle, FileCheck, XCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { checkAadhaarSeedingForm, CheckFormOutput } from '@/ai/flows/check-form-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function FormCheckerPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<CheckFormOutput | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit
        toast({
          title: 'File Too Large',
          description: 'Please upload an image smaller than 4MB.',
          variant: 'destructive',
        });
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setAnalysisResult(null); // Reset previous results
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const toDataURL = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast({
        title: 'No File Selected',
        description: 'Please select an image of your form to analyze.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    setAnalysisResult(null);

    try {
      const dataUri = await toDataURL(selectedFile);
      const result = await checkAadhaarSeedingForm({ imageDataUri: dataUri });
      setAnalysisResult(result);
      toast({
        title: 'Analysis Complete',
        description: 'Review the feedback below.',
      });
    } catch (error) {
      console.error('Error analyzing form:', error);
      toast({
        title: 'Analysis Failed',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getResultIcon = () => {
    if (!analysisResult) return null;
    if (analysisResult.isCorrect) {
      return <CheckCircle className="h-16 w-16 text-green-500" />;
    }
    return <AlertTriangle className="h-16 w-16 text-yellow-500" />;
  };

  const getResultTitle = () => {
    if (!analysisResult) return '';
    if (analysisResult.isCorrect) {
      return 'Looks Good!';
    }
    return 'Potential Issues Found';
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">AI-Powered Form Checker</CardTitle>
          <CardDescription>
            Upload a photo of your completed Aadhaar Seeding Form, and our AI will check it for common mistakes before you submit it to the bank.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col items-center gap-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/jpeg, image/webp"
              />
              <div
                className="w-full aspect-video rounded-md border-2 border-dashed border-muted-foreground/50 flex items-center justify-center bg-muted/20 cursor-pointer hover:bg-muted/40 transition-colors"
                onClick={handleUploadClick}
              >
                {previewUrl ? (
                  <img src={previewUrl} alt="Form preview" className="object-contain w-full h-full rounded-md" />
                ) : (
                  <div className="text-center text-muted-foreground p-4">
                    <Upload className="h-10 w-10 mx-auto" />
                    <p className="mt-2">Click to upload or drag & drop</p>
                    <p className="text-xs">PNG, JPG, or WEBP (Max 4MB)</p>
                  </div>
                )}
              </div>
              <Button onClick={handleSubmit} disabled={isSubmitting || !selectedFile} className="w-full">
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="animate-spin mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <FileCheck className="mr-2" />
                    Analyze Form
                  </>
                )}
              </Button>
            </div>
            <div className="space-y-4">
                <h3 className="text-xl font-semibold font-headline">Analysis Results</h3>
                {isSubmitting ? (
                     <div className="flex flex-col items-center justify-center text-center p-8 bg-muted/50 rounded-lg">
                         <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
                         <p className="mt-4 text-muted-foreground">Our AI is reviewing your document...</p>
                     </div>
                ) : analysisResult ? (
                    <Card>
                        <CardContent className="p-6">
                            <div className="text-center mb-4">
                                {getResultIcon()}
                                <h4 className="text-2xl font-bold mt-2 font-headline">{getResultTitle()}</h4>
                            </div>
                            <ul className="space-y-3">
                                {analysisResult.issues.map((issue, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm">{issue}</p>
                                    </li>

                                ))}
                            </ul>
                             {analysisResult.isCorrect && (
                                <Alert variant="default" className="border-green-500 bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <AlertTitle>No Issues Found</AlertTitle>
                                    <AlertDescription>
                                       Our AI didn't find any common errors. Please double-check all details yourself before submitting.
                                    </AlertDescription>
                                </Alert>
                            )}
                             <p className="text-xs text-muted-foreground mt-6 italic">*Disclaimer: This AI analysis is for guidance only and does not guarantee approval. Always verify details with your bank.</p>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center p-8 bg-muted/50 rounded-lg">
                        <p className="text-muted-foreground">Upload an image and click "Analyze Form" to see the results here.</p>
                    </div>
                )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
