
import { IndiaMap } from '@/components/india-map';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
            <CardTitle>India DBT Performance Choropleth Map</CardTitle>
            <CardDescription>Hover over a state to see its rank and score. Use your mouse wheel or trackpad to zoom and pan.</CardDescription>
          </CardHeader>
          <CardContent>
            <IndiaMap />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
