
'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { LoaderCircle } from 'lucide-react';
import { useTheme } from 'next-themes';
import dbtPerformanceData from '@/lib/dbt-performance-data.json';
import stateCodes from '@/lib/state-codes.json';

const getCategory = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Moderate';
    return 'Needs Improvement';
};

// Create a mapping from full uppercase state names to their IN-XX code
const stateNameToCodeMap = new Map<string, string>(
  Object.entries(stateCodes).map(([code, name]) => [name.toUpperCase(), code])
);

export default function GoogleGeoChart() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isChartDrawn, setIsChartDrawn] = useState(false);
  const { resolvedTheme } = useTheme();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const drawChart = () => {
    if (typeof google === 'undefined' || !google.visualization) return;

    const dataArray: (string | number | { v: number; f: string } | { role: string; type: 'string'; p: { html: boolean } })[][] = [
        ['State', 'Score', { role: 'tooltip', type: 'string', p: { html: true } }]
    ];
    
    dbtPerformanceData.forEach(item => {
        const stateNameUpper = item.State.toUpperCase();
        const stateCode = stateNameToCodeMap.get(stateNameUpper);
        
        if (stateCode) {
            const category = getCategory(item.Score);
            const tooltipContent = `
                <div style="padding:10px; font-family: sans-serif; color: #333; min-width: 150px; border-radius: 8px; background-color: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div style="font-weight: bold; font-size: 16px; margin-bottom: 8px; color: #111;">${item.State}</div>
                    <div style="display: flex; justify-content: space-between; padding: 2px 0;"><strong>Rank:</strong> <span>${item.Rank}</span></div>
                    <div style="display: flex; justify-content: space-between; padding: 2px 0;"><strong>Score:</strong> <span>${item.Score}</span></div>
                    <div style="display: flex; justify-content: space-between; padding: 2px 0;"><strong>Category:</strong> <span>${category}</span></div>
                </div>
            `;
            dataArray.push([stateCode, item.Score, tooltipContent]);
        } else {
            console.warn(`No state code found for: ${item.State}`);
        }
    });

    const data = google.visualization.arrayToDataTable(dataArray);

    const opts = {
      region: 'IN',
      displayMode: 'regions',
      colorAxis: {colors: ['#ef4444', '#fde047', '#a3e635', '#22c55e']}, // Red -> Yellow -> Light Green -> Green
      resolution: 'provinces',
      backgroundColor: 'transparent',
      datalessRegionColor: resolvedTheme === 'dark' ? '#1e293b' : '#f1f5f9',
      defaultColor: '#f5f5f5',
      width: '100%',
      height: 500,
      tooltip: { isHtml: true, trigger: 'focus' },
      legend: 'none',
    };

    const geochart = new google.visualization.GeoChart(document.getElementById('visualization'));
    geochart.draw(data, opts);
    setIsChartDrawn(true);
  }

  useEffect(() => {
    if (isScriptLoaded && typeof google !== 'undefined') {
      if (!apiKey) {
        console.error("Google Maps API Key is missing. The map may not render correctly.");
      }
      google.charts.load('current', {
        'packages': ['geochart'],
        'mapsApiKey': apiKey
      });
      google.charts.setOnLoadCallback(drawChart);
    }
  }, [isScriptLoaded, apiKey]);

  useEffect(() => {
    if (isChartDrawn) {
        drawChart();
    }
  }, [resolvedTheme, isChartDrawn]);

  useEffect(() => {
    const handleResize = () => {
        if(isChartDrawn) drawChart();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isChartDrawn]);


  return (
    <>
      <Script
        type="text/javascript"
        src="https://www.gstatic.com/charts/loader.js"
        onLoad={() => setIsScriptLoaded(true)}
      />
      {!apiKey && (
        <div className="text-destructive text-center p-4 border border-destructive rounded-md m-4">
            <strong>Warning:</strong> `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is not set. The map will likely fail to load.
        </div>
      )}
      <div id="visualization" style={{ width: '100%', maxWidth: '800px', position: 'relative' }}>
        {!isChartDrawn && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50">
            <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
            <p className="ml-4">Loading Map Data...</p>
          </div>
        )}
      </div>
    </>
  );
}
