(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/dbt-performance-data.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"Rank\":1,\"State\":\"HARYANA\",\"Score\":88.8},{\"Rank\":2,\"State\":\"UTTAR PRADESH\",\"Score\":85.2},{\"Rank\":3,\"State\":\"TRIPURA\",\"Score\":80.2},{\"Rank\":4,\"State\":\"GUJARAT\",\"Score\":77.8},{\"Rank\":5,\"State\":\"UTTARAKHAND\",\"Score\":74.3},{\"Rank\":6,\"State\":\"JHARKHAND\",\"Score\":73.1},{\"Rank\":7,\"State\":\"GOA\",\"Score\":69.4},{\"Rank\":8,\"State\":\"LADAKH\",\"Score\":68.3},{\"Rank\":8,\"State\":\"JAMMU AND KASHMIR\",\"Score\":68.3},{\"Rank\":9,\"State\":\"BIHAR\",\"Score\":67.6},{\"Rank\":10,\"State\":\"MADHYA PRADESH\",\"Score\":66.9},{\"Rank\":11,\"State\":\"PUDUCHERRY\",\"Score\":65.3},{\"Rank\":12,\"State\":\"ODISHA\",\"Score\":63.3},{\"Rank\":13,\"State\":\"MIZORAM\",\"Score\":62.0},{\"Rank\":14,\"State\":\"HIMACHAL PRADESH\",\"Score\":60.7},{\"Rank\":15,\"State\":\"PUNJAB\",\"Score\":59.9},{\"Rank\":16,\"State\":\"TAMIL NADU\",\"Score\":59.3},{\"Rank\":17,\"State\":\"DELHI\",\"Score\":58.5},{\"Rank\":18,\"State\":\"RAJASTHAN\",\"Score\":57.5},{\"Rank\":19,\"State\":\"ANDHRA PRADESH\",\"Score\":54.9},{\"Rank\":20,\"State\":\"MANIPUR\",\"Score\":54.8},{\"Rank\":21,\"State\":\"KERALA\",\"Score\":53.8},{\"Rank\":22,\"State\":\"CHHATTISGARH\",\"Score\":52.9},{\"Rank\":23,\"State\":\"NAGALAND\",\"Score\":51.1},{\"Rank\":24,\"State\":\"SIKKIM\",\"Score\":50.5},{\"Rank\":25,\"State\":\"KARNATAKA\",\"Score\":49.1},{\"Rank\":26,\"State\":\"MAHARASHTRA\",\"Score\":48.4},{\"Rank\":27,\"State\":\"MEGHALAYA\",\"Score\":46.6},{\"Rank\":28,\"State\":\"ANDAMAN AND NICOBAR ISLANDS\",\"Score\":45.3},{\"Rank\":29,\"State\":\"CHANDIGARH\",\"Score\":44.3},{\"Rank\":30,\"State\":\"DADRA AND NAGAR HAVELI\",\"Score\":43.7},{\"Rank\":31,\"State\":\"ARUNACHAL PRADESH\",\"Score\":39.9},{\"Rank\":32,\"State\":\"DAMAN AND DIU\",\"Score\":38.9},{\"Rank\":32,\"State\":\"THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU\",\"Score\":38.9},{\"Rank\":33,\"State\":\"LAKSHADWEEP\",\"Score\":38.1},{\"Rank\":34,\"State\":\"TELANGANA\",\"Score\":29.6},{\"Rank\":35,\"State\":\"ASSAM\",\"Score\":26.4},{\"Rank\":36,\"State\":\"WEST BENGAL\",\"Score\":13.2}]"));}}),
"[project]/src/components/india-map.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
// Dataset is now imported from the JSON file
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbt$2d$performance$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/dbt-performance-data.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const DBTMap = ()=>{
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geojsonLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedState, setSelectedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // build lookup map
    const dataMap = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbt$2d$performance$2d$data$2e$json__$28$json$29$__["default"].forEach((r)=>{
        dataMap[normalizeName(r.State)] = r;
    });
    function normalizeName(s) {
        if (!s && s !== 0) return "";
        return String(s).trim().toUpperCase().replace(/\s+/g, " ").replace(/&/g, " AND ").replace(/^THE\s+/, "").replace(/[,\.]/g, "").replace(/\sAND\sTHE\s/, " AND THE ").normalize("NFD").replace(/\p{Diacritic}/gu, "");
    }
    function getColor(score) {
        if (score === null || score === undefined || isNaN(score)) return "#e6e6e6"; // grey for no data
        if (score > 80) return "#16a34a"; // green
        if (score > 50) return "#f59e0b"; // yellow/orange
        return "#ef4444"; // red
    }
    function styleFeature(feature) {
        const name = normalizeName(feature.properties.st_nm);
        const row = dataMap[name];
        const score = row ? row.Score : null;
        return {
            fillColor: getColor(score),
            weight: 1,
            opacity: 1,
            color: "hsl(var(--background))",
            fillOpacity: 0.85
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DBTMap.useEffect": ()=>{
            if (mapRef.current) return; // already initialized
            mapRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map("dbt-map", {
                zoomControl: true,
                minZoom: 4,
                maxZoom: 7
            }).setView([
                22.5,
                82
            ], 4.5);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                maxZoom: 12
            }).addTo(mapRef.current);
            const info = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control({
                position: "topright"
            });
            info.onAdd = ({
                "DBTMap.useEffect": function() {
                    this._div = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DomUtil.create("div", "dbt-info");
                    this.update();
                    return this._div;
                }
            })["DBTMap.useEffect"];
            info.update = ({
                "DBTMap.useEffect": function(props) {
                    if (!props) {
                        this._div.innerHTML = `<div class="font-bold">DBT Performance</div><div class="text-xs mt-1.5">Hover a state to see Rank & Score</div>`;
                    } else {
                        const name = props.displayName;
                        const row = dataMap[normalizeName(name)];
                        this._div.innerHTML = `<div class="font-bold">${name}</div><div class="text-xs mt-1.5">Rank: <strong>${row ? row.Rank : "N/A"}</strong></div><div class="text-xs">Score: <strong>${row ? row.Score + "%" : "No data"}</strong></div>`;
                    }
                }
            })["DBTMap.useEffect"];
            info.addTo(mapRef.current);
            const legend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control({
                position: "bottomright"
            });
            legend.onAdd = ({
                "DBTMap.useEffect": function() {
                    const div = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DomUtil.create("div", "dbt-legend");
                    div.innerHTML = `
        <div class="font-bold mb-1.5">Score Legend</div>
        <div class="flex gap-2 items-center"><span class="bg-green-600 w-4 h-3 inline-block rounded-sm"></span><span>> 80</span></div>
        <div class="flex gap-2 items-center mt-1.5"><span class="bg-yellow-500 w-4 h-3 inline-block rounded-sm"></span><span>51 - 80</span></div>
        <div class="flex gap-2 items-center mt-1.5"><span class="bg-red-600 w-4 h-3 inline-block rounded-sm"></span><span><= 50</span></div>
      `;
                    return div;
                }
            })["DBTMap.useEffect"];
            legend.addTo(mapRef.current);
            fetch("/india_states.geojson").then({
                "DBTMap.useEffect": (r)=>{
                    if (!r.ok) throw new Error("Cannot load geojson");
                    return r.json();
                }
            }["DBTMap.useEffect"]).then({
                "DBTMap.useEffect": (geo)=>{
                    geojsonLayerRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].geoJson(geo, {
                        style: styleFeature,
                        onEachFeature: {
                            "DBTMap.useEffect": function(feature, layer) {
                                const displayName = feature.properties.st_nm || "Unknown";
                                const norm = normalizeName(displayName);
                                const row = dataMap[norm];
                                const rank = row ? row.Rank : "N/A";
                                const score = row ? row.Score + "%" : "No data";
                                layer.bindTooltip(`<strong>${displayName}</strong><br/>Rank: ${rank}<br/>Score: ${score}`, {
                                    sticky: true,
                                    className: 'info-tooltip'
                                });
                                layer.on({
                                    mouseover: {
                                        "DBTMap.useEffect": (e)=>{
                                            const targetLayer = e.target;
                                            targetLayer.setStyle({
                                                weight: 2.5,
                                                color: "#111827",
                                                fillOpacity: 0.95
                                            });
                                            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Browser.ie) targetLayer.bringToFront();
                                            info.update({
                                                displayName
                                            });
                                        }
                                    }["DBTMap.useEffect"],
                                    mouseout: {
                                        "DBTMap.useEffect": (e)=>{
                                            geojsonLayerRef.current?.resetStyle(e.target);
                                            info.update();
                                        }
                                    }["DBTMap.useEffect"],
                                    click: {
                                        "DBTMap.useEffect": ()=>{
                                            const rowData = dataMap[norm];
                                            setSelectedState({
                                                name: displayName,
                                                data: rowData || null
                                            });
                                        }
                                    }["DBTMap.useEffect"]
                                });
                            }
                        }["DBTMap.useEffect"]
                    }).addTo(mapRef.current);
                    if (mapRef.current) {
                        mapRef.current.fitBounds(geojsonLayerRef.current.getBounds(), {
                            padding: [
                                20,
                                20
                            ]
                        });
                    }
                }
            }["DBTMap.useEffect"]).catch({
                "DBTMap.useEffect": (err)=>{
                    console.error("GeoJSON loading error:", err);
                    if (mapRef.current) {
                        const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                            22.5,
                            82
                        ]).addTo(mapRef.current);
                        marker.bindPopup("Error: Could not load map data. Please check the console.").openPopup();
                    }
                }
            }["DBTMap.useEffect"]);
            return ({
                "DBTMap.useEffect": ()=>{
                    if (mapRef.current) {
                        mapRef.current.remove();
                        mapRef.current = null;
                    }
                }
            })["DBTMap.useEffect"];
        }
    }["DBTMap.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "dbt-map",
                className: "h-[75vh] w-full rounded-lg shadow-md z-0",
                "aria-label": "DBT performance map"
            }, void 0, false, {
                fileName: "[project]/src/components/india-map.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!selectedState,
                onOpenChange: (isOpen)=>!isOpen && setSelectedState(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "font-headline text-2xl",
                                    children: selectedState?.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/india-map.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "DBT Performance Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/india-map.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/india-map.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Rank"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/india-map.tsx",
                                    lineNumber: 172,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold text-primary",
                                    children: selectedState?.data ? selectedState.data.Rank : "N/A"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/india-map.tsx",
                                    lineNumber: 173,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-muted-foreground mt-4",
                                    children: "Score"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/india-map.tsx",
                                    lineNumber: 174,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold text-primary",
                                    children: selectedState?.data ? selectedState.data.Score + "%" : "No data"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/india-map.tsx",
                                    lineNumber: 175,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 text-muted-foreground text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-foreground",
                                                children: "Why it matters:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/india-map.tsx",
                                                lineNumber: 177,
                                                columnNumber: 20
                                            }, this),
                                            " States with higher Aadhaar seeding and DBT efficiency reach beneficiaries faster and reduce leakages."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/india-map.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/india-map.tsx",
                                    lineNumber: 176,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/india-map.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/india-map.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/india-map.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/india-map.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
};
_s(DBTMap, "SIz9YrDoEIc/Qz/zB9hq0kpTgRo=");
_c = DBTMap;
const __TURBOPACK__default__export__ = DBTMap;
var _c;
__turbopack_context__.k.register(_c, "DBTMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/india-map.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/india-map.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_abe501dd._.js.map