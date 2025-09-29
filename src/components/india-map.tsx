
'use client';

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

// Dataset is now imported from the JSON file
import dbtData from "@/lib/dbt-performance-data.json";

interface PerformanceData {
  Rank: number;
  State: string;
  Score: number;
}

const DBTMap = () => {
  const mapRef = useRef<L.Map | null>(null);
  const geojsonLayerRef = useRef<L.GeoJSON | null>(null);
  const [selectedState, setSelectedState] = useState<{ name: string; data: PerformanceData | null } | null>(null);

  // build lookup map
  const dataMap: { [key: string]: PerformanceData } = {};
  dbtData.forEach((r) => {
    dataMap[normalizeName(r.State)] = r as PerformanceData;
  });

  function normalizeName(s: string | null | undefined) {
    if (!s && s !== 0) return "";
    return String(s)
      .trim()
      .toUpperCase()
      .replace(/\s+/g, " ")
      .replace(/&/g, " AND ")
      .replace(/^THE\s+/, "")
      .replace(/[,\.]/g, "")
      .replace(/\sAND\sTHE\s/, " AND THE ")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
  }

  function getColor(score: number | null | undefined) {
    if (score === null || score === undefined || isNaN(score)) return "#e6e6e6"; // grey for no data
    if (score > 80) return "#16a34a"; // green
    if (score > 50) return "#f59e0b"; // yellow/orange
    return "#ef4444"; // red
  }

  function styleFeature(feature: any) {
    const name = normalizeName(feature.properties.st_nm);
    const row = dataMap[name];
    const score = row ? row.Score : null;
    return {
      fillColor: getColor(score),
      weight: 1,
      opacity: 1,
      color: "hsl(var(--background))",
      fillOpacity: 0.85,
    };
  }

  useEffect(() => {
    if (mapRef.current) return; // already initialized

    mapRef.current = L.map("dbt-map", { zoomControl: true, minZoom: 4, maxZoom: 7 }).setView([22.5, 82], 4.5);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 12,
    }).addTo(mapRef.current);

    const info = L.control({ position: "topright" });
    info.onAdd = function () {
      this._div = L.DomUtil.create("div", "dbt-info");
      this.update();
      return this._div;
    };
    info.update = function (props?: { displayName: string }) {
      if (!props) {
        this._div.innerHTML = `<div class="font-bold">DBT Performance</div><div class="text-xs mt-1.5">Hover a state to see Rank & Score</div>`;
      } else {
        const name = props.displayName;
        const row = dataMap[normalizeName(name)];
        this._div.innerHTML = `<div class="font-bold">${name}</div><div class="text-xs mt-1.5">Rank: <strong>${row ? row.Rank : "N/A"}</strong></div><div class="text-xs">Score: <strong>${row ? row.Score + "%" : "No data"}</strong></div>`;
      }
    };
    info.addTo(mapRef.current);

    const legend = L.control({ position: "bottomright" });
    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "dbt-legend");
      div.innerHTML = `
        <div class="font-bold mb-1.5">Score Legend</div>
        <div class="flex gap-2 items-center"><span class="bg-green-600 w-4 h-3 inline-block rounded-sm"></span><span>> 80</span></div>
        <div class="flex gap-2 items-center mt-1.5"><span class="bg-yellow-500 w-4 h-3 inline-block rounded-sm"></span><span>51 - 80</span></div>
        <div class="flex gap-2 items-center mt-1.5"><span class="bg-red-600 w-4 h-3 inline-block rounded-sm"></span><span><= 50</span></div>
      `;
      return div;
    };
    legend.addTo(mapRef.current);

    fetch("/india_states.geojson")
      .then((r) => {
        if (!r.ok) throw new Error("Cannot load geojson");
        return r.json();
      })
      .then((geo) => {
        geojsonLayerRef.current = L.geoJson(geo, {
          style: styleFeature,
          onEachFeature: function (feature, layer) {
            const displayName = feature.properties.st_nm || "Unknown";
            const norm = normalizeName(displayName);
            const row = dataMap[norm];
            const rank = row ? row.Rank : "N/A";
            const score = row ? row.Score + "%" : "No data";
            layer.bindTooltip(`<strong>${displayName}</strong><br/>Rank: ${rank}<br/>Score: ${score}`, { sticky: true, className: 'info-tooltip' });

            layer.on({
              mouseover: (e) => {
                const targetLayer = e.target;
                targetLayer.setStyle({ weight: 2.5, color: "#111827", fillOpacity: 0.95 });
                if (!L.Browser.ie) targetLayer.bringToFront();
                info.update({ displayName });
              },
              mouseout: (e) => {
                geojsonLayerRef.current?.resetStyle(e.target);
                info.update();
              },
              click: () => {
                const rowData = dataMap[norm];
                setSelectedState({ name: displayName, data: rowData || null });
              },
            });
          },
        }).addTo(mapRef.current!);

        if(mapRef.current) {
            mapRef.current.fitBounds(geojsonLayerRef.current.getBounds(), { padding: [20, 20] });
        }
      })
      .catch((err) => {
        console.error("GeoJSON loading error:", err);
        if(mapRef.current) {
            const marker = L.marker([22.5, 82]).addTo(mapRef.current);
            marker.bindPopup("Error: Could not load map data. Please check the console.").openPopup();
        }
      });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div id="dbt-map" className="h-[75vh] w-full rounded-lg shadow-md z-0" aria-label="DBT performance map" />

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
