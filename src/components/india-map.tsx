
'use client';

import React, { useState, useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import dbtPerformanceData from '@/lib/dbt-performance-data.json';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { scaleQuantize } from 'd3-scale';

const INDIA_TOPO_JSON = 'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json';

interface StateData {
  Rank: number;
  State: string;
  Score: number;
}

// Case-insensitive mapping to handle variations like "and" vs "&"
const stateNameMapping: Record<string, string> = {
  "andaman and nicobar islands": "ANDAMAN AND NICOBAR ISLANDS",
  "andhra pradesh": "ANDHRA PRADESH",
  "arunachal pradesh": "ARUNACHAL PRADESH",
  "assam": "ASSAM",
  "bihar": "BIHAR",
  "chandigarh": "CHANDIGARH",
  "chhattisgarh": "CHHATTISGARH",
  "dadra and nagar haveli": "DADRA AND NAGAR HAVELI",
  "daman and diu": "DAMAN AND DIU",
  "goa": "GOA",
  "gujarat": "GUJARAT",
  "haryana": "HARYANA",
  "himachal pradesh": "HIMACHAL PRADESH",
  "jammu and kashmir": "JAMMU AND KASHMIR",
  "jharkhand": "JHARKHAND",
  "karnataka": "KARNATAKA",
  "kerala": "KERALA",
  "ladakh": "LADAKH",
  "lakshadweep": "LAKSHADWEEP",
  "madhya pradesh": "MADHYA PRADESH",
  "maharashtra": "MAHARASHTRA",
  "manipur": "MANIPUR",
  "meghalaya": "MEGHALAYA",
  "mizoram": "MIZORAM",
  "nagaland": "NAGALAND",
  "nct of delhi": "DELHI",
  "delhi": "DELHI",
  "odisha": "ODISHA",
  "puducherry": "PUDUCHERRY",
  "punjab": "PUNJAB",
  "rajasthan": "RAJASTHAN",
  "sikkim": "SIKKIM",
  "tamil nadu": "TAMIL NADU",
  "telangana": "TELANGANA",
  "the dadra and nagar haveli and daman and diu": "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU",
  "tripura": "TRIPURA",
  "uttar pradesh": "UTTAR PRADESH",
  "uttarakhand": "UTTARAKHAND",
  "west bengal": "WEST BENGAL",
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

  const colorScale = scaleQuantize<string>()
    .domain([0, 100])
    .range([
      '#ef4444', // red-500 (Low)
      '#facc15', // yellow-400 (Medium)
      '#22c55e', // green-500 (High)
    ]);
  
  const handleMouseMove = (geo: any) => {
    const mapStateName = geo.properties.st_nm;
    const dataStateName = stateNameMapping[mapStateName.toLowerCase()];
    const stateInfo = performanceDataMap.get(dataStateName?.toUpperCase());
    
    if (stateInfo) {
      setTooltipContent(`${mapStateName} | Rank: ${stateInfo.Rank} | Score: ${stateInfo.Score}`);
    } else {
      setTooltipContent(`${mapStateName} (No data available)`);
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent('');
  };

  const handleStateClick = (geo: any) => {
    const mapStateName = geo.properties.st_nm;
    const dataStateName = stateNameMapping[mapStateName.toLowerCase()];
    const stateInfo = performanceDataMap.get(dataStateName?.toUpperCase());
    setStateData(stateInfo || null);
  };


  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-2/3 border rounded-lg overflow-hidden">
            <TooltipProvider>
                <Tooltip open={!!tooltipContent} delayDuration={100}>
                    <TooltipTrigger asChild>
                         <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{
                                scale: 1000,
                                center: [82, 22],
                            }}
                            data-tip=""
                            >
                            <ZoomableGroup>
                                <Geographies geography={INDIA_TOPO_JSON}>
                                    {({ geographies }) =>
                                    geographies.map((geo) => {
                                        const mapStateName = geo.properties.st_nm;
                                        const dataStateName = stateNameMapping[mapStateName.toLowerCase()];
                                        const stateInfo = performanceDataMap.get(dataStateName?.toUpperCase());
                                        
                                        return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onMouseEnter={() => handleMouseMove(geo)}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleStateClick(geo)}
                                            style={{
                                                default: {
                                                    fill: stateInfo ? colorScale(stateInfo.Score) : '#E5E7EB', // muted
                                                    outline: 'none',
                                                    stroke: '#FFFFFF', // background
                                                    strokeWidth: 0.5,
                                                },
                                                hover: {
                                                    fill: '#a78bfa', // accent
                                                    outline: 'none',
                                                    stroke: '#FFFFFF',
                                                    strokeWidth: 0.75,
                                                },
                                                pressed: {
                                                    fill: '#8b5cf6', // accent darker
                                                    outline: 'none',
                                                },
                                            }}
                                        />
                                        );
                                    })
                                    }
                                </Geographies>
                            </ZoomableGroup>
                        </ComposableMap>
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
                <div className="w-5 h-5 rounded-sm" style={{backgroundColor: '#22c55e'}} />
                <span>High Performance (Score ≥ 75)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-sm" style={{backgroundColor: '#facc15'}}/>
                <span>Medium Performance (50-74)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-sm" style={{backgroundColor: '#ef4444'}}/>
                <span>Low Performance (&lt; 50)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-sm bg-gray-200 border border-border" />
                <span>No Data</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
