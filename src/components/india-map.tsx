
'use client';

import React, { useState, memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import performanceData from '@/lib/dbt-performance-data.json';

const INDIA_TOPO_JSON =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json';

const COLOR_RANGE = ['#ff4d4d', '#ffdb4d', '#4dff4d'];

interface PerformanceData {
    Rank: number;
    State: string;
    Score: number;
}

const dataMap = new Map<string, PerformanceData>();
performanceData.forEach(d => dataMap.set(d.State.toUpperCase(), d));

const MapChart = ({ setTooltipContent }: { setTooltipContent: React.Dispatch<React.SetStateAction<string>> }) => {
  const colorScale = scaleQuantile<string>()
    .domain(performanceData.map(d => d.Score))
    .range(COLOR_RANGE);

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 900,
        center: [82, 22],
      }}
      style={{ width: '100%', height: 'auto' }}
      data-tip=""
    >
      <ZoomableGroup>
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map(geo => {
              const stateName = geo.properties.ST_NM.toUpperCase();
              const d = dataMap.get(stateName);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { ST_NM } = geo.properties;
                    const performance = dataMap.get(ST_NM.toUpperCase());
                    setTooltipContent(
                      performance
                        ? `${ST_NM}: Rank ${performance.Rank} (Score: ${performance.Score})`
                        : `${ST_NM}: No data`
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: d ? colorScale(d.Score) : '#EEE',
                      outline: 'none',
                      stroke: '#FFF',
                      strokeWidth: 0.5,
                    },
                    hover: {
                      fill: d ? colorScale(d.Score) : '#EEE',
                      outline: 'none',
                      stroke: '#333',
                      strokeWidth: 2,
                    },
                    pressed: {
                      fill: '#333',
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
  );
};

const MemoizedMapChart = memo(MapChart);

const ColorLegend = () => (
  <div className="flex items-center justify-center p-4">
      <span className="font-semibold text-sm mr-2">Low (0)</span>
      <div className="flex h-6 w-64 rounded-md overflow-hidden border">
          <div style={{ flex: 1, background: 'linear-gradient(to right, #ff4d4d, #ffdb4d, #4dff4d)' }} />
      </div>
      <span className="font-semibold text-sm ml-2">High (100)</span>
  </div>
)

export function IndiaMap() {
  const [content, setContent] = useState('');
  return (
    <div className="relative w-full border rounded-lg p-2 bg-card">
      <TooltipProvider>
        <Tooltip open={!!content}>
          <TooltipTrigger asChild>
            <div>
              <MemoizedMapChart setTooltipContent={setContent} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{content}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
       <ColorLegend />
    </div>
  );
}
