
'use client';

import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// Dynamically import the GoogleGeoChart component and disable server-side rendering
const GoogleGeoChart = dynamic(() => import('@/components/google-geo-chart'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center">
      <Skeleton className="w-full h-full" />
    </div>
  ),
});

export default function DbtMapPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              DBT Performance Rankings
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              An interactive map showcasing the DBT performance scores and rankings of States & UTs across India.
            </p>
          </div>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>India DBT Performance Geo Chart</CardTitle>
            <CardDescription>Hover over a state to see its performance score. The color indicates performance level.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            {/* The dynamically imported map will render here */}
            <GoogleGeoChart />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
