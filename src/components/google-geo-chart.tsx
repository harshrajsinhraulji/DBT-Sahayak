
'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { LoaderCircle } from 'lucide-react';
import dbtPerformanceData from '@/lib/dbt-performance-data.json';

// State name mapping to Google GeoChart's expected format
const stateNameMapping: { [key: string]: string } = {
  "ANDAMAN AND NICOBAR ISLANDS": "Andaman and Nicobar Islands",
  "ANDHRA PRADESH": "Andhra Pradesh",
  "ARUNACHAL PRADESH": "Arunachal Pradesh",
  "ASSAM": "Assam",
  "BIHAR": "Bihar",
  "CHANDIGARH": "Chandigarh",
  "CHHATTISGARH": "Chhattisgarh",
  "DADRA AND NAGAR HAVELI": "Dadra and Nagar Haveli",
  "DAMAN AND DIU": "Daman and Diu",
  "DELHI": "Delhi",
  "GOA": "Goa",
  "GUJARAT": "Gujarat",
  "HARYANA": "Haryana",
  "HIMACHAL PRADESH": "Himachal Pradesh",
  "JAMMU AND KASHMIR": "Jammu and Kashmir",
  "JHARKHAND": "Jharkhand",
  "KARNATAKA": "Karnataka",
  "KERALA": "Kerala",
  "LADAKH": "Ladakh",
  "LAKSHADWEEP": "Lakshadweep",
  "MADHYA PRADESH": "Madhya Pradesh",
  "MAHARASHTRA": "Maharashtra",
  "MANIPUR": "Manipur",
  "MEGHALAYA": "Meghalaya",
  "MIZORAM": "Mizoram",
  "NAGALAND": "Nagaland",
  "ODISHA": "Odisha",
  "PUDUCHERRY": "Puducherry",
  "PUNJAB": "Punjab",
  "RAJASTHAN": "Rajasthan",
  "SIKKIM": "Sikkim",
  "TAMIL NADU": "Tamil Nadu",
  "TELANGANA": "Telangana",
  "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU": "Dadra and Nagar Haveli and Daman and Diu",
  "TRIPURA": "Tripura",
  "UTTAR PRADESH": "Uttar Pradesh",
  "UTTARAKHAND": "Uttarakhand",
  "WEST BENGAL": "West Bengal",
};

export default function GoogleGeoChart() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isChartDrawn, setIsChartDrawn] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (isScriptLoaded && typeof google !== 'undefined' && google.load) {
      if (!apiKey) {
        console.error("Google Maps API Key is missing. Please add it to your .env file.");
        return;
      }
      google.charts.load('current', {
        'packages': ['geochart'],
        'mapsApiKey': apiKey
      });
      google.charts.setOnLoadCallback(drawVisualization);
    }
  }, [isScriptLoaded, apiKey]);

  function drawVisualization() {
    const dataArray = [['State', 'DBT Score']];
    dbtPerformanceData.forEach(item => {
        const stateName = stateNameMapping[item.State.toUpperCase()];
        if (stateName) {
            dataArray.push([stateName, item.Score]);
        }
    });

    const data = google.visualization.arrayToDataTable(dataArray);

    const opts = {
      region: 'IN',
      displayMode: 'regions',
      colorAxis: { colors: ['#ef4444', '#facc15', '#22c55e'] }, // Red -> Yellow -> Green
      resolution: 'provinces',
      backgroundColor: 'hsl(var(--background))',
      datalessRegionColor: '#333333',
      defaultColor: '#e5e7eb',
      width: '100%',
      height: 500,
      tooltip: { textStyle: { fontName: 'sans-serif', fontSize: 14 } },
      legend: 'none', // We can hide the default legend
    };

    const geochart = new google.visualization.GeoChart(document.getElementById('visualization'));
    geochart.draw(data, opts);
    setIsChartDrawn(true);
  }

  return (
    <>
      <Script
        src="https://www.gstatic.com/charts/loader.js"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      {!apiKey && (
        <div className="text-destructive text-center p-4 border border-destructive rounded-md">
            <strong>Warning:</strong> `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is not set. The map may not render correctly.
        </div>
      )}
      <div id="visualization" style={{ width: '100%', maxWidth: '800px', position: 'relative' }}>
        {!isChartDrawn && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50">
            <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
            <p className="ml-4">Loading Map...</p>
          </div>
        )}
      </div>
    </>
  );
}
