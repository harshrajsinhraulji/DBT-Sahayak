
'use client';

import React, { useState, useMemo } from 'react';
import { SVGMap } from 'react-svg-map';
import India from '@svg-maps/india';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import dbtPerformanceData from '@/lib/dbt-performance-data.json';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface StateData {
  Rank: number;
  State: string;
  Score: number;
}

const stateNameMapping: Record<string, string> = {
  "Andaman & Nicobar Islands": "ANDAMAN AND NICOBAR ISLANDS",
  "Andhra Pradesh": "ANDHRA PRADESH",
  "Arunachal Pradesh": "ARUNACHAL PRADESH",
  "Assam": "ASSAM",
  "Bihar": "BIHAR",
  "Chandigarh": "CHANDIGARH",
  "Chhattisgarh": "CHHATTISGARH",
  "Dadra & Nagar Haveli": "DADRA AND NAGAR HAVELI",
  "Daman & Diu": "DAMAN AND DIU",
  "Goa": "GOA",
  "Gujarat": "GUJARAT",
  "Haryana": "HARYANA",
  "Himachal Pradesh": "HIMACHAL PRADESH",
  "Jammu & Kashmir": "JAMMU AND KASHMIR",
  "Jharkhand": "JHARKHAND",
  "Karnataka": "KARNATAKA",
  "Kerala": "KERALA",
  "Lakshadweep": "LAKSHADWEEP",
  "Madhya Pradesh": "MADHYA PRADESH",
  "Maharashtra": "MAHARASHTRA",
  "Manipur": "MANIPUR",
  "Meghalaya": "MEGHALAYA",
  "Mizoram": "MIZORAM",
  "Nagaland": "NAGALAND",
  "NCT of Delhi": "DELHI",
  "Odisha": "ODISHA",
  "Puducherry": "PUDUCHERRY",
  "Punjab": "PUNJAB",
  "Rajasthan": "RAJASTHAN",
  "Sikkim": "SIKKIM",
  "Tamil Nadu": "TAMIL NADU",
  "Telangana": "TELANGANA",
  "Tripura": "TRIPURA",
  "Uttar Pradesh": "UTTAR PRADESH",
  "Uttarakhand": "UTTARAKHAND",
  "West Bengal": "WEST BENGAL",
};

export default function IndiaMap() {
  const [tooltipContent, setTooltipContent] = useState('');
  const [stateData, setStateData] = useState<StateData | null>(null);

  const performanceDataMap: Map<string, StateData> = useMemo(() => {
    const map = new Map<string, StateData>();
    dbtPerformanceData.forEach((item) => {
      map.set(item.State.toUpperCase(), item);
    });
    return map;
  }, []);

  const getLocationClassName = (location: any): string => {
    const mapStateName = location.name;
    const dataStateName = stateNameMapping[mapStateName];
    const stateInfo = performanceDataMap.get(dataStateName?.toUpperCase());

    if (stateInfo) {
      if (stateInfo.Score >= 75) return 'fill-green-500 stroke-green-700';
      if (stateInfo.Score >= 50) return 'fill-yellow-400 stroke-yellow-600';
      return 'fill-red-500 stroke-red-700';
    }

    return 'fill-muted stroke-border';
  };

  const handleLocationMouseOver = (event: React.MouseEvent<SVGPathElement>) => {
    const mapStateName = event.currentTarget.attributes.name.value;
    const dataStateName = stateNameMapping[mapStateName];
    const stateInfo = performanceDataMap.get(dataStateName?.toUpperCase());

    if (stateInfo) {
      setTooltipContent(
        `${mapStateName} | Rank: ${stateInfo.Rank} | Score: ${stateInfo.Score}`
      );
    } else {
      setTooltipContent(`${mapStateName} (No data available)`);
    }
  };

  const handleLocationMouseOut = () => {
    setTooltipContent('');
  };

  const handleLocationClick = (event: React.MouseEvent<SVGPathElement>) => {
    const mapStateName = event.currentTarget.attributes.name.value;
    const dataStateName = stateNameMapping[mapStateName];
    const stateInfo = performanceDataMap.get(dataStateName?.toUpperCase());
    setStateData(stateInfo || null);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
      <div className="w-full lg:w-2/3 relative">
        <TooltipProvider>
          <Tooltip open={!!tooltipContent}>
            <TooltipTrigger asChild>
              <div>
                <SVGMap
                  map={India}
                  className="w-full h-auto stroke-background stroke-2"
                  locationClassName={getLocationClassName}
                  onLocationMouseOver={handleLocationMouseOver}
                  onLocationMouseOut={handleLocationMouseOut}
                  onLocationClick={handleLocationClick}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltipContent}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="w-full lg:w-1/3">
        <Card>
          <CardHeader>
            <CardTitle>State Information</CardTitle>
            <CardDescription>
              Click on a state in the map to see details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {stateData ? (
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-headline text-primary">
                  {stateData.State}
                </h3>
                <p>
                  <span className="font-semibold">Rank:</span> {stateData.Rank}
                </p>
                <p>
                  <span className="font-semibold">Score:</span> {stateData.Score}
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground">No state selected.</p>
            )}

            <div className="mt-6 space-y-4">
              <h4 className="font-semibold">Legend</h4>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-sm bg-green-500 border border-green-700" />
                <span>High Performance (Score ≥ 75)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-sm bg-yellow-400 border border-yellow-600" />
                <span>Medium Performance (50-74)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-sm bg-red-500 border border-red-700" />
                <span>Low Performance (&lt; 50)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-sm bg-muted border border-border" />
                <span>No Data</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
