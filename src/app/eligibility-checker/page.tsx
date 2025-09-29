
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useState, useMemo } from 'react';
import { pageContent } from '@/lib/data';
import { type Scheme as SchemeType } from '@/lib/types';
import { ArrowRight, GraduationCap, Landmark, Leaf, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';

const formSchema = z.object({
  age: z.coerce.number().min(1, 'Age must be at least 1').max(120, 'Age must be less than 120'),
  annualIncome: z.coerce.number().min(0, 'Income must be a positive number'),
  category: z.enum(['General', 'SC', 'ST', 'OBC', 'EBC', 'Minority', 'Other']),
  occupation: z.enum(['Student', 'Farmer', 'Laborer', 'Unemployed', 'Other']),
  isPersonWithDisability: z.enum(['yes', 'no']),
});

export type EligibilityForm = z.infer<typeof formSchema>;

// Get a de-duplicated list of all schemes from all languages
const allSchemes = pageContent.en.scholarships.schemes
  .concat(pageContent.hi.scholarships.schemes, pageContent.gu.scholarships.schemes)
  .filter((v, i, a) => a.findIndex(t => t.title === v.title) === i);


const SchemeCard = ({ scheme }: { scheme: SchemeType }) => {
    const categoryIcons: Record<string, React.ReactNode> = {
        scholarship: <GraduationCap className="h-8 w-8 text-accent" />,
        pension: <Landmark className="h-8 w-8 text-accent" />,
        subsidy: <Leaf className="h-8 w-8 text-accent" />,
        other: <HeartHandshake className="h-8 w-8 text-accent" />
    }
    return (
        <Card className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <CardTitle className="font-headline text-xl">{scheme.title}</CardTitle>
                    {categoryIcons[scheme.category] || <HeartHandshake className="h-8 w-8 text-accent" />}
                </div>
                <CardDescription>{scheme.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-sm">
                    <span className="font-semibold">Eligibility: </span>{scheme.eligibility}
                </p>
            </CardContent>
            <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={scheme.link} target="_blank" rel="noopener noreferrer">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
};


export default function EligibilityCheckerPage() {
  const { toast } = useToast();
  const [eligibleSchemes, setEligibleSchemes] = useState<SchemeType[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const { language } = useLanguage();

  const localizedSchemes = useMemo(() => {
    const currentLangSchemes = pageContent[language].scholarships.schemes;
    const schemeMap = new Map(currentLangSchemes.map(s => [s.title, s]));
    return schemeMap;
  }, [language]);

  const form = useForm<EligibilityForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 18,
      annualIncome: 100000,
      category: 'General',
      occupation: 'Student',
      isPersonWithDisability: 'no',
    },
  });

  function checkEligibility(userInput: EligibilityForm): SchemeType[] {
    const eligibleBaseSchemes = allSchemes.filter(scheme => {
        const criteria = scheme.eligibilityCriteria;
        if (!criteria) return false;

        const ageMatch = (!criteria.minAge || userInput.age >= criteria.minAge) && 
                         (!criteria.maxAge || userInput.age <= criteria.maxAge);
                         
        const incomeMatch = !criteria.maxIncome || userInput.annualIncome <= criteria.maxIncome;

        const categoryMatch = !criteria.categories || criteria.categories.includes(userInput.category as any);

        const occupationMatch = !criteria.occupations || criteria.occupations.includes(userInput.occupation as any);

        const disabilityMatch = criteria.requiresDisability === undefined || (criteria.requiresDisability && userInput.isPersonWithDisability === 'yes');

        return ageMatch && incomeMatch && categoryMatch && occupationMatch && disabilityMatch;
    });

    // Map back to the currently selected language version for display
    return eligibleBaseSchemes.map(scheme => localizedSchemes.get(scheme.title)).filter(Boolean) as SchemeType[];
  }

  function onSubmit(values: EligibilityForm) {
    setHasSearched(true);
    const result = checkEligibility(values);
    setEligibleSchemes(result);

    toast({
      title: 'Check Complete!',
      description: `Found ${result.length} schemes you might be eligible for.`,
    });
  }

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <Card className="shadow-lg sticky top-24">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-primary">Eligibility Checker</CardTitle>
              <CardDescription>
                Fill in your details to find DBT schemes you might be eligible for.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Your age in years" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="annualIncome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Family Income (₹)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 150000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Social Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger><SelectValue placeholder="Select a category" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="General">General</SelectItem>
                                <SelectItem value="SC">SC (Scheduled Caste)</SelectItem>
                                <SelectItem value="ST">ST (Scheduled Tribe)</SelectItem>
                                <SelectItem value="OBC">OBC (Other Backward Class)</SelectItem>
                                <SelectItem value="EBC">EBC (Economically Backward Class)</SelectItem>
                                <SelectItem value="Minority">Minority</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="occupation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Occupation</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger><SelectValue placeholder="Select an occupation" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="Student">Student</SelectItem>
                                <SelectItem value="Farmer">Farmer</SelectItem>
                                <SelectItem value="Laborer">Laborer</SelectItem>
                                <SelectItem value="Unemployed">Unemployed</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isPersonWithDisability"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Are you a Person with Disability?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger><SelectValue placeholder="Select an option" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="no">No</SelectItem>
                                <SelectItem value="yes">Yes</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">Check Eligibility</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold font-headline mb-6">Eligible Schemes</h2>
            {hasSearched ? (
                eligibleSchemes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {eligibleSchemes.map(scheme => (
                            <SchemeCard key={scheme.title} scheme={scheme} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No schemes found matching your criteria. Try adjusting your search.</p>
                    </div>
                )
            ) : (
                 <div className="text-center py-12 border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">Your results will be displayed here after you fill out the form.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
