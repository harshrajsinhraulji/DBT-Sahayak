
'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { LoaderCircle } from 'lucide-react';
import dbtPerformanceData from '@/lib/dbt-performance-data.json';
import { useTheme } from 'next-themes';

const getCategory = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Moderate';
    return 'Needs Improvement';
};

export default function GoogleGeoChart() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isChartDrawn, setIsChartDrawn] = useState(false);
  const { resolvedTheme } = useTheme();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const drawChart = () => {
    if (typeof google === 'undefined' || !google.visualization) return;

    const dataArray = [['State', 'Score', { role: 'tooltip', type: 'string', p: { html: true } }]];
    dbtPerformanceData.forEach(item => {
        const category = getCategory(item.Score);
        const tooltipContent = `
            <div style="padding:10px; font-family: sans-serif; color: #333;">
                <div style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">${item.State}</div>
                <div><strong>Rank:</strong> ${item.Rank}</div>
                <div><strong>Score:</strong> ${item.Score}</div>
                <div><strong>Category:</strong> ${category}</div>
            </div>
        `;
        dataArray.push([item.State, item.Score, tooltipContent]);
    });

    const data = google.visualization.arrayToDataTable(dataArray);

    const opts = {
      region: 'IN',
      displayMode: 'regions',
      colorAxis: {colors: ['#ef4444', '#fde047', '#a3e635', '#22c55e']}, // Red -> Yellow -> Light Green -> Dark Green
      resolution: 'provinces',
      backgroundColor: resolvedTheme === 'dark' ? '#020817' : '#ffffff',
      datalessRegionColor: resolvedTheme === 'dark' ? '#1e293b' : '#f1f5f9',
      defaultColor: '#f5f5f5',
      width: '100%',
      height: 500,
      tooltip: { isHtml: true, textStyle: { fontName: 'sans-serif', fontSize: 14 } },
      legend: 'none',
    };

    const geochart = new google.visualization.GeoChart(document.getElementById('visualization'));
    geochart.draw(data, opts);
    setIsChartDrawn(true);
  }

  useEffect(() => {
    if (isScriptLoaded && typeof google !== 'undefined' && google.load) {
      if (!apiKey) {
        console.error("Google Maps API Key is missing. The map may not render correctly.");
        // Don't return, allow it to try and render without the key to show the error.
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
        src="https://www.gstatic.com/charts/loader.js"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      {!apiKey && (
        <div className="text-destructive text-center p-4 border border-destructive rounded-md">
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
