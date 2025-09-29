
'use client';

import React, { useState, useMemo } from 'react';
import { SVGMap } from 'react-svg-map';
import { India } from '@svg-maps/india';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import dbtData from '@/lib/dbt-performance-data.json';
import { cn } from '@/lib/utils';

interface PerformanceData {
  Rank: number;
  State: string;
  Score: number;
}

const DBTMap = () => {
  const [pointedLocation, setPointedLocation] = useState<string | null>(null);
  const [tooltipText, setTooltipText] = useState<string>('');
  const [selectedState, setSelectedState] = useState<{ name: string; data: PerformanceData | null } | null>(null);

  const dataMap: Map<string, PerformanceData> = useMemo(() => {
    const map = new Map<string, PerformanceData>();
    dbtData.forEach((r) => {
      map.set(normalizeName(r.State), r as PerformanceData);
    });
    return map;
  }, []);

  function normalizeName(name: string) {
    return name
      .trim()
      .toUpperCase()
      .replace(/&/g, 'AND')
      .replace(/\s+/g, ' ');
  }

  function getLocationClassName(location: any) {
    const normName = normalizeName(location.name);
    const stateData = dataMap.get(normName);
    const score = stateData?.Score;

    let fillColorClass = 'fill-muted/40'; // Default for no data
    if (score !== undefined) {
      if (score > 80) {
        fillColorClass = 'fill-green-600';
      } else if (score > 50) {
        fillColorClass = 'fill-yellow-500';
      } else {
        fillColorClass = 'fill-red-600';
      }
    }
    
    return cn(
        'transition-all duration-200 outline-none',
        fillColorClass,
        'hover:fill-accent focus:fill-accent stroke-background stroke-1 hover:stroke-foreground/50 focus:stroke-foreground/50',
         pointedLocation === location.name && 'fill-accent'
    );
  }

  function handleLocationMouseOver(event: React.MouseEvent<SVGPathElement>) {
    const locationName = event.currentTarget.getAttribute('name');
    if (locationName) {
      setPointedLocation(locationName);
      const stateData = dataMap.get(normalizeName(locationName));
      if (stateData) {
        setTooltipText(
          `${locationName} | Rank: ${stateData.Rank} | Score: ${stateData.Score}%`
        );
      } else {
        setTooltipText(`${locationName} | No data`);
      }
    }
  }

  function handleLocationMouseOut() {
    setPointedLocation(null);
    setTooltipText('');
  }

  function handleLocationClick(event: React.MouseEvent<SVGPathElement>) {
    const locationName = event.currentTarget.getAttribute('name');
    if (locationName) {
        const normName = normalizeName(locationName);
        const stateData = dataMap.get(normName);
        setSelectedState({ name: locationName, data: stateData || null });
    }
  }

  const Legend = () => (
    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-md border">
      <h3 className="font-bold mb-2 text-foreground">Score Legend</h3>
      <div className="space-y-1 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm bg-green-600" />
          <span>&gt; 80 (High)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm bg-yellow-500" />
          <span>51 - 80 (Medium)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm bg-red-600" />
          <span>&lt;= 50 (Low)</span>
        </div>
         <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm bg-muted/40 border" />
          <span>No Data</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-full">
      <TooltipProvider>
        <Tooltip open={!!pointedLocation}>
          <TooltipTrigger asChild>
            <SVGMap
              map={India}
              locationClassName={getLocationClassName}
              onLocationMouseOver={handleLocationMouseOver}
              onLocationMouseOut={handleLocationMouseOut}
              onLocationClick={handleLocationClick}
              className="w-full h-full"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="absolute bottom-4 right-4 z-10">
        <Legend />
      </div>

       <Dialog open={!!selectedState} onOpenChange={(isOpen) => !isOpen && setSelectedState(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">{selectedState?.name}</DialogTitle>
            <DialogDescription>
              DBT Performance Details
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
             <div className="text-sm text-muted-foreground">Rank</div>
             <div className="text-3xl font-bold text-primary">{selectedState?.data ? selectedState.data.Rank : "N/A"}</div>
             <div className="text-sm text-muted-foreground mt-4">Score</div>
             <div className="text-3xl font-bold text-primary">{selectedState?.data ? selectedState.data.Score + "%" : "No data"}</div>
             <div className="mt-6 text-muted-foreground text-sm">
                <p><strong className="text-foreground">Why it matters:</strong> States with higher Aadhaar seeding and DBT efficiency reach beneficiaries faster and reduce leakages.</p>
             </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DBTMap;
