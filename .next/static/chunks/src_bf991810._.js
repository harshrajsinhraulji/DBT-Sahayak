(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sheet": (()=>Sheet),
    "SheetClose": (()=>SheetClose),
    "SheetContent": (()=>SheetContent),
    "SheetDescription": (()=>SheetDescription),
    "SheetFooter": (()=>SheetFooter),
    "SheetHeader": (()=>SheetHeader),
    "SheetOverlay": (()=>SheetOverlay),
    "SheetPortal": (()=>SheetPortal),
    "SheetTitle": (()=>SheetTitle),
    "SheetTrigger": (()=>SheetTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 70,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this));
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, this);
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, this);
_c4 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, this));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, this));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetFooter");
__turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "SheetTitle");
__turbopack_context__.k.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DropdownMenu": (()=>DropdownMenu),
    "DropdownMenuCheckboxItem": (()=>DropdownMenuCheckboxItem),
    "DropdownMenuContent": (()=>DropdownMenuContent),
    "DropdownMenuGroup": (()=>DropdownMenuGroup),
    "DropdownMenuItem": (()=>DropdownMenuItem),
    "DropdownMenuLabel": (()=>DropdownMenuLabel),
    "DropdownMenuPortal": (()=>DropdownMenuPortal),
    "DropdownMenuRadioGroup": (()=>DropdownMenuRadioGroup),
    "DropdownMenuRadioItem": (()=>DropdownMenuRadioItem),
    "DropdownMenuSeparator": (()=>DropdownMenuSeparator),
    "DropdownMenuShortcut": (()=>DropdownMenuShortcut),
    "DropdownMenuSub": (()=>DropdownMenuSub),
    "DropdownMenuSubContent": (()=>DropdownMenuSubContent),
    "DropdownMenuSubTrigger": (()=>DropdownMenuSubTrigger),
    "DropdownMenuTrigger": (()=>DropdownMenuTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "ml-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, this));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 109,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 108,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, this));
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 132,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 123,
        columnNumber: 3
    }, this));
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 147,
        columnNumber: 3
    }, this));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 163,
        columnNumber: 3
    }, this));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DropdownMenuSubContent");
__turbopack_context__.k.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "DropdownMenuContent");
__turbopack_context__.k.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c7, "DropdownMenuItem");
__turbopack_context__.k.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_context__.k.register(_c11, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_context__.k.register(_c13, "DropdownMenuLabel");
__turbopack_context__.k.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_context__.k.register(_c15, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c16, "DropdownMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "pageContent": (()=>pageContent)
});
const pageContent = {
    en: {
        header: {
            title: "DBT Sahayak",
            nav: {
                education: "Learn",
                videos: "Videos",
                status: "Check Status",
                takeAction: "Take Action",
                scholarships: "Schemes",
                myths: "Myth Busters",
                faq: "FAQ",
                contact: "Contact",
                about: "About Us",
                resources: "Resources",
                governance: "Governance",
                aboutTeam: "About Team",
                printKit: "Print Kit",
                requestDrive: "Request a Drive",
                formChecker: "AI Form Check",
                eligibilityChecker: "Eligibility Checker",
                awareness: "DBT Schemes",
                dbtMap: "Performance Map"
            },
            login: "Login/Register"
        },
        hero: {
            tagline: "India's Direct Benefit Transfer, simplified.",
            title: "A Comprehensive Guide to the DBT Ecosystem",
            subtitle: "From subsidies and pensions to wages and scholarships, understand how Direct Benefit Transfer (DBT) impacts millions of lives across India. Ensure you are DBT-ready.",
            cta: "Explore DBT Schemes"
        },
        education: {
            title: "Knowledge is Power",
            subtitle: "Understand the essentials for hassle-free benefit disbursement.",
            card1: {
                title: "Aadhaar Linked Account",
                description: "Your Aadhaar number is connected to your bank account, primarily for identity verification (e-KYC). This does NOT guarantee receipt of government benefits."
            },
            card2: {
                title: "DBT-Enabled Aadhaar Seeded Account",
                description: "Your Aadhaar is mapped to a specific bank account on the National Payments Corporation of India (NPCI) server. This is MANDATORY to receive Direct Benefit Transfers (DBT)."
            },
            comparison: {
                title: "Side-by-Side Comparison",
                subtitle: "Key differences at a glance.",
                feature: "Feature",
                linked: "Aadhaar Linked",
                seeded: "DBT-Enabled (Seeded)",
                features: [
                    {
                        feature: "Purpose",
                        linked: "Identity verification (KYC)",
                        seeded: "Receiving government benefits (DBT)"
                    },
                    {
                        feature: "Mechanism",
                        linked: "Connected to bank's internal system.",
                        seeded: "Mapped via national NPCI server."
                    },
                    {
                        feature: "DBT Funds",
                        linked: "Does NOT guarantee receipt.",
                        seeded: "GUARANTEES receipt of DBT funds."
                    },
                    {
                        feature: "Requirement",
                        linked: "Good practice for banking.",
                        seeded: "MANDATORY for all DBT Schemes."
                    }
                ]
            }
        },
        videos: {
            title: "Watch & Learn",
            subtitle: "Watch these short videos to understand Aadhaar seeding better.",
            videos: [
                {
                    title: "What is DBT?",
                    description: "Learn the basics of Direct Benefit Transfer."
                },
                {
                    title: "Linking vs Seeding",
                    description: "Understand the crucial difference."
                },
                {
                    title: "How to Seed",
                    description: "A step-by-step guide to get it done."
                },
                {
                    title: "Common Myths",
                    description: "Debunking popular misconceptions."
                }
            ]
        },
        statusChecker: {
            title: "Check Your Aadhaar & Bank Account Seeding Status",
            description: "It's crucial to verify that your bank account is properly seeded with Aadhaar to receive DBT payments. Follow these simple steps on the official UIDAI portal.",
            steps: [
                "Visit the official UIDAI website (myaadhaar.uidai.gov.in). The status shown is fetched from the NPCI server and is the definitive source.",
                "Go to 'My Aadhaar' > 'Aadhaar Services' > 'Check Aadhaar/Bank Linking Status'.",
                "Enter your Aadhaar number and the security code.",
                "An OTP will be sent to your registered mobile number. Enter it to see your active seeding status.",
                "This will show you which bank account is currently seeded to receive DBT funds."
            ],
            cta: "Check Status on UIDAI Portal"
        },
        takeAction: {
            title: "Take Action Now",
            subtitle: "You've learned the importance of a DBT-enabled account. Here's how you can move forward.",
            card1: {
                title: "Track Your Journey",
                description: "If your account is not DBT-enabled, our personalized dashboard will guide you through every step, from downloading the form to checking your final status.",
                cta: "Go to Dashboard"
            },
            card2: {
                title: "Request a Drive",
                description: "We conduct free awareness seminars at schools, colleges, and local communities. Fill out a simple form to request a drive in your area.",
                cta: "Request an Awareness Drive"
            }
        },
        scholarships: {
            title: "DBT Scheme Explorer",
            subtitle: "Explore the wide range of schemes under DBT, from scholarships to pensions and subsidies.",
            categories: {
                all: "All",
                scholarships: "Scholarships",
                pensions: "Pensions",
                subsidies: "Subsidies"
            },
            schemes: [
                {
                    title: "Post-Matric Scholarship for SC/OBC/EBC",
                    description: "Financial aid for students from Scheduled Castes, Other Backward Classes, and Economically Backward Classes for studies beyond matriculation.",
                    eligibility: "Parental income limits apply (e.g., up to ₹2.5 lakh for SC).",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 250000,
                        categories: [
                            'SC',
                            'OBC',
                            'EBC'
                        ],
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "National Means-cum-Merit Scholarship (NMMS)",
                    description: "For meritorious students of economically weaker sections to prevent drop-outs at class VIII.",
                    eligibility: "Parental income up to ₹3.5 lakh. Must have scored at least 55% in Class VII.",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 350000,
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "CSSS for College/University Students",
                    description: "For meritorious students from low-income families to meet expenses while pursuing higher studies.",
                    eligibility: "Top 20th percentile in Class XII, parental income < ₹4.5 lakh.",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 450000,
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "PM-KISAN Samman Nidhi",
                    description: "An income support scheme providing ₹6,000 per year in three installments to all eligible farmer families.",
                    eligibility: "All land-holding farmer families.",
                    link: "https://pmkisan.gov.in/",
                    category: "subsidy",
                    eligibilityCriteria: {
                        occupations: [
                            'Farmer'
                        ]
                    }
                },
                {
                    title: "National Social Assistance Programme (NSAP)",
                    description: "Provides financial assistance to the elderly, widows, and persons with disabilities under various components like old-age pensions.",
                    eligibility: "Varies by scheme component, generally for BPL households.",
                    link: "https://nsap.nic.in/",
                    category: "pension",
                    eligibilityCriteria: {
                        minAge: 60
                    }
                },
                {
                    title: "PAHAL (LPG Subsidy)",
                    description: "Subsidy on LPG cooking gas cylinders is directly transferred to the bank accounts of eligible consumers.",
                    eligibility: "All households with a domestic LPG connection.",
                    link: "https://dbtbharat.gov.in/scheme/pahal/",
                    category: "subsidy",
                    eligibilityCriteria: {}
                },
                {
                    title: "Indira Gandhi National Old Age Pension Scheme",
                    description: "A component of NSAP, providing a monthly pension to elderly persons belonging to a BPL household.",
                    eligibility: "Age 60+ years, from a BPL family.",
                    link: "https://nsap.nic.in/nsap/About_NSAP/ignop_guidelines.pdf",
                    category: "pension",
                    eligibilityCriteria: {
                        minAge: 60
                    }
                },
                {
                    title: "Scholarships for Students with Disabilities",
                    description: "For differently-abled students pursuing graduate and postgraduate degrees in specified institutions of excellence.",
                    eligibility: "40%+ disability. Parental income ceiling of ₹6 lakh per annum.",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 600000,
                        requiresDisability: true,
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "Prime Minister's Scholarship Scheme for RPF/RPSF",
                    description: "Professional degree scholarships for the dependent wards of Railway Protection Force (RPF) personnel.",
                    eligibility: "Wards of serving/ex-personnel. Minimum 60% in 12th/Diploma/Graduation.",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        occupations: [
                            'Student'
                        ]
                    }
                }
            ]
        },
        mythBusters: {
            title: "Myth Busters",
            subtitle: "Test your knowledge! Can you tell the difference between a DBT myth and a fact?",
            resultText: "You're now a certified Myth & Fact expert! Share your knowledge to help others.",
            myths: [
                {
                    myth: "If my bank account is linked to Aadhaar, I will automatically get my DBT funds.",
                    fact: "This is a major myth. Your account must be 'Seeded' with Aadhaar for DBT. Linking is just for KYC and is a separate process."
                },
                {
                    myth: "I can receive my DBT funds in any of my Aadhaar-linked bank accounts.",
                    fact: "This is a myth. You can only receive DBT payments in the ONE bank account that is currently seeded with your Aadhaar."
                },
                {
                    myth: "My bank has my Aadhaar card photocopy, so my account is seeded.",
                    fact: "This is a myth. Submitting a photocopy is not enough. You must fill out the specific 'Aadhaar Seeding Consent Form' and explicitly request seeding."
                },
                {
                    myth: "If my seeding fails, it's an issue with the NPCI or UIDAI.",
                    fact: "This is a myth. The responsibility for updating the NPCI mapper rests solely with the banks. You must follow up directly with your bank branch."
                },
                {
                    myth: "DBT is only for scholarships.",
                    fact: "This is a huge myth. DBT is a platform for over 300 schemes, including pensions (NSAP), subsidies (PM-KISAN, PAHAL), and wage payments (MGNREGA)."
                }
            ],
            facts: [
                {
                    fact: "You must submit a specific 'Aadhaar Seeding Consent Form' to your bank to enable DBT.",
                    explanation: "This is a fact. Simply having a linked account is not enough; you must give explicit consent for seeding."
                },
                {
                    fact: "Only one bank account can be Aadhaar-seeded for DBT at any given time.",
                    explanation: "This is a fact. If you seed a new account, it automatically de-links the previous one from the NPCI mapper."
                },
                {
                    fact: "If biometric authentication fails, there are alternative ways to get benefits.",
                    explanation: "This is a fact. Government guidelines include an 'exception handling mechanism' to ensure you still get benefits."
                },
                {
                    fact: "If your name on Aadhaar and the bank account don't match exactly, seeding will fail.",
                    explanation: "This is a fact. Your name must be identical in both records for the seeding process to succeed."
                },
                {
                    fact: "You can check your Aadhaar seeding status on both the UIDAI and NPCI websites.",
                    explanation: "This is a fact. Both official portals provide a facility to check which bank account is currently seeded for DBT."
                }
            ]
        },
        awareness: {
            title: "The Scope of DBT in India",
            subtitle: "DBT is more than just scholarships. It's a unified platform for over 300 schemes across 50+ ministries. Explore the major categories.",
            tableHeaders: {
                scheme: "Key Schemes",
                ministry: "Implementing Ministry",
                beneficiaries: "Beneficiaries"
            },
            categories: [
                {
                    category: "Subsidies",
                    description: "Direct financial support to reduce the cost of essential goods.",
                    schemes: [
                        {
                            name: "PAHAL (LPG subsidy), Fertilizer subsidy (pilot), Food subsidy (PDS in some states)",
                            ministry: "Ministry of Petroleum, Ministry of Chemicals & Fertilizers, Ministry of Consumer Affairs",
                            beneficiaries: "Households using LPG, farmers, ration card holders"
                        }
                    ]
                },
                {
                    category: "Income Support",
                    description: "Direct cash transfers to supplement the income of citizens.",
                    schemes: [
                        {
                            name: "PM-KISAN Samman Nidhi (₹6000/year to farmers), State-level farmer income support",
                            ministry: "Ministry of Agriculture & Farmers’ Welfare",
                            beneficiaries: "Small and marginal farmers"
                        }
                    ]
                },
                {
                    category: "Wage Payments",
                    description: "Direct payment of wages for public works programs.",
                    schemes: [
                        {
                            name: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
                            ministry: "Ministry of Rural Development",
                            beneficiaries: "Rural households seeking employment"
                        }
                    ]
                },
                {
                    category: "Social Security Pensions",
                    description: "Regular financial assistance for vulnerable populations.",
                    schemes: [
                        {
                            name: "National Social Assistance Programme (NSAP), Old-age, Widow, and Disability pensions",
                            ministry: "Ministry of Rural Development, State Social Welfare Depts",
                            beneficiaries: "Elderly, widows, disabled persons"
                        }
                    ]
                },
                {
                    category: "Healthcare-linked",
                    description: "Financial aid for medical expenses and maternal care.",
                    schemes: [
                        {
                            name: "Janani Suraksha Yojana (JSY), Ayushman Bharat reimbursements, PMMVY",
                            ministry: "Ministry of Health & Family Welfare, MoWCD",
                            beneficiaries: "Pregnant women, newborns, low-income patients"
                        }
                    ]
                },
                {
                    category: "Educational Benefits",
                    description: "Support for students to continue their education.",
                    schemes: [
                        {
                            name: "Scholarships (pre-matric, post-matric), Fellowships, Mid-day meal cash transfers",
                            ministry: "Ministry of Education, Ministry of Social Justice, Ministry of Minority Affairs",
                            beneficiaries: "Students (SC, ST, OBC, minorities, etc.)"
                        }
                    ]
                },
                {
                    category: "Housing & Asset Support",
                    description: "Financial assistance for building homes and creating assets.",
                    schemes: [
                        {
                            name: "Pradhan Mantri Awas Yojana (PMAY), Indira Awaas Yojana (IAY - old)",
                            ministry: "Ministry of Housing & Urban Affairs, MoRD",
                            beneficiaries: "Rural and urban poor families"
                        }
                    ]
                },
                {
                    category: "Relief & Emergency Transfers",
                    description: "Immediate financial aid during disasters or emergencies.",
                    schemes: [
                        {
                            name: "PM Garib Kalyan Yojana (COVID relief), State-level disaster relief funds",
                            ministry: "Ministry of Finance, State Relief Departments",
                            beneficiaries: "Poor households, migrants, disaster-affected families"
                        }
                    ]
                },
                {
                    category: "Others",
                    description: "Targeted welfare schemes for specific communities.",
                    schemes: [
                        {
                            name: "Direct cash transfers for differently-abled, Tribal welfare schemes, Minority welfare DBTs",
                            ministry: "Ministry of Social Justice, Ministry of Tribal Affairs, MoMA",
                            beneficiaries: "Differently-abled, tribals, minorities"
                        }
                    ]
                }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Get answers to common questions about Aadhaar seeding and DBT.",
            faqs: [
                {
                    question: "What is the difference between Aadhaar linking and Aadhaar seeding?",
                    answer: "Aadhaar linking connects your Aadhaar to a bank account for identity verification (KYC). Aadhaar seeding is a separate, specific process of mapping your Aadhaar to a single bank account on the NPCI server to receive Direct Benefit Transfers (DBT). Seeding is mandatory for scholarships and other schemes."
                },
                {
                    question: "Can I have multiple Aadhaar-seeded accounts?",
                    answer: "No, you can only have one Aadhaar-seeded account for receiving DBT at any given time. If you seed a new account, the previous one gets de-linked automatically. The subsidy will be credited to the last bank account that was successfully seeded."
                },
                {
                    question: "My DBT payment failed. What should I do?",
                    answer: "First, check your seeding status on the UIDAI portal. If it's inactive or linked to the wrong account, visit your bank branch with the seeding form. Also, ensure your name and other details match exactly between your bank and Aadhaar records."
                },
                {
                    question: "How do I change my bank account to receive DBT funds?",
                    answer: "To change your DBT-enabled account, you must visit the branch of the *new* bank where you want to receive funds. Submit the Aadhaar seeding consent form there. They will update the NPCI mapper, which automatically overrides the old account."
                },
                {
                    question: "My name is different in my Aadhaar card versus my bank account. What should I do?",
                    answer: "You must get your name corrected in one of the documents so they match exactly. You can visit an Aadhaar Enrolment Centre to update your Aadhaar details, or your bank branch to update your bank records. The name must be identical for seeding to succeed."
                },
                {
                    question: "Is there a deadline for Aadhaar seeding?",
                    answer: "There is no official deadline, but it is highly recommended to complete the process as soon as possible. Many schemes will not disburse funds to non-seeded accounts, so you may miss out on benefits if you delay."
                },
                {
                    question: "Is Aadhaar mandatory to receive my pension or subsidy?",
                    answer: "While Aadhaar is the preferred and most efficient method, the Supreme Court has ruled that essential benefits cannot be denied solely for lack of an Aadhaar number. If you don't have Aadhaar, you can use alternate government-approved IDs as specified by the scheme."
                },
                {
                    question: "How do I know that DBT funds have come to my account?",
                    answer: "If you have enabled SMS alerts from your bank, you will receive a notification. You can also check your account balance via ATM, your bank's mobile app, internet banking, or by visiting a Bank Mitra/Correspondent."
                }
            ]
        },
        contact: {
            title: "Contact & Resources",
            subtitle: "Find official contact information and downloadable bank forms.",
            helpline: "National Scholarship Portal Helpline: 0120 - 6619540",
            resources: "Bank Aadhaar Seeding Forms",
            bankForms: [
                {
                    name: "State Bank of India (SBI)",
                    description: "Aadhaar seeding application form for SBI customers.",
                    link: "https://sbi.co.in/documents/16012/25194947/Aadhaar+Seeding+Process+for+Customers+of+Other+Banks+having+SBI+account.pdf"
                },
                {
                    name: "Punjab National Bank (PNB)",
                    description: "Aadhaar seeding application form for PNB customers.",
                    link: "https://www.pnbindia.in/downloadprocess.aspx?fid=3532E743-4C98-43B0-A227-22F091054C35"
                },
                {
                    name: "Bank of Baroda (BOB)",
                    description: "Aadhaar seeding application form for BOB customers.",
                    link: "https://www.bankofbaroda.in/-/media/project/bob/countrysites/india/personal-banking/accounts/documents/application-for-linking-aadhaar-number.pdf"
                },
                {
                    name: "HDFC Bank",
                    description: "Aadhaar seeding application form for HDFC customers.",
                    link: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c86c"
                },
                {
                    name: "ICICI Bank",
                    description: "Aadhaar seeding instructions for ICICI customers.",
                    link: "https://www.icicibank.com/personal-banking/insta-banking/internet-banking/link-aadhaar-card"
                },
                {
                    name: "Axis Bank",
                    description: "Aadhaar seeding application form for Axis customers.",
                    link: "https://www.axisbank.com/docs/default-source/default-document-library/accounts-and-deposits/application-form-to-link-aadhaar-card-to-savings-account.pdf"
                }
            ]
        },
        about: {
            title: "About The DBT Mission",
            mandate: {
                title: "DBT Mission Mandate",
                subtitle: "The official mandate and history of Direct Benefit Transfer in India.",
                aboutText: [
                    "The Direct Benefit Transfer (DBT) scheme was launched on January 1st, 2013, as a major governance reform to overhaul the welfare delivery system in India.",
                    "Its primary goal is to improve the flow of government subsidies and benefits by re-engineering existing processes for simpler, faster, and more accurate delivery to beneficiaries, while reducing fraud and duplication.",
                    "The DBT Mission, the nodal body for implementation, was initially in the Planning Commission, moved to the Department of Expenditure in 2013, and since 2015, has operated under the Cabinet Secretariat to give its work more impetus.",
                    "DBT leverages the JAM trinity (Jan Dhan bank accounts, Aadhaar unique ID, and Mobile phones) to provide a transparent and efficient platform for transferring benefits directly into beneficiaries' accounts."
                ],
                orgChartTitle: "DBT Mission Organizational Structure"
            },
            institutionalFramework: {
                title: "Institutional Framework",
                subtitle: "The key government bodies that make DBT possible.",
                points: [
                    {
                        title: "DBT Mission (Cabinet Secretariat)",
                        description: "The nodal agency responsible for policy, coordination, and overseeing the nationwide implementation of DBT."
                    },
                    {
                        title: "Finance Ministry (CGA & PFMS)",
                        description: "The Controller General of Accounts (CGA) runs the Public Financial Management System (PFMS), the core electronic platform for all DBT payments and reconciliation."
                    },
                    {
                        title: "NPCI (National Payments Corporation of India)",
                        description: "Operates the Aadhaar Payment Bridge (APB), the system that uses the Aadhaar number to route benefits to the correct bank account."
                    },
                    {
                        title: "UIDAI (Aadhaar)",
                        description: "Provides the unique identity verification (e-KYC) and authentication services that underpin the entire DBT framework."
                    },
                    {
                        title: "Implementing Ministries & States",
                        description: "Individual ministries (e.g., Rural Development for MGNREGA) and State Governments manage their own schemes and beneficiary lists, which integrate with the central DBT platforms."
                    }
                ]
            },
            ourTeam: {
                title: "About The Team",
                subtitle: "The students behind DBT Sahayak for SIH 2025."
            }
        },
        printKit: {
            title: "Printable Awareness Kit",
            subtitle: "Download and print these materials for offline campaigns in schools and communities.",
            poster: {
                title: "Is Your Bank Account Ready for Your Scholarship?",
                subtitle: "Don't let a simple mistake stop your funds! Make sure your account is DBT-Enabled.",
                point1: "A DBT-Enabled (Aadhaar Seeded) account is MANDATORY for all government scholarships.",
                point2: "Just 'linking' your Aadhaar is NOT enough. Seeding is a separate, crucial step.",
                cta: "Check Your Status Today!"
            },
            flyer1: {
                title: "How to Get DBT-Ready",
                text: "Follow these steps to ensure your bank account is seeded with Aadhaar and ready for Direct Benefit Transfer (DBT).",
                stepsTitle: "4 Simple Steps:",
                steps: [
                    "Download the 'Aadhaar Seeding Form' from your bank's website or our portal.",
                    "Fill the form completely. Use our AI Form Checker online to avoid errors.",
                    "Visit your bank branch with the form and a copy of your Aadhaar card.",
                    "Submit the documents and get an acknowledgement slip."
                ]
            },
            flyer2: {
                title: "DBT Facts & Myths",
                text: "Don't fall for common misconceptions about the scholarship process.",
                myths: {
                    title: "Common Myths:",
                    list: [
                        "My Aadhaar-linked account will automatically get the scholarship.",
                        "I can receive funds in any of my accounts.",
                        "Aadhaar seeding is a one-time process and never needs to be checked."
                    ]
                },
                tip: "Pro Tip: Always check your seeding status on the official UIDAI website before scholarship season!"
            },
            instructions: {
                printButton: "Prepare Kit for Printing",
                visitWebsite: "For more tools and information, visit:",
                mythLabel: "Myth:",
                footer: "This kit is for educational and awareness purposes only. Produced by DBT Sahayak."
            }
        },
        footer: {
            tagline: "An initiative by Team Code Technicians for Smart India Hackathon 2025.",
            credits: "Under the guidance of the Ministry of Social Justice & Empowerment.",
            navigation: "Navigation",
            resources: "Resources",
            about: "About",
            learnMore: "Learn More",
            github: "GitHub",
            telegram: "Telegram"
        },
        languages: {
            en: "English",
            hi: "हिन्दी",
            gu: "ગુજરાતી"
        }
    },
    hi: {
        header: {
            title: "डीबीटी सहायक",
            nav: {
                education: "जानें",
                videos: "वीडियो",
                status: "स्थिति जांचें",
                takeAction: "कार्रवाई करें",
                scholarships: "योजनाएं",
                myths: "मिथक तोड़ें",
                faq: "अक्सर पूछे जाने वाले प्रश्न",
                contact: "संपर्क",
                about: "हमारे बारे में",
                resources: "संसाधन",
                governance: "शासन",
                aboutTeam: "टीम के बारे में",
                printKit: "प्रिंट किट",
                requestDrive: "ड्राइव का अनुरोध करें",
                formChecker: "एआई फॉर्म जांच",
                eligibilityChecker: "पात्रता जांचकर्ता",
                awareness: "डीबीटी योजनाएं",
                dbtMap: "प्रदर्शन मानचित्र"
            },
            login: "लॉगिन/रजिस्टर करें"
        },
        hero: {
            tagline: "भारत का प्रत्यक्ष लाभ हस्तांतरण, सरलीकृत।",
            title: "डीबीटी पारिस्थितिकी तंत्र के लिए एक व्यापक गाइड",
            subtitle: "सब्सिडी और पेंशन से लेकर मजदूरी और छात्रवृत्ति तक, समझें कि प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) पूरे भारत में लाखों लोगों के जीवन को कैसे प्रभावित करता है। सुनिश्चित करें कि आप डीबीटी-तैयार हैं।",
            cta: "डीबीटी योजनाएं देखें"
        },
        education: {
            title: "ज्ञान ही शक्ति है",
            subtitle: "परेशानी मुक्त लाभ वितरण के लिए आवश्यक बातें समझें।",
            card1: {
                title: "आधार लिंक्ड खाता",
                description: "आपका आधार नंबर पहचान सत्यापन (ई-केवाईसी) के लिए आपके बैंक खाते से जुड़ा होता है। यह सरकारी लाभों की प्राप्ति की गारंटी नहीं देता है।"
            },
            card2: {
                title: "डीबीटी-सक्षम आधार सीडेड खाता",
                description: "प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) प्राप्त करने के लिए आपका आधार भारतीय राष्ट्रीय भुगतान निगम (एनपीसीआई) सर्वर पर एक विशिष्ट बैंक खाते से मैप किया गया है। यह अनिवार्य है।"
            },
            comparison: {
                title: "आमने-सामने तुलना",
                subtitle: "एक नज़र में મુખ્ય अंतर।",
                feature: "विशेषता",
                linked: "आधार लिंक्ड",
                seeded: "डीबीटी-सक्षम (सीडेड)",
                features: [
                    {
                        feature: "उद्देश्य",
                        linked: "पहचान सत्यापन (केवाईसी)",
                        seeded: "सरकारी लाभ प्राप्त करना (डीबीटी)"
                    },
                    {
                        feature: "तंत्र",
                        linked: "बैंक की आंतरिक प्रणाली से जुड़ा।",
                        seeded: "राष्ट्रीय एनपीसीआई सर्वर के माध्यम से मैप किया गया।"
                    },
                    {
                        feature: "डीबीटी फंड",
                        linked: "प्राप्ति की गारंटी नहीं।",
                        seeded: "डीबीटी फंड की प्राप्ति की गारंटी देता है।"
                    },
                    {
                        feature: "आवश्यकता",
                        linked: "बैंकिंग के लिए अच्छी आदत।",
                        seeded: "सभी डीबीटी योजनाओं के लिए अनिवार्य।"
                    }
                ]
            }
        },
        videos: {
            title: "देखें और जानें",
            subtitle: "आधार सीडिंग को बेहतर ढंग से समझने के लिए ये छोटे वीडियो देखें।",
            videos: [
                {
                    title: "डीबीटी क्या है?",
                    description: "प्रत्यक्ष लाभ हस्तांतरण की मूल बातें जानें।"
                },
                {
                    title: "लिंकिंग बनाम सीडिंग",
                    description: "महत्वपूर्ण अंतर को समझें।"
                },
                {
                    title: "कैसे सीड करें",
                    description: "इसे पूरा करने के लिए चरण-दर-चरण मार्गदर्शिका।"
                },
                {
                    title: "आम मिथक",
                    description: "लोकप्रिय भ्रांतियों का खंडन।"
                }
            ]
        },
        statusChecker: {
            title: "अपने आधार और बैंक खाता सीडिंग स्थिति की जाँच करें",
            description: "डीबीटी भुगतान प्राप्त करने के लिए यह सत्यापित करना महत्वपूर्ण है कि आपका बैंक खाता आधार के साथ ठीक से सीड किया गया है। आधिकारिक यूआईडीएआई पोर्टल पर इन सरल चरणों का पालन करें।",
            steps: [
                "आधिकारिक यूआईडीएआई वेबसाइट (myaadhaar.uidai.gov.in) पर जाएं। दिखाई गई स्थिति एनपीसीआई सर्वर से प्राप्त की जाती है और यह निश्चित स्रोत है।",
                "यूआईडीएआई पर: 'माई आधार' > 'आधार सेवाएं' > 'आधार/बैंक लिंकिंग स्थिति जांचें' पर जाएं।",
                "अपना आधार नंबर और सुरक्षा कोड दर्ज करें।",
                "आपके पंजीकृत मोबाइल नंबर पर एक ओटीपी भेजा जाएगा। अपनी सक्रिय सीडिंग स्थिति देखने के लिए इसे दर्ज करें।",
                "इससे पता चलेगा कि कौन सा बैंक खाता वर्तमान में डीबीटी फंड प्राप्त करने के लिए सीड किया गया है।"
            ],
            cta: "यूआईडीएआई पोर्टल पर स्थिति जांचें"
        },
        takeAction: {
            title: "अभी कार्रवाई करें",
            subtitle: "आपने डीबीटी-सक्षम खाते के महत्व को जान लिया है। यहां बताया गया है कि आप आगे कैसे बढ़ सकते हैं।",
            card1: {
                title: "अपनी यात्रा को ट्रैक करें",
                description: "यदि आपका खाता डीबीटी-सक्षम नहीं है, तो हमारा व्यक्तिगत डैशबोर्ड आपको हर कदम पर मार्गदर्शन करेगा, फॉर्म डाउनलोड करने से लेकर आपकी अंतिम स्थिति की जाँच करने तक।",
                cta: "डैशबोर्ड पर जाएं"
            },
            card2: {
                title: "एक ड्राइव का अनुरोध करें",
                description: "हम स्कूलों, कॉलेजों और स्थानीय समुदायों में मुफ्त जागरूकता सेमिनार आयोजित करते हैं। अपने क्षेत्र में ड्राइव का अनुरोध करने के लिए एक साधारण फॉर्म भरें।",
                cta: "जागरूकता ड्राइव का अनुरोध करें"
            }
        },
        scholarships: {
            title: "डीबीटी योजना एक्सप्लोरर",
            subtitle: "डीबीटी के तहत योजनाओं की विस्तृत श्रृंखला का अन्वेषण करें, छात्रवृत्ति से लेकर पेंशन और सब्सिडी तक।",
            categories: {
                all: "सभी",
                scholarships: "छात्रवृत्तियाँ",
                pensions: "पेंशन",
                subsidies: "सब्सिडी"
            },
            schemes: [
                {
                    title: "SC/OBC/EBC के लिए पोस्ट-मैट्रिक छात्रवृत्ति",
                    description: "अनुसूचित जाति, अन्य पिछड़ा वर्ग और आर्थिक रूप से पिछड़े वर्ग के छात्रों को मैट्रिक के बाद की पढ़ाई के लिए वित्तीय सहायता।",
                    eligibility: "माता-पिता की आय सीमा लागू (जैसे, SC के लिए ₹2.5 लाख तक)।",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 250000,
                        categories: [
                            'SC',
                            'OBC',
                            'EBC'
                        ],
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "राष्ट्रीय मीन्स-कम-मेरिट छात्रवृत्ति (NMMS)",
                    description: "आर्थिक रूप से कमजोर वर्गों के मेधावी छात्रों के लिए ताकि वे आठवीं कक्षा में पढ़ाई न छोड़ें।",
                    eligibility: "माता-पिता की आय ₹3.5 लाख तक। सातवीं कक्षा में कम से कम 55% अंक होने चाहिए।",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 350000,
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "कॉलेज/विश्वविद्यालय के छात्रों के लिए CSSS",
                    description: "कम आय वाले परिवारों के मेधावी छात्रों को उच्च अध्ययन के दौरान खर्चों को पूरा करने के लिए।",
                    eligibility: "बारहवीं कक्षा में शीर्ष 20 प्रतिशत में, माता-पिता की आय < ₹4.5 लाख।",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 450000,
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "पीएम-किसान सम्मान निधि",
                    description: "एक आय सहायता योजना जो सभी पात्र किसान परिवारों को तीन किस्तों में प्रति वर्ष ₹6,000 प्रदान करती है।",
                    eligibility: "सभी भूमि-धारक किसान परिवार।",
                    link: "https://pmkisan.gov.in/",
                    category: "subsidy",
                    eligibilityCriteria: {
                        occupations: [
                            'Farmer'
                        ]
                    }
                },
                {
                    title: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)",
                    description: "वृद्धों, विधवाओं और विकलांग व्यक्तियों को वृद्धावस्था पेंशन जैसे विभिन्न घटकों के तहत वित्तीय सहायता प्रदान करता है।",
                    eligibility: "योजना के घटक के अनुसार बदलता है, आम तौर पर बीपीएल परिवारों के लिए।",
                    link: "https://nsap.nic.in/",
                    category: "pension",
                    eligibilityCriteria: {
                        minAge: 60
                    }
                },
                {
                    title: "पहल (एलपीजी सब्सिडी)",
                    description: "एलपीजी रसोई गैस सिलेंडरों पर सब्सिडी सीधे पात्र उपभोक्ताओं के बैंक खातों में स्थानांतरित की जाती है।",
                    eligibility: "घरेलू एलपीजी कनेक्शन वाले सभी परिवार।",
                    link: "https://dbtbharat.gov.in/scheme/pahal/",
                    category: "subsidy",
                    eligibilityCriteria: {}
                },
                {
                    title: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना",
                    description: "एनएसएपी का एक घटक, जो एक बीपीएल परिवार के वृद्ध व्यक्तियों को मासिक पेंशन प्रदान करता है।",
                    eligibility: "आयु 60+ वर्ष, एक बीपीएल परिवार से।",
                    link: "https://nsap.nic.in/nsap/About_NSAP/ignop_guidelines.pdf",
                    category: "pension",
                    eligibilityCriteria: {
                        minAge: 60
                    }
                },
                {
                    title: "विकलांग छात्रों के लिए छात्रवृत्ति",
                    description: "उत्कृष्टता के निर्दिष्ट संस्थानों में स्नातक और स्नातकोत्तर डिग्री प्राप्त करने वाले विकलांग छात्रों के लिए।",
                    eligibility: "40%+ विकलांगता। ₹6 लाख प्रति वर्ष की माता-पिता की आय सीमा।",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 600000,
                        requiresDisability: true,
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "आरपीएफ/आरपीएसएफ के लिए प्रधानमंत्री छात्रवृत्ति योजना",
                    description: "रेलवे सुरक्षा बल (आरपीएफ) के कर्मियों के आश्रित बच्चों के लिए व्यावसायिक डिग्री छात्रवृत्ति।",
                    eligibility: "सेवारत/पूर्व कर्मियों के आश्रित। 12वीं/डिप्लोमा/स्नातक में न्यूनतम 60%।",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        occupations: [
                            'Student'
                        ]
                    }
                }
            ]
        },
        mythBusters: {
            title: "मिथक तोड़ें",
            subtitle: "अपने ज्ञान का परीक्षण करें! क्या आप डीबीटी मिथक और तथ्य के बीच अंतर बता सकते हैं?",
            resultText: "अब आप एक प्रमाणित मिथक और तथ्य विशेषज्ञ हैं! दूसरों की मदद करने के लिए अपना ज्ञान साझा करें।",
            myths: [
                {
                    myth: "यदि मेरा बैंक खाता आधार से जुड़ा हुआ है, तो मुझे स्वतः ही मेरी डीबीटी निधि मिल जाएगी।",
                    fact: "यह एक बड़ा मिथक है। आपके खाते को डीबीटी के लिए आधार के साथ 'सीड' किया जाना चाहिए। लिंकिंग केवल केवाईसी के लिए है।"
                },
                {
                    myth: "मैं अपने किसी भी आधार-लिंक्ड बैंक खाते में अपनी डीबीटी निधि प्राप्त कर सकता हूँ।",
                    fact: "यह एक मिथक है। आप केवल उसी एक बैंक खाते में डीबीटी भुगतान प्राप्त कर सकते हैं जो वर्तमान में आपके आधार के साथ सीड किया गया है।"
                },
                {
                    myth: "मेरे बैंक के पास मेरे आधार कार्ड की फोटोकॉपी है, इसलिए मेरा खाता सीडेड है।",
                    fact: "यह एक मिथक है। आपको विशिष्ट 'आधार सीडिंग सहमति फॉर्म' भरना होगा और स्पष्ट रूप से सीडिंग का अनुरोध करना होगा।"
                },
                {
                    myth: "यदि मेरी सीडिंग विफल हो जाती है, तो यह एनपीसीआई या यूआईडीएआई के साथ एक समस्या है।",
                    fact: "यह एक मिथक है। एनपीसीआई मैपर को अपडेट करने की जिम्मेदारी पूरी तरह से बैंकों की है। आपको अपनी बैंक शाखा से संपर्क करना होगा।"
                },
                {
                    myth: "डीबीटी केवल छात्रवृत्ति के लिए है।",
                    fact: "यह एक बहुत बड़ा मिथक है। डीबीटी 300 से अधिक योजनाओं के लिए एक मंच है, जिसमें पेंशन (एनएसएपी), सब्सिडी (पीएम-किसान, पहल), और मजदूरी भुगतान (मनरेगा) शामिल हैं।"
                }
            ],
            facts: [
                {
                    fact: "डीबीटी को सक्षम करने के लिए आपको अपने बैंक में एक विशिष्ट 'आधार सीडिंग सहमति फॉर्म' जमा करना होगा।",
                    explanation: "यह एक तथ्य है। केवल एक लिंक किया हुआ खाता होना पर्याप्त नहीं है; आपको सीडिंग के लिए स्पष्ट सहमति देनी होगी।"
                },
                {
                    fact: "किसी भी समय डीबीटी के लिए केवल एक बैंक खाता आधार-સીડ किया जा सकता है।",
                    explanation: "यह एक तथ्य है। यदि आप कोई नया खाता सीड करते हैं, तो यह स्वचालित रूप से पिछले खाते को एनपीसीआई मैपर से डी-लिंक कर देता है।"
                },
                {
                    fact: "यदि बॉयोमीट्रिक प्रमाणीकरण विफल हो जाता है, तो लाभ प्राप्त करने के वैकल्पिक तरीके हैं।",
                    explanation: "यह एक तथ्य है। सरकारी दिशानिर्देशों में एक 'अपवाद हैंडलिंग तंत्र' शामिल है ताकि यह सुनिश्चित हो सके कि आपको लाभ मिले।"
                },
                {
                    fact: "यदि आधार और बैंक खाते पर आपका नाम बिल्कुल मेल नहीं खाता है, तो सीडिंग विफल हो जाएगी।",
                    explanation: "यह एक तथ्य है। सीडिंग प्रक्रिया के सफल होने के लिए आपका नाम दोनों रिकॉर्ड में समान होना चाहिए।"
                },
                {
                    fact: "आप यूआईडीएआई और एनपीसीआई दोनों वेबसाइटों पर अपनी आधार सीडिंग स्थिति की जांच कर सकते हैं।",
                    explanation: "यह एक तथ्य है। दोनों आधिकारिक पोर्टल यह जांचने की सुविधा प्रदान करते हैं कि वर्तमान में कौन सा बैंक खाता डीबीटी के लिए सीड किया गया है।"
                }
            ]
        },
        awareness: {
            title: "भारत में डीबीटी का दायरा",
            subtitle: "डीबीटी सिर्फ छात्रवृत्ति से कहीं बढ़कर है। यह 50+ मंत्रालयों की 300 से अधिक योजनाओं के लिए एक एकीकृत मंच है। प्रमुख श्रेणियों का अन्वेषण करें।",
            tableHeaders: {
                scheme: "प्रमुख योजनाएं",
                ministry: "कार्यान्वयन मंत्रालय",
                beneficiaries: "लाभार्थी"
            },
            categories: [
                {
                    category: "सब्सिडी",
                    description: "आवश्यक वस्तुओं की लागत को कम करने के लिए प्रत्यक्ष वित्तीय सहायता।",
                    schemes: [
                        {
                            name: "पहल (एलपीजी सब्सिडी), उर्वरक सब्सिडी (पायलट), खाद्य सब्सिडी (कुछ राज्यों में पीडीएस)",
                            ministry: "पेट्रोलियम मंत्रालय, रसायन और उर्वरक मंत्रालय, उपभोक्ता मामले मंत्रालय",
                            beneficiaries: "एलपीजी का उपयोग करने वाले परिवार, किसान, राशन कार्ड धारक"
                        }
                    ]
                },
                {
                    category: "आय सहायता",
                    description: "नागरिकों की आय को पूरक करने के लिए प्रत्यक्ष नकद हस्तांतरण।",
                    schemes: [
                        {
                            name: "पीएम-किसान सम्मान निधि (किसानों को ₹6000/वर्ष), राज्य स्तरीय किसान आय सहायता",
                            ministry: "कृषि एवं किसान कल्याण मंत्रालय",
                            beneficiaries: "छोटे और सीमांत किसान"
                        }
                    ]
                },
                {
                    category: "मजदूरी भुगतान",
                    description: "सार्वजनिक निर्माण कार्यक्रमों के लिए मजदूरी का सीधा भुगतान।",
                    schemes: [
                        {
                            name: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम (मनरेगा)",
                            ministry: "ग्रामीण विकास मंत्रालय",
                            beneficiaries: "रोजगार चाहने वाले ग्रामीण परिवार"
                        }
                    ]
                },
                {
                    category: "सामाजिक सुरक्षा पेंशन",
                    description: "कमजोर आबादी के लिए नियमित वित्तीय सहायता।",
                    schemes: [
                        {
                            name: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (एनएसएपी), वृद्धावस्था, विधवा और विकलांगता पेंशन",
                            ministry: "ग्रामीण विकास मंत्रालय, राज्य समाज कल्याण विभाग",
                            beneficiaries: "बुजुर्ग, विधवाएं, विकलांग व्यक्ति"
                        }
                    ]
                },
                {
                    category: "स्वास्थ्य सेवा से जुड़ा",
                    description: "चिकित्सा खर्च और मातृ देखभाल के लिए वित्तीय सहायता।",
                    schemes: [
                        {
                            name: "जननी सुरक्षा योजना (जेएसवाई), आयुष्मान भारत प्रतिपूर्ति, पीएमएमवीवाई",
                            ministry: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय, महिला एवं बाल विकास मंत्रालय",
                            beneficiaries: "गर्भवती महिलाएं, नवजात शिशु, कम आय वाले रोगी"
                        }
                    ]
                },
                {
                    category: "शैक्षिक लाभ",
                    description: "छात्रों को अपनी शिक्षा जारी रखने के लिए सहायता।",
                    schemes: [
                        {
                            name: "छात्रवृत्ति (प्री-मैट्रिक, पोस्ट-मैट्रिक), फेलोशिप, मध्याह्न भोजन नकद हस्तांतरण",
                            ministry: "शिक्षा मंत्रालय, सामाजिक न्याय मंत्रालय, अल्पसंख्यक मामले मंत्रालय",
                            beneficiaries: "छात्र (एससी, एसटी, ओबीसी, अल्पसंख्यक, आदि)"
                        }
                    ]
                },
                {
                    category: "आवास और संपत्ति सहायता",
                    description: "घर बनाने और संपत्ति बनाने के लिए वित्तीय सहायता।",
                    schemes: [
                        {
                            name: "प्रधानमंत्री आवास योजना (पीएमएवाई), इंदिरा आवास योजना (आईएवाई - पुरानी)",
                            ministry: "आવાસ एवं शहरी मामलों के मंत्रालय, ग्रामीण विकास मंत्रालय",
                            beneficiaries: "ग्रामीण और शहरी गरीब परिवार"
                        }
                    ]
                },
                {
                    category: "राहत और आपातकालीन हस्तांतरण",
                    description: "आपदाओं या आपात स्थितियों के दौरान तत्काल वित्तीय सहायता।",
                    schemes: [
                        {
                            name: "पीएम गरीब कल्याण योजना (कोविड राहत), राज्य स्तरीय आपदा राहत कोष",
                            ministry: "वित्त मंत्रालय, राज्य राहत विभाग",
                            beneficiaries: "गरीब परिवार, प्रवासी, आपदा प्रभावित परिवार"
                        }
                    ]
                },
                {
                    category: "अन्य",
                    description: "विशिष्ट समुदायों के लिए लक्षित कल्याणकारी योजनाएं।",
                    schemes: [
                        {
                            name: "विकलांगों के लिए प्रत्यक्ष नकद हस्तांतरण, जनजातीय कल्याण योजनाएं, अल्पसंख्यक कल्याण डीबीटी",
                            ministry: "सामाजिक न्याय मंत्रालय, जनजातीय मामले मंत्रालय, अल्पसंख्यक मामले मंत्रालय",
                            beneficiaries: "विकलांग, आदिवासी, अल्पसंख्यक"
                        }
                    ]
                }
            ]
        },
        faq: {
            title: "अक्सर पूछे जाने वाले प्रश्न",
            subtitle: "आधार सीडिंग और डीबीटी के बारे में सामान्य प्रश्नों के उत्तर प्राप्त करें।",
            faqs: [
                {
                    question: "आधार लिंकिंग और आधार सीडिंग में क्या अंतर है?",
                    answer: "आधार लिंकिंग आपके आधार को पहचान सत्यापन (केवाईसी) के लिए बैंक खाते से जोड़ता है। आधार सीडिंग आपके आधार को प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) प्राप्त करने के लिए एनपीसीआई सर्वर पर एक ही बैंक खाते से मैप करने की एक अलग, विशिष्ट प्रक्रिया है। छात्रवृत्ति और अन्य योजनाओं के लिए सीडिंग अनिवार्य है।"
                },
                {
                    question: "क्या मेरे पास कई आधार-सीडेड खाते हो सकते हैं?",
                    answer: "नहीं, आपके पास किसी भी समय डीबीटी प्राप्त करने के लिए सिर्फ एक आधार-सीडेड खाता हो सकता है। यदि आप कोई नया खाता सीड करते हैं, तो पिछला खाता स्वचालित रूप से डी-लिंक हो जाता है। सब्सिडी अंतिम सफलतापूर्वक सीड किए गए बैंक खाते में जमा की जाएगी।"
                },
                {
                    question: "मेरा डीबीटी भुगतान विफल हो गया। मुझे क्या करना चाहिए?",
                    answer: "सबसे पहले, यूआईडीएआई पोर्टल पर अपनी सीडिंग स्थिति की जांच करें। यदि यह निष्क्रिय है या गलत खाते से जुड़ा हुआ है, तो सीडिंग फॉर्म के साथ अपनी बैंक शाखा में जाएँ। यह भी सुनिश्चित करें कि आपके बैंक और आधार रिकॉर्ड के बीच आपका नाम और अन्य विवरण बिल्कुल मेल खाते हैं।"
                },
                {
                    question: "डीबीटी फंड प्राप्त करने के लिए मैं अपना बैंक खाता कैसे बदलूं?",
                    answer: "अपना डीबीटी-सक्षम खाता बदलने के लिए, आपको उस *नए* बैंक की शाखा में जाना होगा जहां आप फंड प्राप्त करना चाहते हैं। वहां आधार सीडिंग सहमति फॉर्म जमा करें। वे एनपीसीआई मैपर को अपडेट कर देंगे, जो पुराने खाते को स्वचालित रूप से ओवरराइड कर देगा।"
                },
                {
                    question: "मेरा नाम मेरे आधार कार्ड बनाम मेरे बैंक खाते में अलग है। मुझे क्या करना चाहिए?",
                    answer: "आपको अपने नाम को किसी एक दस्तावेज़ में ठीक करवाना होगा ताकि वे बिल्कुल मेल खाएं। आप अपने आधार की विवरण अपडेट करने के लिए किसी आधार नामांकन केंद्र पर जा सकते हैं, या अपने बैंक रिकॉर्ड को अपडेट करने के लिए अपनी बैंक शाखा में जा सकते हैं। सीडिंग के सफल होने के लिए नाम एक जैसा होना चाहिए।"
                },
                {
                    question: "क्या आधार सीडिंग की कोई समय सीमा है?",
                    answer: "कोई आधिकारिक समय सीमा नहीं है, लेकिन जल्द से जल्द प्रक्रिया पूरी करने की दृढ़ता से सिफारिश की जाती है। कई योजनाएं गैर-सीडेड खातों में धन का वितरण नहीं करेंगी, इसलिए यदि आप देरी करते हैं तो आप लाभों से वंचित रह सकते हैं।"
                },
                {
                    question: "क्या मेरी पेंशन या सब्सिडी प्राप्त करने के लिए आधार अनिवार्य है?",
                    answer: "जबकि आधार पसंदीदा और सबसे कुशल तरीका है, सुप्रीम कोर्ट ने फैसला सुनाया है कि सिर्फ आधार संख्या न होने के कारण आवश्यक लाभों से इनकार नहीं किया जा सकता है। यदि आपके पास आधार नहीं है, तो आप योजना द्वारा निर्दिष्ट वैकल्पिक सरकारी-अनुमोदित आईडी का उपयोग कर सकते हैं।"
                },
                {
                    question: "मुझे कैसे पता चलेगा कि मेरे खाते में डीबीटी फंड आ गया है?",
                    answer: "यदि आपने अपने बैंक से एसएमएस अलर्ट सक्षम किया है, तो आपको एक सूचना प्राप्त होगी। आप एटीएम, अपने बैंक के मोबाइल ऐप, इंटरनेट बैंकिंग के माध्यम से या बैंक मित्र/संवाददाता के पास जाकर भी अपने खाते की शेष राशि की जांच कर सकते हैं।"
                }
            ]
        },
        contact: {
            title: "संपर्क और संसाधन",
            subtitle: "आधिकारिक संपर्क जानकारी और डाउनलोड करने योग्य बैंक फॉर्म प्राप्त करें।",
            helpline: "राष्ट्रीय छात्रवृत्ति पोर्टल हेल्पलाइन: 0120 - 6619540",
            resources: "बैंक आधार सीडिंग फॉर्म",
            bankForms: [
                {
                    name: "भारतीय स्टेट बैंक (एसबीआई)",
                    description: "एसबीआई ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।",
                    link: "https://sbi.co.in/documents/16012/25194947/Aadhaar+Seeding+Process+for+Customers+of+Other+Banks+having+SBI+account.pdf"
                },
                {
                    name: "पंजाब नेशनल बैंक (पीएनबी)",
                    description: "पीएनबी ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।",
                    link: "https://www.pnbindia.in/downloadprocess.aspx?fid=3532E743-4C98-43B0-A227-22F091054C35"
                },
                {
                    name: "बैंक ऑफ बड़ौदा (बीओबी)",
                    description: "बीओबी ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।",
                    link: "https://www.bankofbaroda.in/-/media/project/bob/countrysites/india/personal-banking/accounts/documents/application-for-linking-aadhaar-number.pdf"
                },
                {
                    name: "एचडीएफसी बैंक",
                    description: "एचडीएफसी ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।",
                    link: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c86c"
                },
                {
                    name: "आईसीआईसीआई बैंक",
                    description: "आईसीआईसीआई ग्राहकों के लिए आधार सीडिंग निर्देश।",
                    link: "https://www.icicibank.com/personal-banking/insta-banking/internet-banking/link-aadhaar-card"
                },
                {
                    name: "ऐक्सिस बैंक",
                    description: "ऐक्सिस बैंक ग्राहकों के लिए आधार सीडिंग आवेदन पत्र।",
                    link: "https://www.axisbank.com/docs/default-source/default-document-library/accounts-and-deposits/application-form-to-link-aadhaar-card-to-savings-account.pdf"
                }
            ]
        },
        about: {
            title: "डीबीटी मिशन के बारे में",
            mandate: {
                title: "डीबीटी मिशन का जनादेश",
                subtitle: "भारत में प्रत्यक्ष लाभ हस्तांतरण का आधिकारिक जनादेश और इतिहास।",
                aboutText: [
                    "प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) योजना 1 जनवरी 2013 को भारत में कल्याणकारी वितरण प्रणाली में सुधार के लिए एक बड़े सरकारी सुधार के तौर पर शुरू की गई थी।",
                    "इसका प्राथमिक लक्ष्य सरल, तेज और अधिक सटीक वितरण के लिए मौजूदा प्रक्रियाओं को फिर से डिजाइन करके सरकारी सब्सिडी और लाभों के प्रवाह को बेहतर बनाना है, जबकि धोखाधड़ी और नकल को कम करना है।",
                    "डीबीटी मिशन, कार्यान्वयन के लिए नोडल बॉडी, शुरू में योजना आयोग में था, 2013 में व्यय विभाग में स्थानांतरित हुआ, और 2015 से, इसके काम को और गति देने के लिए कैबिनेट सचिवालय के तहत काम कर रहा है।",
                    "डीबीटी जेएएम ट्रिनिटी (જન ધન બેંક खाते, આધાર विशिष्ट आईडी, और मोबाइल फोन) का लाभ उठाता है ताकि लाभार्थियों के खातों में सीधे लाभ हस्तांतरित करने के लिए एक पारदर्शी और कुशल मंच प्रदान किया जा सके।"
                ],
                orgChartTitle: "डीबीटी मिशन संगठनात्मक संरचना"
            },
            institutionalFramework: {
                title: "संस्थागत ढांचा",
                subtitle: "डीबीटी को संभव बनाने वाले प्रमुख सरकारी निकाय।",
                points: [
                    {
                        title: "डीबीटी मिशन (कैबिनेट सचिवालय)",
                        description: "नीति, समन्वय और देश भर में डीबीटी के कार्यान्वयन की निगरानी के लिए जिम्मेदार नोડલ एजेंसी।"
                    },
                    {
                        title: "वित्त मंत्रालय (सीजीए और पीएफएमएस)",
                        description: "नियंत्रक महालेखाकार (सीजीए) सार्वजनिक वित्तीय प्रबंधन प्रणाली (पीएफएमएस) चलाता है, जो सभी डीबीटी भुगतानों और सुलह के लिए मुख्य इलेक्ट्रॉनिक मंच है।"
                    },
                    {
                        title: "एनपीसीआई (भारतीय राष्ट्रीय भुगतान निगम)",
                        description: "आधार भुगतान ब्रिज (एपीबी) चलाता है, जो आधार नंबर का उपयोग करके सही बैंक खाते में लाभ पहुंचाने वाला सिस्टम है।"
                    },
                    {
                        title: "यूआईडीएआई (आधार)",
                        description: "विशिष्ट पहचान सत्यापन (ई-केवाईसी) और प्रमाणीकरण सेवाएं प्रदान करता है जो पूरे डीबीटी ढांचे की नींव हैं।"
                    },
                    {
                        title: "कार्यान्वयन मंत्रालय और राज्य",
                        description: "व्यक्तिगत मंत्रालय (जैसे, मनरेगा के लिए ग्रामीण विकास) और राज्य सरकारें अपनी योजनाएं और लाभार्थी सूचियाँ प्रबंधित करती हैं, जो केंद्रीय डीबीटी प्लेटफार्मों के साथ एकीकृत होती हैं।"
                    }
                ]
            },
            ourTeam: {
                title: "टीम के बारे में",
                subtitle: "एसआईएच 2025 के लिए डीबीटी सहायक के पीछे के छात्र।"
            }
        },
        printKit: {
            title: "प्रिंट करने योग्य जागरूकता किट",
            subtitle: "स्कूलों और समुदायों में ऑफ़लाइन अभियानों के लिए इन सामग्रियों को डाउनलोड और प्रिंट करें।",
            poster: {
                title: "क्या आपका बैंक खाता आपकी छात्रवृत्ति के लिए तैयार है?",
                subtitle: "एक साधारण सी गलती को अपने फंड को रोकने न दें! सुनिश्चित करें कि आपका खाता डीबीटी-सक्षम है।",
                point1: "सभी सरकारी छात्रवृत्तियों के लिए एक डीबीटी-सक्षम (आधार सीडेड) खाता अनिवार्य है।",
                point2: "सिर्फ अपने आधार को 'लिंक' करना ही काफी नहीं है। सीडिंग एक अलग, महत्वपूर्ण कदम है।",
                cta: "आज ही अपनी स्थिति जांचें!"
            },
            flyer1: {
                title: "डीबीटी-तैयार कैसे बनें",
                text: "यह सुनिश्चित करने के लिए इन चरणों का पालन करें कि आपका बैंक खाता आधार के साथ सीड किया गया है और प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) के लिए तैयार है।",
                stepsTitle: "4 सरल चरण:",
                steps: [
                    "अपने बैंक की वेबसाइट या हमारे पोर्टल से 'आधार सीडिंग फॉर्म' डाउनलोड करें।",
                    "फॉर्म को पूरी तरह से भरें। त्रुटियों से बचने के लिए हमारे एआई फॉर्म चेकर का ऑनलाइन उपयोग करें।",
                    "फॉर्म और अपने आधार कार्ड की एक प्रति के साथ अपनी बैंक शाखा में जाएँ।",
                    "दस्तावेज जमा करें और एक पावती पर्ची प्राप्त करें।"
                ]
            },
            flyer2: {
                title: "डीबीटी तथ्य और मिथक",
                text: "छात्रवृत्ति प्रक्रिया के बारे में आम भ्रांतियों में न पड़ें।",
                myths: {
                    title: "आम मिथक:",
                    list: [
                        "मेरा आधार-लिंक्ed खाता स्वतः ही छात्रवृत्ति प्राप्त कर लेगा।",
                        "मैं अपने किसी भी खाते में फंड प्राप्त कर सकता हूँ।",
                        "आधार सीडिंग एक बार की प्रक्रिया है और इसे कभी जांचने की आवश्यकता नहीं है।"
                    ]
                },
                tip: "प्रो टिप: छात्रवृत्ति के मौसम से पहले हमेशा आधिकारिक यूआईडीएआई वेबसाइट पर अपनी सीडिंग स्थिति जांचें!"
            },
            instructions: {
                printButton: "प्रिंटिंग के लिए किट तैयार करें",
                visitWebsite: "अधिक उपकरणों और जानकारी के लिए, यहां जाएं:",
                mythLabel: "मिथक:",
                footer: "यह किट केवल शैक्षिक और जागरूकता उद्देश्यों के लिए है। डीबीटी सहायक द्वारा निर्मित।"
            }
        },
        footer: {
            tagline: "स्मार्ट इंडिया हैकथॉन २०२५ के लिए टीम कोड टेक्नीशियन की एक पहल।",
            credits: "सामाजिक न्याय और अधिकारिता मंत्रालय के मार्गदर्शन में।",
            navigation: "नेविगेशन",
            resources: "संसाधन",
            about: "हमारे बारे में",
            learnMore: "और जानें",
            github: "गिटहब",
            telegram: "टेलीग्राम"
        },
        languages: {
            en: "English",
            hi: "हिन्दी",
            gu: "ગુજરાતી"
        }
    },
    gu: {
        header: {
            title: "ડીબીટી સહાયક",
            nav: {
                education: "જાણો",
                videos: "વીડિયો",
                status: "સ્થિતિ તપાસો",
                takeAction: "પગલાં લો",
                scholarships: "યોજનાઓ",
                myths: "માન્યતા તોડો",
                faq: "વારંવાર પૂછાતા પ્રશ્નો",
                contact: "સંપર્ક",
                about: "અમારા વિશે",
                resources: "સંસાધનો",
                governance: "શાસન",
                aboutTeam: "ટીમ વિશે",
                printKit: "પ્રિન્ટ કીટ",
                requestDrive: "ડ્રાઇવની વિનંતી કરો",
                formChecker: "એઆઈ ફોર્મ તપાસ",
                eligibilityChecker: "પાત્રતા તપાસનાર",
                awareness: "ડીબીટી યોજનાઓ",
                dbtMap: "પ્રદર્શન નકશો"
            },
            login: "લોગિન/રજીસ્ટર કરો"
        },
        hero: {
            tagline: "ભારતનું ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર, સરળ બનાવ્યું.",
            title: "ડીબીટી ઇકોસિસ્ટમ માટે એક વ્યાપક માર્ગદર્શિકા",
            subtitle: "સબસિડી અને પેન્શનથી લઈને મજૂરી અને શિષ્યવૃત્તિ સુધી, સમજો કે ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (ડીબીટી) સમગ્ર ભારતમાં લાખો લોકોના જીવનને કેવી રીતે અસર કરે છે. ખાતરી કરો કે તમે ડીબીટી-તૈયાર છો.",
            cta: "ડીબીટી યોજનાઓ શોધો"
        },
        education: {
            title: "જ્ઞાન એ જ શક્તિ છે",
            subtitle: "મુશ્કેલી-મુક્ત લાભ વિતરણ માટે જરૂરી બાબતોને સમજો.",
            card1: {
                title: "આધાર લિંક્ડ એકાઉન્ટ",
                description: "તમારો આધાર નંબર ફક્ત ઓળખ ચકાસણી (e-KYC) માટે તમારા બેંક ખાતા સાથે જોડાયેલ છે. આ સરકારી લાભોની પ્રાપ્તિની ખાતરી આપતું નથી."
            },
            card2: {
                title: "ડીબીટી-સક્ષમ આધાર સીડેડ એકાઉન્ટ",
                description: "ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (ડીબીટી) મેળવવા માટે તમારું આધાર નેશનલ પેમેન્ટ્સ કોર્પોરેશન ઓફ ઈન્ડિયા (NPCI) સર્વર પર ચોક્કસ બેંક ખાતા સાથે મેપ થયેલું છે. આ ફરજિયાત છે."
            },
            comparison: {
                title: "આમને-સામને તુલના",
                subtitle: "એક નજરમાં મુખ્ય તફાવતો.",
                feature: "વિશેષતા",
                linked: "આધાર લિંક્ડ",
                seeded: "ડીબીટી-સક્ષમ (સીડેડ)",
                features: [
                    {
                        feature: "હેતુ",
                        linked: "ઓળખ ચકાસણી (કેવાયસી)",
                        seeded: "સરકારી લાભો મેળવવા (ડીબીટી)"
                    },
                    {
                        feature: "પ્રણાલી",
                        linked: "બેંકની આંતરિક સિસ્ટમ સાથે જોડાયેલ.",
                        seeded: "રાષ્ટ્રીય એનપીસીઆઈ સર્વર દ્વારા મેપ થયેલ."
                    },
                    {
                        feature: "ડીબીટી ભંડોળ",
                        linked: "પ્રાપ્તિની ગેરંટી નથી.",
                        seeded: "ડીબીટી ભંડોળની પ્રાપ્તિની ગેરંટી આપે છે."
                    },
                    {
                        feature: "જરૂરિયાત",
                        linked: "બેંકિંગ માટે સારી પ્રથા.",
                        seeded: "બધી ડીબીટી યોજનાઓ માટે ફરજિયાત."
                    }
                ]
            }
        },
        videos: {
            title: "જુઓ અને શીખો",
            subtitle: "આધાર સીડિંગને વધુ સારી રીતે સમજવા માટે આ ટૂંકી વિડિઓઝ જુઓ.",
            videos: [
                {
                    title: "ડીબીટી શું છે?",
                    description: "ડાયરેક્ટ બેનિફિટ ટ્રાન્સફરની મૂળભૂત બાબતો જાણો."
                },
                {
                    title: "લિંકિંગ વિરુદ્ધ સીડિંગ",
                    description: "મહત્વપૂર્ણ તફાવતને સમજો."
                },
                {
                    title: "કેવી રીતે સીડ કરવું",
                    description: "તેને પૂર્ણ કરવા માટે પગલું-દર-પગલું માર્ગદર્શિકા."
                },
                {
                    title: "સામાન્ય માન્યતાઓ",
                    description: "લોકપ્રિય ગેરસમજોનું ખંડન."
                }
            ]
        },
        statusChecker: {
            title: "તમારા આધાર અને બેંક એકાઉન્ટ સીડિંગની સ્થિતિ તપાસો",
            description: "ડીબીટી ચુકવણીઓ મેળવવા માટે તમારું બેંક ખાતું આધાર સાથે યોગ્ય રીતે સીડ થયેલ છે તેની ખાતરી કરવી મહત્વપૂર્ણ છે. અધિકૃત યુઆઈડીએઆઈ પોર્ટલ પર આ સરળ પગલાં અનુસરો.",
            steps: [
                "અધિકૃત UIDAI વેબસાઇટ (myaadhaar.uidai.gov.in) ની મુલાકાત લો. બતાવેલ સ્થિતિ NPCI સર્વર પરથી મેળવવામાં આવે છે અને તે નિર્ણાયક સ્ત્રોત છે.",
                "UIDAI પર: 'માય આધાર' > 'આધાર સેવાઓ' > 'આધાર/બેંક લિંકિંગ સ્થિતિ તપાસો' પર જાઓ.",
                "તમારો આધાર નંબર અને સુરક્ષા કોડ દાખલ કરો.",
                "તમારા નોંધાયેલા મોબાઇલ નંબર પર એક OTP મોકલવામાં આવશે. તમારી સક્રિય સીડિંગ સ્થિતિ જોવા માટે તેને દાખલ કરો.",
                "આ બતાવશે કે કયું બેંક ખાતું હાલમાં DBT ભંડોળ મેળવવા માટે સીડ થયેલ છે."
            ],
            cta: "યુઆઈડીએઆઈ પોર્ટલ પર સ્થિતિ તપાસો"
        },
        takeAction: {
            title: "હવે પગલાં લો",
            subtitle: "તમે ડીબીટી-સક્ષમ ખાતાનું મહત્વ જાણ્યું છે. હવે તમે આગળ કેવી રીતે વધી શકો છો તે અહીં છે.",
            card1: {
                title: "તમારી યાત્રાને ટ્રેક કરો",
                description: "જો તમારું એકાઉન્ટ ડીબીટી-સક્ષમ નથી, તો અમારું વ્યક્તિગત ડેશબોર્ડ તમને દરેક પગલામાં માર્ગદર્શન આપશે, ફોર્મ ડાઉનલોડ કરવાથી માંડીને તમારી અંતિમ સ્થિતિ તપાસવા સુધી.",
                cta: "ડેશબોર્ડ પર જાઓ"
            },
            card2: {
                title: "ડ્રાઇવની વિનંતી કરો",
                description: "અમે શાળાઓ, કોલેજો અને સ્થાનિક સમુદાયોમાં મફત જાગૃતિ સેમિનાર યોજીએ છીએ. તમારા વિસ્તારમાં ડ્રાઇવની વિનંતી કરવા માટે એક સરળ ફોર્મ ભરો.",
                cta: "જાગૃતિ ડ્રાઇવની વિનંતી કરો"
            }
        },
        scholarships: {
            title: "ડીબીટી યોજના એક્સપ્લોરર",
            subtitle: "ડીબીટી હેઠળની યોજનાઓની વ્યાપક શ્રેણીનું અન્વેષણ કરો, શિષ્યવૃત્તિથી લઈને પેન્શન અને સબસિડી સુધી.",
            categories: {
                all: "બધી",
                scholarships: "શિષ્યવૃત્તિ",
                pensions: "પેન્શન",
                subsidies: "સબસિડી"
            },
            schemes: [
                {
                    title: "SC/OBC/EBC માટે પોસ્ટ-મેટ્રિક શિષ્યવૃત્તિ",
                    description: "અનુસૂચિત જાતિ, અન્ય પછાત વર્ગ અને આર્થિક રીતે પછાત વર્ગના વિદ્યાર્થીઓને મેટ્રિક પછીના અભ્યાસ માટે આર્થિક સહાય.",
                    eligibility: "વાલીની આવક મર્યાદા લાગુ (દા.ત., SC માટે ₹2.5 લાખ સુધી).",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 250000,
                        categories: [
                            'SC',
                            'OBC',
                            'EBC'
                        ],
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "રાષ્ટ્રીય મીન્સ-કમ-મેરિટ શિષ્યવૃત્તિ (NMMS)",
                    description: "આર્થિક રીતે નબળા વર્ગના હોશિયાર વિદ્યાર્થીઓ માટે જેથી તેઓ ધોરણ 8 માં અભ્યાસ ન છોડે.",
                    eligibility: "વાલીની આવક ₹3.5 લાખ સુધી. ધોરણ 7 માં ઓછામાં ઓછા 55% ગુણ હોવા જોઈએ.",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 350000,
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "કોલેજ/યુનિવર્સિટીના વિદ્યાર્થીઓ માટે CSSS",
                    description: "ઓછી આવક ધરાવતા પરિવારોના હોશિયાર વિદ્યાર્થીઓને ઉચ્ચ અભ્યાસ દરમિયાન ખર્ચ પહોંચી વળવા.",
                    eligibility: "ધોરણ 12 માં ટોચના 20 પર્સેન્ટાઇલમાં, વાલીની આવક < ₹4.5 લાખ.",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 450000,
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "પીએમ-કિસાન સન્માન નિધિ",
                    description: "એક આવક સહાય યોજના જે તમામ પાત્ર ખેડૂત પરિવારોને ત્રણ હપ્તામાં પ્રતિ વર્ષ ₹6,000 પૂરા પાડે છે.",
                    eligibility: "બધા જમીન-ધારક ખેડૂત પરિવારો.",
                    link: "https://pmkisan.gov.in/",
                    category: "subsidy",
                    eligibilityCriteria: {
                        occupations: [
                            'Farmer'
                        ]
                    }
                },
                {
                    title: "રાષ્ટ્રીય સામાજિક સહાય કાર્યક્રમ (NSAP)",
                    description: "વૃદ્ધો, વિધવાઓ અને વિકલાંગ વ્યક્તિઓને વૃદ્ધાવસ્થા પેન્શન જેવા વિવિધ ઘટકો હેઠળ નાણાકીય સહાય પૂરી પાડે છે.",
                    eligibility: "યોજનાના ઘટક મુજબ બદલાય છે, સામાન્ય રીતે BPL પરિવારો માટે.",
                    link: "https://nsap.nic.in/",
                    category: "pension",
                    eligibilityCriteria: {
                        minAge: 60
                    }
                },
                {
                    title: "પહેલ (LPG સબસિડી)",
                    description: "LPG રાંધણ ગેસ સિલિન્ડરો પરની સબસિડી સીધા પાત્ર ગ્રાહકોના બેંક ખાતામાં ટ્રાન્સફર કરવામાં આવે છે.",
                    eligibility: "ઘરેલું LPG કનેક્શન ધરાવતા તમામ પરિવારો.",
                    link: "https://dbtbharat.gov.in/scheme/pahal/",
                    category: "subsidy",
                    eligibilityCriteria: {}
                },
                {
                    title: "ઈન્દિરા ગાંધી રાષ્ટ્રીય વૃદ્ધાવસ્થા પેન્શન યોજના",
                    description: "NSAP નો એક ઘટક, જે BPL પરિવારના વૃદ્ધ વ્યક્તિઓને માસિક પેન્શન પૂરું પાડે છે.",
                    eligibility: "ઉંમર 60+ વર્ષ, BPL પરિવારમાંથી.",
                    link: "https://nsap.nic.in/nsap/About_NSAP/ignop_guidelines.pdf",
                    category: "pension",
                    eligibilityCriteria: {
                        minAge: 60
                    }
                },
                {
                    title: "વિકલાંગ વિદ્યાર્થીઓ માટે શિષ્યવૃત્તિ",
                    description: "ઉત્કૃષ્ટતાની નિર્દિષ્ટ સંસ્થાઓમાં સ્નાતક અને અનુસ્નાતક ડિગ્રી મેળવતા વિકલાંગ વિદ્યાર્થીઓ માટે.",
                    eligibility: "40%+ વિકલાંગતા. વાલીની વાર્ષિક આવક મર્યાદા ₹6 લાખ.",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        maxIncome: 600000,
                        requiresDisability: true,
                        occupations: [
                            'Student'
                        ]
                    }
                },
                {
                    title: "આરપીએફ/આરપીએસએફ માટે પ્રધાનમંત્રી શિષ્યવૃત્તિ યોજના",
                    description: "રેલવે સુરક્ષા દળ (આરપીએફ) ના કર્મચારીઓના આશ્રિત બાળકો માટે વ્યાવસાયિક ડિગ્રી શિષ્યવૃત્તિ.",
                    eligibility: "સેવારત/ભૂતપૂર્વ કર્મચારીઓના આશ્રિતો. 12મા/ડિપ્લોમા/સ્નાતકમાં ન્યૂનતમ 60%.",
                    link: "https://scholarships.gov.in/",
                    category: "scholarship",
                    eligibilityCriteria: {
                        occupations: [
                            'Student'
                        ]
                    }
                }
            ]
        },
        mythBusters: {
            title: "માન્યતા તોડો",
            subtitle: "તમારા જ્ઞાનનું પરીક્ષણ કરો! શું તમે ડીબીટીની માન્યતા અને હકીકત વચ્ચેનો તફાવત કહી શકો છો?",
            resultText: "તમે હવે પ્રમાણિત માન્યતા અને હકીકત નિષ્ણાત છો! બીજાઓને મદદ કરવા માટે તમારું જ્ઞાન શેર કરો.",
            myths: [
                {
                    myth: "જો મારું બેંક ખાતું આધાર સાથે જોડાયેલું હોય, તો મને આપમેળે મારી ડીબીટી ભંડોળ મળી જશે.",
                    fact: "આ એક મોટી માન્યતા છે. તમારું ખાતું ડીબીટી માટે આધાર સાથે 'સીડ' થયેલું હોવું જોઈએ. લિંકિંગ ફક્ત કેવાયસી માટે છે."
                },
                {
                    myth: "હું મારા કોઈપણ આધાર-લિંક્ડ બેંક ખાતામાં મારી ડીબીટી ભંડોળ મેળવી શકું છું.",
                    fact: "આ એક માન્યતા છે. તમે ફક્ત તે જ એક બેંક ખાતામાં ડીબીટી ચુકવણીઓ મેળવી શકો છો જે હાલમાં તમારા આધાર સાથે સીડ થયેલ છે."
                },
                {
                    myth: "મારી બેંક પાસે મારા આધાર કાર્ડની ફોટોકોપી છે, તેથી મારું ખાતું સીડ થયેલું છે.",
                    fact: "આ એક માન્યતા છે. તમારે વિશિષ્ટ 'આધાર સીડિંગ સંમતિ ફોર્મ' ભરવું પડશે અને સ્પષ્ટપણે સીડિંગની વિનંતી કરવી પડશે."
                },
                {
                    myth: "જો મારી સીડિંગ નિષ્ફળ જાય, તો તે એનપીસીઆઈ અથવા યુઆઈડીએઆઈ સાથેની સમસ્યા છે.",
                    fact: "આ એક માન્યતા છે. એનપીસીઆઈ મેપરને અપડેટ કરવાની જવાબદારી સંપૂર્ણપણે બેંકોની છે. તમારે તમારી બેંક શાખાનો સંપર્ક કરવો પડશે."
                },
                {
                    myth: "ડીબીટી ફક્ત શિષ્યવૃત્તિ માટે છે.",
                    fact: "આ એક મોટી માન્યતા છે. ડીબીટી ૩૦૦ થી વધુ યોજનાઓ માટે એક પ્લેટફોર્મ છે, જેમાં પેન્શન (એનએસએપી), સબસિડી (પીએમ-કિસાન, પહેલ), અને વેતન ચુકવણી (મનરેગા) શામેલ છે."
                }
            ],
            facts: [
                {
                    fact: "ડીબીટીને સક્ષમ કરવા માટે તમારે તમારી બેંકમાં એક વિશિષ્ટ 'આધાર સીડિંગ સંમતિ ફોર્મ' સબમિટ કરવું આવશ્યક છે.",
                    explanation: "આ એક હકીકત છે. ફક્ત લિંક કરેલું એકાઉન્ટ હોવું પૂરતું નથી; તમારે સીડિંગ માટે સ્પષ્ટ સંમતિ આપવી આવશ્યક છે."
                },
                {
                    fact: "કોઈપણ સમયે ડીબીટી માટે ફક્ત એક જ બેંક ખાતું આધાર-સીડ કરી શકાય છે.",
                    explanation: "આ એક હકીકત છે. જો તમે નવું ખાતું સીડ કરો છો, તો તે આપમેળે પાછલા ખાતાને એનપીસીઆઈ મેપરથી ડિ-લિંક કરે છે."
                },
                {
                    fact: "જો બાયોમેટ્રિક પ્રમાણીકરણ નિષ્ફળ જાય, તો લાભ મેળવવાના વૈકલ્પિક રસ્તાઓ છે.",
                    explanation: "આ એક હકીકત છે. સરકારી માર્ગદર્શિકાઓમાં 'અપવાદ સંભાળવાની પદ્ધતિ' શામેલ છે જેથી ખાતરી કરી શકાય કે તમને લાભ મળે."
                },
                {
                    fact: "જો આધાર અને બેંક ખાતા પર તમારું નામ બરાબર મેળ ખાતું નથી, તો સીડિંગ નિષ્ફળ જશે.",
                    explanation: "આ એક હકીકત છે. સીડિંગ પ્રક્રિયા સફળ થવા માટે તમારું નામ બંને રેકોર્ડમાં સરખું હોવું આવશ્યક છે."
                },
                {
                    fact: "તમે યુઆઈડીએઆઈ અને એનપીસીઆઈ બંને વેબસાઇટ્સ પર તમારી આધાર સીડિંગની સ્થિતિ ચકાસી શકો છો.",
                    explanation: "આ એક હકીકત છે. બંને અધિકૃત પોર્ટલ હાલમાં કયું બેંક ખાતું ડીબીટી માટે સીડ થયેલ છે તે તપાસવાની સુવિધા પૂરી પાડે છે."
                }
            ]
        },
        awareness: {
            title: "ભારતમાં ડીબીટીનો વ્યાપ",
            subtitle: "ડીબીટી ફક્ત શિષ્યવૃત્તિ કરતાં ઘણું વધારે છે. તે 50+ મંત્રાલયોની 300 થી વધુ યોજનાઓ માટે એકીકૃત પ્લેટફોર્મ છે. મુખ્ય શ્રેણીઓનું અન્વેષણ કરો.",
            tableHeaders: {
                scheme: "મુખ્ય યોજનાઓ",
                ministry: "અમલીકરણ મંત્રાલય",
                beneficiaries: "લાભાર્થીઓ"
            },
            categories: [
                {
                    category: "સબસિડી",
                    description: "આવશ્યક ચીજવસ્તુઓનો ખર્ચ ઘટાડવા માટે સીધી નાણાકીય સહાય.",
                    schemes: [
                        {
                            name: "પહેલ (LPG સબસિડી), ખાતર સબસિડી (પાયલોટ), ખાદ્ય સબસિડી (કેટલાક રાજ્યોમાં PDS)",
                            ministry: "પેટ્રોલિયમ મંત્રાલય, રસાયણ અને ખાતર મંત્રાલય, ગ્રાહક બાબતોનું મંત્રાલય",
                            beneficiaries: "LPG વાપરતા પરિવારો, ખેડૂતો, રેશનકાર્ડ ધારકો"
                        }
                    ]
                },
                {
                    category: "આવક સહાય",
                    description: "નાગરિકોની આવકને પૂરક બનાવવા માટે સીધા રોકડ ટ્રાન્સફર.",
                    schemes: [
                        {
                            name: "પીએમ-કિસાન સન્માન નિધિ (ખેડૂતોને ₹6000/વર્ષ), રાજ્ય સ્તરીય ખેડૂત આવક સહાય",
                            ministry: "કૃષિ અને ખેડૂત કલ્યાણ મંત્રાલય",
                            beneficiaries: "નાના અને સીમાંત ખેડૂતો"
                        }
                    ]
                },
                {
                    category: "વેતન ચુકવણી",
                    description: "જાહેર બાંધકામ કાર્યક્રમો માટે વેતનની સીધી ચુકવણી.",
                    schemes: [
                        {
                            name: "મહાત્મા ગાંધી રાષ્ટ્રીય ગ્રામીણ રોજગાર ગેરંટી અધિનિયમ (MGNREGA)",
                            ministry: "ગ્રામીણ વિકાસ મંત્રાલય",
                            beneficiaries: "રોજગાર ઇચ્છતા ગ્રામીણ પરિવારો"
                        }
                    ]
                },
                {
                    category: "સામાજિક સુરક્ષા પેન્શન",
                    description: "નબળા વર્ગના લોકો માટે નિયમિત નાણાકીય સહાય.",
                    schemes: [
                        {
                            name: "રાષ્ટ્રીય સામાજિક સહાય કાર્યક્રમ (NSAP), વૃદ્ધાવસ્થા, વિધવા અને વિકલાંગતા પેન્શન",
                            ministry: "ગ્રામીણ વિકાસ મંત્રાલય, રાજ્ય સમાજ કલ્યાણ વિભાગો",
                            beneficiaries: "વૃદ્ધો, વિધવાઓ, વિકલાંગ વ્યક્તિઓ"
                        }
                    ]
                },
                {
                    category: "આરોગ્ય-સંબંધિત",
                    description: "તબીબી ખર્ચ અને માતૃત્વ સંભાળ માટે નાણાકીય સહાય.",
                    schemes: [
                        {
                            name: "જનની સુરક્ષા યોજના (JSY), આયુષ્માન ભારત ભરપાઈ, PMMVY",
                            ministry: "આરોગ્ય અને પરિવાર કલ્યાણ મંત્રાલય, MoWCD",
                            beneficiaries: "સગર્ભા સ્ત્રીઓ, નવજાત શિશુઓ, ઓછી આવક ધરાવતા દર્દીઓ"
                        }
                    ]
                },
                {
                    category: "શૈક્ષણિક લાભો",
                    description: "વિદ્યાર્થીઓને તેમનું શિક્ષણ ચાલુ રાખવા માટે સહાય.",
                    schemes: [
                        {
                            name: "શિષ્યવૃત્તિ (પ્રી-મેટ્રિક, પોસ્ટ-મેટ્રિક), ફેલોશિપ, મધ્યાહન ભોજન રોકડ ટ્રાન્સફર",
                            ministry: "શિક્ષણ મંત્રાલય, સામાજિક ન્યાય મંત્રાલય, લઘુમતી બાબતોનું મંત્રાલય",
                            beneficiaries: "વિદ્યાર્થીઓ (SC, ST, OBC, લઘુમતીઓ, વગેરે)"
                        }
                    ]
                },
                {
                    category: "આવાસ અને સંપત્તિ સહાય",
                    description: "ઘર બનાવવા અને સંપત્તિ બનાવવા માટે નાણાકીય સહાય.",
                    schemes: [
                        {
                            name: "પ્રધાનમંત્રી આવાસ યોજના (PMAY), ઇન્દિરા આવાસ યોજના (IAY - જૂની)",
                            ministry: "આવાસ અને શહેરી બાબતોનું મંત્રાલય, MoRD",
                            beneficiaries: "ગ્રામીણ અને શહેરી ગરીબ પરિવારો"
                        }
                    ]
                },
                {
                    category: "રાહત અને કટોકટી ટ્રાન્સફર",
                    description: "આપત્તિઓ અથવા કટોકટી દરમિયાન તાત્કાલિક નાણાકીય સહાય.",
                    schemes: [
                        {
                            name: "પીએમ ગરીબ કલ્યાણ યોજના (કોવિડ રાહત), રાજ્ય સ્તરીય આપત્તિ રાહત ભંડોળ",
                            ministry: "નાણા મંત્રાલય, રાજ્ય રાહત વિભાગો",
                            beneficiaries: "ગરીબ પરિવારો, સ્થળાંતર કરનારાઓ, આપત્તિગ્રસ્ત પરિવારો"
                        }
                    ]
                },
                {
                    category: "અન્ય",
                    description: "ચોક્કસ સમુદાયો માટે લક્ષિત કલ્યાણકારી યોજનાઓ.",
                    schemes: [
                        {
                            name: "વિકલાંગો માટે સીધા રોકડ ટ્રાન્સફર, આદિવાસી કલ્યાણ યોજનાઓ, લઘુમતી કલ્યાણ ડીબીટી",
                            ministry: "સામાજિક ન્યાય મંત્રાલય, આદિજાતિ બાબતોનું મંત્રાલય, MoMA",
                            beneficiaries: "વિકલાંગ, આદિવાસીઓ, લઘુમતીઓ"
                        }
                    ]
                }
            ]
        },
        faq: {
            title: "વારંવાર પૂછાતા પ્રશ્નો",
            subtitle: "આધાર સીડિંગ અને ડીબીટી વિશેના સામાન્ય પ્રશ્નોના જવાબો મેળવો.",
            faqs: [
                {
                    question: "આધાર લિંકિંગ અને આધાર સીડિંગ વચ્ચે શું તફાવત છે?",
                    answer: "આધાર લિંકિંગ તમારા આધારને ઓળખ ચકાસણી (KYC) માટે બેંક ખાતા સાથે જોડે છે. આધાર સીડિંગ તમારા આધારને ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (DBT) મેળવવા માટે NPCI સર્વર પર એક જ બેંક ખાતા સાથે મેપ કરવાની એક અલગ, વિશિષ્ટ પ્રક્રિયા છે. શિષ્યવૃત્તિ અને અન્ય યોજનાઓ માટે સીડિંગ ફરજિયાત છે."
                },
                {
                    question: "શું મારી પાસે બહુવિધ આધાર-સીડેડ ખાતા હોઈ શકે છે?",
                    answer: "ના, તમારી પાસે કોઈ પણ સમયે DBT મેળવવા માટે ફક્ત એક જ આધાર-સીડેડ ખાતું હોઈ શકે છે. જો તમે નવું ખાતું સીડ કરો છો, તો પાછલું ખાતું આપમેળે ડી-લિંક થઈ જાય છે. સબસિડી છેલ્લા સફળતાપૂર્વક સીડ થયેલા બેંક ખાતામાં જમા કરવામાં આવશે."
                },
                {
                    question: "મારી ડીબીટી ચુકવણી નિષ્ફળ ગઈ. મારે શું કરવું જોઈએ?",
                    answer: "પ્રથમ, યુઆઈડીએઆઈ પોર્ટલ પર તમારી સીડિંગ સ્થિતિ તપાસો. જો તે નિષ્ક્રિય હોય અથવા ખોટા ખાતા સાથે જોડાયેલ હોય, તો સીડિંગ ફોર્મ સાથે તમારી બેંક શાખાની મુલાકાત લો. એ પણ સુનિશ્ચિત કરો કે તમારું નામ અને અન્ય વિગતો તમારા બેંક અને આધાર રેકોર્ડ્સ વચ્ચે બરાબર મેળ ખાય છે."
                },
                {
                    question: "ડીબીટી ફંડ મેળવવા માટે હું મારું બેંક ખાતું કેવી રીતે બદલી શકું?",
                    answer: "તમારું ડીબીટી-સક્ષમ ખાતું બદલવા માટે, તમારે તે *નવી* બેંકની શાખાની મુલાકાત લેવી આવશ્યક છે જ્યાં તમે ભંડોળ મેળવવા માંગો છો. ત્યાં આધાર સીડિંગ સંમતિ ફોર્મ સબમિટ કરો. તેઓ NPCI મેપરને અપડેટ કરશે, જે જૂના ખાતાને આપમેળે ઓવરરાઇડ કરશે."
                },
                {
                    question: "મારું નામ મારા આધાર કાર્ડ વિરુદ્ધ મારા બેંક ખાતામાં અલગ છે. મારે શું કરવું જોઈએ?",
                    answer: "તમારે તમારા નામને દસ્તાવેજોમાંથી એકમાં સુધારવું પડશે જેથી તે બરાબર મેળ ખાય. તમે તમારા આધારની વિગતો અપડેટ કરવા માટે આધાર નોંધણી કેન્દ્રની મુલાકાત લઈ શકો છો, અથવા તમારા બેંક રેકોર્ડને અપડેટ કરવા માટે તમારી બેંક શાખાની મુલાકાત લઈ શકો છો. સીડિંગ સફળ થવા માટે નામ એકસરખું હોવું આવશ્યક છે."
                },
                {
                    question: "શું આધાર સીડિંગની કોઈ સમયમર્યાદા છે?",
                    answer: "કોઈ સત્તાવાર સમયમર્યાદા નથી, પરંતુ શક્ય તેટલી વહેલી તકે પ્રક્રિયા પૂર્ણ કરવાની ભારપૂર્વક ભલામણ કરવામાં આવે છે. ઘણી યોજનાઓ બિન-સીડ કરેલા ખાતાઓમાં ભંડોળનું વિતરણ કરશે નહીં, તેથી જો તમે વિલંબ કરો તો તમે લાભોથી વંચિત રહી શકો છો."
                },
                {
                    question: "શું મારી પેન્શન કે સબસિડી મેળવવા માટે આધાર ફરજિયાત છે?",
                    answer: "જ્યારે આધાર પસંદગીની અને સૌથી કાર્યક્ષમ પદ્ધતિ છે, ત્યારે સુપ્રીમ કોર્ટે ચુકાદો આપ્યો છે કે ફક્ત આધાર નંબર ન હોવાને કારણે આવશ્યક લાભો નકારી શકાય નહીં. જો તમારી પાસે આધાર નથી, તો તમે યોજના દ્વારા નિર્દિષ્ટ વૈકલ્પિક સરકારી-માન્ય ID નો ઉપયોગ કરી શકો છો."
                },
                {
                    question: "મને કેવી રીતે ખબર પડે કે મારા ખાતામાં ડીબીટી ફંડ આવ્યું છે?",
                    answer: "જો તમે તમારી બેંકમાંથી એસએમએસ એલર્ટ સક્ષમ કર્યું હોય, તો તમને એક સૂચના પ્રાપ્ત થશે. તમે એટીએમ, તમારી બેંકની મોબાઇલ એપ્લિકેશન, ઇન્ટરનેટ બેંકિંગ દ્વારા અથવા બેંક મિત્ર/સંવાદદાતાની મુલાકાત લઈને પણ તમારા ખાતાની બેલેન્સ ચકાસી શકો છો."
                }
            ]
        },
        contact: {
            title: "સંપર્ક અને સંસાધનો",
            subtitle: "અધિકૃત સંપર્ક માહિતી અને ડાઉનલોડ કરી શકાય તેવા બેંક ફોર્મ્સ શોધો.",
            helpline: "નેશનલ સ્કોલરશીપ પોર્ટલ હેલ્પલાઇન: 0120 - 6619540",
            resources: "બેંક આધાર સીડિંગ ફોર્મ્સ",
            bankForms: [
                {
                    name: "સ્ટેટ બેંક ઓફ ઈન્ડિયા (SBI)",
                    description: "SBI ગ્રાહકો માટે આધાર સીડિંગ અરજી ફોર્મ.",
                    link: "https://sbi.co.in/documents/16012/25194947/Aadhaar+Seeding+Process+for+Customers+of+Other+Banks+having+SBI+account.pdf"
                },
                {
                    name: "પંજાબ નેશનલ બેંક (PNB)",
                    description: "PNB ગ્રાહકો માટે આધાર સીડિંગ અરજી ફોર્મ.",
                    link: "https://www.pnbindia.in/downloadprocess.aspx?fid=3532E743-4C98-43B0-A227-22F091054C35"
                },
                {
                    name: "બેંક ઓફ બરોડા (BOB)",
                    description: "BOB ગ્રાહકો માટે આધાર સીડિંગ અરજી ફોર્મ.",
                    link: "https://www.bankofbaroda.in/-/media/project/bob/countrysites/india/personal-banking/accounts/documents/application-for-linking-aadhaar-number.pdf"
                },
                {
                    name: "HDFC બેંક",
                    description: "HDFC ગ્રાહકો માટે આધાર સીડિંગ અરજી ફોર્મ.",
                    link: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c86c"
                },
                {
                    name: "ICICI બેંક",
                    description: "ICICI ગ્રાહકો માટે આધાર સીડિંગ સૂચનાઓ.",
                    link: "https://www.icicibank.com/personal-banking/insta-banking/internet-banking/link-aadhaar-card"
                },
                {
                    name: "Axis બેંક",
                    description: "Axis ગ્રાહકો માટે આધાર સીડિંગ અરજી ફોર્મ.",
                    link: "https://www.axisbank.com/docs/default-source/default-document-library/accounts-and-deposits/application-form-to-link-aadhaar-card-to-savings-account.pdf"
                }
            ]
        },
        about: {
            title: "ડીબીટી મિશન વિશે",
            mandate: {
                title: "ડીબીટી મિશનનો આદેશ",
                subtitle: "ભારતમાં ડાયરેક્ટ બેનિફિટ ટ્રાન્સફરનો સત્તાવાર આદેશ અને ઇતિહાસ.",
                aboutText: [
                    "ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (DBT) યોજના 1 જાન્યુઆરી, 2013 ના રોજ ભારતમાં કલ્યાણકારી વિતરણ પ્રણાલીમાં સુધારો કરવા માટે એક મુખ્ય શાસન સુધારણા તરીકે શરૂ કરવામાં આવી હતી.",
                    "તેનો પ્રાથમિક ધ્યેય સરળ, ઝડપી અને વધુ સચોટ વિતરણ માટે હાલની પ્રક્રિયાઓનું પુનઃ-ઇੰਜિનિયરિંગ કરીને સરકારી સબસિડી અને લાભોના પ્રવાહને સુધારવાનો છે, જ્યારે છેતરપિંડી અને ડુપ્લિકેશન ઘટાડવાનો છે.",
                    "ડીબીટી મિશન, અમલીકરણ માટેની નોડલ સંસ્થા, શરૂઆતમાં આયોજન પંચમાં હતી, 2013 માં ખર્ચ વિભાગમાં સ્થાનાંતરિત થઈ, અને 2015 થી, તેના કામને વધુ ગતિ આપવા માટે કેબિનેટ સચિવાલય હેઠળ કાર્યરત છે.",
                    "ડીબીટી જેએએમ ટ્રિનિટી (જન ધન બેંક ખાતા, આધાર અનન્ય ID, અને મોબાઇલ ફોન) નો લાભ ઉઠાવે છે જેથી લાભાર્થીઓના ખાતામાં સીધા લાભો ટ્રાન્સફર કરવા માટે એક પારદર્શક અને કાર્યક્ષમ પ્લેટફોર્મ પૂરું પાડી શકાય."
                ],
                orgChartTitle: "ડીબીટી મિશન સંસ્થાકીય માળખું"
            },
            institutionalFramework: {
                title: "સંસ્થાકીય માળખું",
                subtitle: "ડીબીટીને શક્ય બનાવતી મુખ્ય સરકારી સંસ્થાઓ.",
                points: [
                    {
                        title: "ડીબીટી મિશન (કેબિનેટ સચિવાલય)",
                        description: "નીતિ, સંકલન અને દેશભરમાં ડીબીટીના અમલીકરણની દેખરેખ માટે જવાબદાર નોડલ એજન્સી."
                    },
                    {
                        title: "નાણા મંત્રાલય (CGA અને PFMS)",
                        description: "નિયંત્રક મહાલેખાકાર (CGA) સાર્વજનિક નાણાકીય વ્યવસ્થાપન પ્રણાલી (PFMS) ચલાવે છે, જે તમામ ડીબીટી ચુકવણીઓ અને સમાધાન માટે મુખ્ય ઇલેક્ટ્રોનિક પ્લેટફોર્મ છે."
                    },
                    {
                        title: "એનપીસીઆઈ (ભારતીય રાષ્ટ્રીય ચુકવણી નિગમ)",
                        description: "આધાર ચુકવણી બ્રિજ (APB) ચલાવે છે, જે આધાર નંબરનો ઉપયોગ કરીને સાચા બેંક ખાતામાં લાભ પહોંચાડતી સિસ્ટમ છે."
                    },
                    {
                        title: "યુઆઈડીએઆઈ (આધાર)",
                        description: "વિશિષ્ટ ઓળખ ચકાસણી (e-KYC) અને પ્રમાણીકરણ સેવાઓ પૂરી પાડે છે જે સમગ્ર ડીબીટી માળખાનો આધાર છે."
                    },
                    {
                        title: "અમલીકરણ મંત્રાલયો અને રાજ્યો",
                        description: "વ્યક્તિગત મંત્રાલયો (દા.ત., મનરેગા માટે ગ્રામੀણ વિકાસ) અને રાજ્ય સરકારો તેમની પોતાની યોજનાઓ અને લાભાર્થી યાદીઓનું સંચાલન કરે છે, જે કેન્દ્રીય ડીબીટી પ્લેટફોર્મ સાથે સંકલિત થાય છે."
                    }
                ]
            },
            ourTeam: {
                title: "ટીમ વિશે",
                subtitle: "SIH 2025 માટે ડીબીટી સહાયક પાછળના વિદ્યાર્થીઓ."
            }
        },
        printKit: {
            title: "છાપવા યોગ્ય જાગૃતિ કિટ",
            subtitle: "શાળાઓ અને સમુદાયોમાં ઑફલાઇન ઝુંબેશ માટે આ સામગ્રી ડાઉનલોડ અને છાપો.",
            poster: {
                title: "શું તમારું બેંક ખાતું તમારી શિષ્યવૃત્તિ માટે તૈયાર છે?",
                subtitle: "એક સામાન્ય ભૂલને તમારા ભંડોળને રોકવા ન દો! ખાતરી કરો કે તમારું ખાતું ડીબીટી-સક્ષમ છે.",
                point1: "તમામ સરકારી શિષ્યવૃત્તિઓ માટે ડીબીટી-સક્ષમ (આધાર સીડેડ) ખાતું ફરજિયાત છે.",
                point2: "ફક્ત તમારા આધારને 'લિંક' કરવું પૂરતું નથી. સીડિંગ એ એક અલગ, નિર્ણાયક પગલું છે.",
                cta: "આજે જ તમારી સ્થિતિ તપાસો!"
            },
            flyer1: {
                title: "ડીબીટી-તૈયાર કેવી રીતે થવું",
                text: "તમારું બેંક ખાતું આધાર સાથે સીડ થયેલ છે અને ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (ડીબીટી) માટે તૈયાર છે તેની ખાતરી કરવા માટે આ પગલાં અનુસરો.",
                stepsTitle: "૪ સરળ પગલાં:",
                steps: [
                    "તમારી બેંકની વેબસાઇટ અથવા અમારા પોર્ટલ પરથી 'આધાર સીડિંગ ફોર્મ' ડાઉનલોડ કરો.",
                    "ફોર્મ સંપૂર્ણપણે ભરો. ભૂલો ટાળવા માટે અમારા એઆઈ ફોર્મ ચેકરનો ઑનલાઇન ઉપયોગ કરો.",
                    "ફોર્મ અને તમારા આધાર કાર્ડની નકલ સાથે તમારી બેંક શાખાની મુલાકાત લો.",
                    "દસ્તાવેજો જમા કરો અને સ્વીકૃતિ સ્લિપ મેળવો."
                ]
            },
            flyer2: {
                title: "ડીબીટી હકીકતો અને માન્યતાઓ",
                text: "શિષ્યવૃત્તિ પ્રક્રિયા વિશેની સામાન્ય ગેરસમજોમાં પડશો નહીં.",
                myths: {
                    title: "સામાન્ય માન્યતાઓ:",
                    list: [
                        "મારું આધાર-લિંક્ડ ખાતું આપમેળે શિષ્યવૃત્તિ મેળવશે.",
                        "હું મારા કોઈપણ ખાતામાં ભંડોળ મેળવી શકું છું.",
                        "આધાર સીડિંગ એક-વખતની પ્રક્રિયા છે અને તેને ક્યારેય તપાસવાની જરૂર નથી."
                    ]
                },
                tip: "પ્રો ટિપ: શિષ્યવૃત્તિની મોસમ પહેલાં હંમેશા અધિકૃત યુઆઈડીએઆઈ વેબસાઇટ પર તમારી સીડિંગ સ્થિતિ તપાસો!"
            },
            instructions: {
                printButton: "પ્રિન્ટિંગ માટે કિટ તૈયાર કરો",
                visitWebsite: "વધુ સાધનો અને માહિતી માટે, મુલાકાત લો:",
                mythLabel: "માન્યતા:",
                footer: "આ કિટ ફક્ત શૈક્ષણિક અને જાગૃતિના હેતુઓ માટે છે. ડીબીટી સહાયક દ્વારા ઉત્પાદિત."
            }
        },
        footer: {
            tagline: "સ્માર્ટ ઇન્ડિયા હેકાથોન ૨૦૨૫ માટે ટીમ કોડ ટેકનિશિયન દ્વારા એક પહેલ.",
            credits: "સામાજિક ન્યાય અને સશક્તિકરણ મંત્રાલયના માર્ગદર્શન હેઠળ।",
            navigation: "નેવિગેશન",
            resources: "સંસાધનો",
            about: "અમારા વિશે",
            learnMore: "વધુ જાણો",
            github: "ગિટહબ",
            telegram: "ટેલિગ્રામ"
        },
        languages: {
            en: "English",
            hi: "हिन्दी",
            gu: "ગુજરાતી"
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-language.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[content]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageContent"][language]
    }["LanguageProvider.useMemo[content]"], [
        language
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[value]": ()=>({
                language,
                setLanguage,
                content
            })
    }["LanguageProvider.useMemo[value]"], [
        language,
        content
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-language.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "lVE39qEZ6c2T+YK1zA390bdyG9Y=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/language-switcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageSwitcher": (()=>LanguageSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-language.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LanguageSwitcher() {
    _s();
    const { language, setLanguage, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const languages = [
        {
            code: 'en',
            name: content.languages.en
        },
        {
            code: 'hi',
            name: content.languages.hi
        },
        {
            code: 'gu',
            name: content.languages.gu
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                            className: "h-[1.2rem] w-[1.2rem]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/language-switcher.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Switch language"
                        }, void 0, false, {
                            fileName: "[project]/src/components/language-switcher.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/language-switcher.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/language-switcher.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setLanguage(lang.code),
                        className: "flex justify-between",
                        children: [
                            lang.name,
                            language === lang.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/language-switcher.tsx",
                                lineNumber: 39,
                                columnNumber: 40
                            }, this)
                        ]
                    }, lang.code, true, {
                        fileName: "[project]/src/components/language-switcher.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/language-switcher.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/language-switcher.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "0xWmbYRknvwA6pWFEgxqgasRM6M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/logo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Logo": (()=>Logo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const Logo = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L2 7l10 5 10-5-10-5z"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 17l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 14.5l3-1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 19.5l4-2"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/logo.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, this);
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/firebase.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "app": (()=>app),
    "auth": (()=>auth),
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
// Your web app's Firebase configuration is read from environment variables
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyBUjfBxveru9rBX_6wyOQvGY5dNeZ3Vx4c"),
    authDomain: ("TURBOPACK compile-time value", "dbt-sahayak-database.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "dbt-sahayak-database"),
    storageBucket: ("TURBOPACK compile-time value", "dbt-sahayak-database.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "36334179231"),
    appId: ("TURBOPACK compile-time value", "1:36334179231:web:5fd14a0515801ec918a3aa"),
    measurementId: ("TURBOPACK compile-time value", "G-QMET9YF77M")
};
// Initialize Firebase only if it hasn't been initialized yet
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])();
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-auth.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export ab as createUserWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export ac as signInWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export D as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export al as updateProfile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as LoaderCircle>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Define the admin email address from environment variables
const ADMIN_EMAIL = ("TURBOPACK compile-time value", "h.raulji2005@gmail.com");
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "AuthProvider.useEffect.unsubscribe": (user)=>{
                    setUser(user);
                    setIsAdmin(!!ADMIN_EMAIL && user?.email === ADMIN_EMAIL);
                    setLoading(false);
                }
            }["AuthProvider.useEffect.unsubscribe"]);
            return ({
                "AuthProvider.useEffect": ()=>unsubscribe()
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    const login = (email, pass)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, pass);
    };
    const signup = async (email, pass, name)=>{
        const userCredential = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, pass);
        if (userCredential.user) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__["updateProfile"])(userCredential.user, {
                displayName: name
            });
            // Manually update the user state as onAuthStateChanged might not be immediate
            setUser({
                ...userCredential.user,
                displayName: name
            });
            setIsAdmin(!!ADMIN_EMAIL && userCredential.user.email === ADMIN_EMAIL);
        }
        return userCredential;
    };
    const logout = ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
    };
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthProvider.useMemo[value]": ()=>({
                user,
                loading,
                isAdmin,
                login,
                signup,
                logout
            })
    }["AuthProvider.useMemo[value]"], [
        user,
        loading,
        isAdmin
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                className: "w-12 h-12 animate-spin text-primary"
            }, void 0, false, {
                fileName: "[project]/src/hooks/use-auth.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/hooks/use-auth.tsx",
            lineNumber: 72,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-auth.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "9ZTnjACcPQrE2VTYxgg32yxAB2c=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": (()=>Avatar),
    "AvatarFallback": (()=>AvatarFallback),
    "AvatarImage": (()=>AvatarImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Avatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = Avatar;
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const AvatarImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = AvatarImage;
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"].displayName;
const AvatarFallback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c5 = AvatarFallback;
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Avatar$React.forwardRef");
__turbopack_context__.k.register(_c1, "Avatar");
__turbopack_context__.k.register(_c2, "AvatarImage$React.forwardRef");
__turbopack_context__.k.register(_c3, "AvatarImage");
__turbopack_context__.k.register(_c4, "AvatarFallback$React.forwardRef");
__turbopack_context__.k.register(_c5, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/theme-switcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeSwitcher": (()=>ThemeSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ThemeSwitcher() {
    _s();
    const { setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/theme-switcher.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        }, void 0, false, {
                            fileName: "[project]/src/components/theme-switcher.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        }, void 0, false, {
                            fileName: "[project]/src/components/theme-switcher.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/theme-switcher.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/theme-switcher.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("light"),
                        children: "Light"
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme-switcher.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("dark"),
                        children: "Dark"
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme-switcher.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: ()=>setTheme("system"),
                        children: "System"
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme-switcher.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/theme-switcher.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/theme-switcher.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ThemeSwitcher, "a3u8LKbpX4CXbd+e8SJ1SuQ9KPw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeSwitcher;
var _c;
__turbopack_context__.k.register(_c, "ThemeSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Header": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$chart$2d$gantt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GanttChartSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-chart-gantt.js [app-client] (ecmascript) <export default as GanttChartSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-check.js [app-client] (ecmascript) <export default as FileCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as Users2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/language-switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-language.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme-switcher.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const { content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isMobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { user, logout, isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const navItems = [
        {
            href: "/#education",
            label: content.header.nav.education,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 39,
                columnNumber: 71
            }, this)
        },
        {
            href: "/#status",
            label: content.header.nav.status,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 40,
                columnNumber: 65
            }, this)
        },
        {
            href: "/#scholarships",
            label: content.header.nav.scholarships,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 41,
                columnNumber: 77
            }, this)
        },
        {
            href: "/#faq",
            label: content.header.nav.faq,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 42,
                columnNumber: 59
            }, this)
        },
        {
            href: "/#contact",
            label: content.header.nav.contact,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 43,
                columnNumber: 67
            }, this)
        }
    ];
    const actionItems = [
        {
            href: "/eligibility-checker",
            label: content.header.nav.eligibilityChecker,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 47,
                columnNumber: 91
            }, this)
        },
        {
            href: "/form-checker",
            label: content.header.nav.formChecker,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__["FileCheck"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 48,
                columnNumber: 77
            }, this)
        },
        {
            href: "/dbt-map",
            label: content.header.nav.dbtMap,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 49,
                columnNumber: 67
            }, this)
        },
        {
            href: "/governance",
            label: content.header.nav.governance,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$chart$2d$gantt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GanttChartSquare$3e$__["GanttChartSquare"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 50,
                columnNumber: 74
            }, this)
        },
        {
            href: "/resources",
            label: content.header.nav.resources,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 51,
                columnNumber: 72
            }, this)
        },
        {
            href: "/about-team",
            label: content.header.nav.aboutTeam,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users2$3e$__["Users2"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 52,
                columnNumber: 73
            }, this)
        },
        {
            href: "/request-drive",
            label: content.header.nav.requestDrive,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 53,
                columnNumber: 79
            }, this)
        },
        {
            href: "/print-kit",
            label: content.header.nav.printKit,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 54,
                columnNumber: 71
            }, this)
        }
    ];
    const handleNavClick = (e, href)=>{
        e.preventDefault();
        setMobileMenuOpen(false);
        if (href.startsWith('/#') && pathname === '/') {
            const targetId = href.substring(href.indexOf('#') + 1);
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            router.push(href);
        }
    };
    const handleLoginClick = ()=>{
        router.push('/login');
    };
    const handleDashboardClick = ()=>{
        router.push('/dashboard');
    };
    const handleLogoutClick = async ()=>{
        await logout();
        router.push('/');
    };
    const getInitials = (name)=>{
        if (!name) return 'U';
        return name.split(' ').map((n)=>n[0]).join('').toUpperCase();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container flex h-16 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "mr-6 flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                            className: "h-8 w-8 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden font-bold sm:inline-block font-headline text-lg",
                            children: content.header.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden items-center gap-4 text-sm lg:flex",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            onClick: (e)=>handleNavClick(e, item.href),
                            className: "font-medium text-foreground/60 transition-colors hover:text-foreground/80",
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 items-center justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "hidden lg:inline-flex font-medium text-foreground/60 transition-colors hover:text-foreground/80",
                                        children: "More"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 112,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                    className: "w-56",
                                    align: "end",
                                    forceMount: true,
                                    children: actionItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            onClick: ()=>router.push(item.href),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    item.icon,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 122,
                                                columnNumber: 23
                                            }, this)
                                        }, item.href, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 121,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 110,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeSwitcher"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "secondary",
                                        className: "relative h-8 w-8 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-8 w-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                children: getInitials(user.displayName)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                    className: "w-56",
                                    align: "end",
                                    forceMount: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                            className: "font-normal",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium leading-none",
                                                        children: user.displayName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs leading-none text-muted-foreground",
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            onClick: handleDashboardClick,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            onClick: ()=>router.push('/admin'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Admin Panel"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            onClick: handleLogoutClick,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Log out"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleLoginClick,
                            variant: "ghost",
                            className: "hidden lg:inline-flex",
                            children: content.header.login
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                            open: isMobileMenuOpen,
                            onOpenChange: setMobileMenuOpen,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                    asChild: true,
                                    className: "lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "icon",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Open menu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                    side: "left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                                        className: "h-6 w-6 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-headline",
                                                        children: content.header.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/header.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex flex-col gap-1",
                                            children: [
                                                !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: ()=>{
                                                                handleLoginClick();
                                                                setMobileMenuOpen(false);
                                                            },
                                                            className: "w-full justify-start mb-2",
                                                            variant: "default",
                                                            size: "lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "mr-2 h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 161
                                                                }, this),
                                                                content.header.login
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-2 text-xs font-semibold text-muted-foreground",
                                                            children: "Homepage Sections"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 19
                                                        }, this),
                                                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: item.href,
                                                                onClick: (e)=>handleNavClick(e, item.href),
                                                                className: "flex items-center gap-3 rounded-md p-3 text-base font-medium hover:bg-muted",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-5",
                                                                        children: item.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    item.label
                                                                ]
                                                            }, item.href, true, {
                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-2 text-xs font-semibold text-muted-foreground",
                                                            children: "Tools & Resources"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/header.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, this),
                                                        actionItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: item.href,
                                                                onClick: (e)=>handleNavClick(e, item.href),
                                                                className: "flex items-center gap-3 rounded-md p-3 text-base font-medium hover:bg-muted",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-5",
                                                                        children: item.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/header.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    item.label
                                                                ]
                                                            }, item.href, true, {
                                                                fileName: "[project]/src/components/layout/header.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/header.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 18
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/header.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(Header, "lnR2ctguHSC2ycgoVz/lwaSVwcc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/national-emblem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NationalEmblemOfIndia": (()=>NationalEmblemOfIndia)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const NationalEmblemOfIndia = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6", className),
        "aria-labelledby": "nationalEmblemTitle",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                id: "nationalEmblemTitle",
                children: "National Emblem of India"
            }, void 0, false, {
                fileName: "[project]/src/components/national-emblem.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L8 5h8l-4-3zM8 6v5l-2 1v-5l2-1zm8 0v5l2 1v-5l-2-1zM4 12h16v-1H4v1zm7 1h2v5h-2v-5zm-4.5 1c-.83 0-1.5.67-1.5 1.5S4.67 17 5.5 17s1.5-.67 1.5-1.5S6.33 14 5.5 14zm13 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 18c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z"
            }, void 0, false, {
                fileName: "[project]/src/components/national-emblem.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }, void 0, false, {
                fileName: "[project]/src/components/national-emblem.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/national-emblem.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, this);
_c = NationalEmblemOfIndia;
var _c;
__turbopack_context__.k.register(_c, "NationalEmblemOfIndia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this);
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this);
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, this));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this));
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 46,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, this));
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollArea$React.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollArea");
__turbopack_context__.k.register(_c2, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-language.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$chart$2d$gantt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GanttChartSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-chart-gantt.js [app-client] (ecmascript) <export default as GanttChartSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as Users2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$national$2d$emblem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/national-emblem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Footer() {
    _s();
    const { content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-muted/50 border-t",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                        className: "h-8 w-8 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold sm:inline-block font-headline text-lg",
                                        children: content.header.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground max-w-sm",
                                children: content.footer.tagline
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$national$2d$emblem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NationalEmblemOfIndia"], {
                                        className: "h-10 w-10 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-muted-foreground",
                                                children: content.footer.credits
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://socialjustice.gov.in",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-xs text-primary hover:underline font-semibold",
                                                children: "Ministry of Social Justice & Empowerment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 33,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/footer.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-foreground",
                                        children: content.footer.navigation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 47,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#education",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 126
                                            }, this),
                                            content.header.nav.education
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 48,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#status",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 49,
                                                columnNumber: 123
                                            }, this),
                                            content.header.nav.status
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 49,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#contact",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 50,
                                                columnNumber: 124
                                            }, this),
                                            content.header.nav.contact
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 50,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-foreground",
                                        children: content.footer.resources
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 53,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dbt-map",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 54,
                                                columnNumber: 123
                                            }, this),
                                            content.header.nav.dbtMap
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 54,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/governance",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$chart$2d$gantt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GanttChartSquare$3e$__["GanttChartSquare"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 126
                                            }, this),
                                            content.header.nav.governance
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 55,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/resources",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 56,
                                                columnNumber: 125
                                            }, this),
                                            content.header.nav.resources
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/print-kit",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 57,
                                                columnNumber: 125
                                            }, this),
                                            content.header.nav.printKit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 57,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/request-drive",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 58,
                                                columnNumber: 129
                                            }, this),
                                            content.header.nav.requestDrive
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 58,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 52,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-foreground",
                                        children: content.footer.about
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 61,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about-team",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users2$3e$__["Users2"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 62,
                                                columnNumber: 126
                                            }, this),
                                            content.header.nav.aboutTeam
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 62,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "link",
                                                    className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2 p-0 h-auto justify-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 157
                                                        }, this),
                                                        content.footer.learnMore
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 24
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                className: "sm:max-w-3xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                className: "font-headline text-2xl",
                                                                children: "Direct Benefit Transfer (DBT) in India"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                lineNumber: 70,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                children: "An overview of India’s landmark governance reform for welfare delivery."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                                        className: "max-h-[70vh] pr-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6 text-sm py-4 text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "Overview"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 78,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "India’s Direct Benefit Transfer (DBT) is a landmark governance reform launched in January 2013 to overhaul welfare delivery. Under DBT, subsidies and welfare benefits are credited directly into beneficiaries’ bank or post office accounts (preferably Aadhaar-linked), bypassing intermediaries. The scheme aims to improve targeting, reduce leakage and fraud, and ensure timely payments to intended recipients. DBT has grown rapidly: by FY2025‑26 it covers hundreds of schemes and hundreds of crore transactions, with an official portal reporting ₹2.89 lakh crore transferred in 278 crore transactions (FY2025‑26) and estimated cumulative gains of ₹4.31 lakh crore from plugging leakages."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 79,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 77,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "1. Definition and Historical Context"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 83,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    className: "text-foreground",
                                                                                    children: "Definition (DBT):"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 84,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                " The Direct Benefit Transfer scheme was introduced on 1 January 2013 as a “major reform initiative” of the Government of India. It leverages modern ICT to re-engineer welfare delivery: benefits (cash or kind) are disbursed directly into beneficiaries’ bank or post office accounts, which are preferably linked to their Aadhaar unique ID."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 84,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    className: "text-foreground",
                                                                                    children: "Origins:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 85,
                                                                                    columnNumber: 40
                                                                                }, this),
                                                                                " DBT was conceived to address chronic inefficiencies and “cumbersome delivery processes” in India’s welfare system. Its pilot began in January 2013 in select districts covering schemes like scholarships and women’s welfare. Early success led to nationwide rollout: by December 2014 DBT was expanded countrywide, and by 2015 the Government mandated use of a unified electronic payment platform (PFMS) for all central disbursements. In this way, DBT was one of the first major initiatives under the later “Digital India” umbrella (launched 2015) and in tandem with financial inclusion drives (e.g. JAM trinity: Jan Dhan, Aadhaar, Mobile)."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 85,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 87,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "2. Objectives and Policy Rationale"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 89,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "The government’s primary objectives in implementing DBT are to enhance efficiency, transparency and targeting in welfare delivery. Key stated goals include:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 90,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "list-disc pl-5 mt-2 space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-foreground",
                                                                                            children: "Curb Leakages and Ghosts:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                                            lineNumber: 92,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " Eliminate duplicate, fake or ghost beneficiaries and cut out intermediaries, thereby stopping leakage and subsidy diversion."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 92,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-foreground",
                                                                                            children: "Accurate Targeting:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                                            lineNumber: 93,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " Ensure that benefits reach only the intended, identified recipients."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 93,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-foreground",
                                                                                            children: "Timely Payments:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                                            lineNumber: 94,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " Reduce bureaucratic delay by automating transfer."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 94,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-foreground",
                                                                                            children: "Minimal Layers:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                                            lineNumber: 95,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " Use electronic, cashless payments to minimize manual layers in the disbursement chain."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 95,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 91,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 88,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "3. Governance and Institutional Framework"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 100,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "Implementing DBT involves multiple institutions across levels of government:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 101,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "list-disc pl-5 mt-2 space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-foreground",
                                                                                            children: "National DBT Mission (Cabinet Secretariat):"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                                            lineNumber: 103,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " The nodal body for policy, guidelines and coordination."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 103,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-foreground",
                                                                                            children: "Finance Ministry – Controller General of Accounts (CGA):"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                                            lineNumber: 104,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " The Public Financial Management System (PFMS), run by the CGA, is the central payments/reconciliation platform for DBT."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 104,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-foreground",
                                                                                            children: "State DBT Cells:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                                            lineNumber: 105,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " States/UTs have set up DBT cells to customize and monitor implementation on the ground."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 105,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-foreground",
                                                                                            children: "National Informatics Centre (NIC):"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                                            lineNumber: 106,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " The DBT Bharat portal (dbtbharat.gov.in) – built by NIC – aggregates scheme-wise data and manages technical integration."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 106,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-foreground",
                                                                                            children: "NPCI – Aadhaar Payment Bridge (APB):"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                                            lineNumber: 107,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " The National Payments Corporation of India (NPCI) operates the APB system, which uses the Aadhaar number to route benefits to the correct bank account."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 107,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-foreground",
                                                                                            children: "Sectoral Ministries and Implementing Agencies:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                                            lineNumber: 108,
                                                                                            columnNumber: 45
                                                                                        }, this),
                                                                                        " Each ministry/department running welfare schemes creates its own IT system to generate lists of beneficiaries."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 108,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 102,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "4. Technical Infrastructure"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    className: "text-foreground",
                                                                                    children: "Aadhaar and Aadhaar Seeding:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 114,
                                                                                    columnNumber: 58
                                                                                }, this),
                                                                                " Aadhaar is the critical enabler of DBT. Seeding (linking an Aadhaar number to a bank account) allows the Aadhaar Payment Bridge (APB) to route funds to the correct account without needing the account number."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 114,
                                                                            columnNumber: 38
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    className: "text-foreground",
                                                                                    children: "Banking System Integration:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 115,
                                                                                    columnNumber: 58
                                                                                }, this),
                                                                                " DBT payments flow through India’s banking infrastructure, primarily using the Public Financial Management System (PFMS) as the central payment gateway."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 38
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    className: "text-foreground",
                                                                                    children: "Data Flows and APIs:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                                    lineNumber: 116,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                " Data flows in DBT follow digital pipelines. Scheme MIS generate Fund Transfer Files, which are validated by PFMS/APB using APIs from UIDAI and RBI before payment is processed."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 116,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "5. Aadhaar Seeding – Process, Challenges, and Impact"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 120,
                                                                            columnNumber: 38
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "The process involves enrolling for Aadhaar, having the bank seed it into its Core Banking System (CBS), and the bank uploading this to NPCI’s APB mapper. Challenges include exclusion errors due to biometric failures or lack of access, and privacy concerns. However, the impact has been the elimination of fake beneficiaries and ease of updating bank accounts for receiving benefits."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 121,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "6. Major DBT-Linked Schemes"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 125,
                                                                            columnNumber: 38
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "Key examples include PAHAL (LPG Subsidy), MGNREGA Wages, PM-KISAN, National Social Assistance Programme (NSAP) Pensions, and various scholarships through the National Scholarship Portal (NSP)."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 126,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "7. Benefits and Achievements of DBT"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 130,
                                                                            columnNumber: 38
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "DBT has plugged leakages (saving ₹4.31 lakh crore), improved efficiency and transparency, driven financial inclusion (over 45 crore Jan Dhan accounts), and empowered citizens. It was also critical for delivering relief during the COVID-19 pandemic."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 131,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "8. Common Misconceptions and Criticisms"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 135,
                                                                            columnNumber: 38
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: 'A major misconception is that Aadhaar is mandatory; it is preferred but not compulsory. Criticisms focus on "last-mile" exclusion issues due to infrastructure gaps or technical barriers, and data privacy concerns, although these are being addressed through legal and technical safeguards.'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 136,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 35
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "9. Statistical Data and Impact Evaluation"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 140,
                                                                            columnNumber: 38
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "As of September 2023, over 104 crore citizens are registered as DBT beneficiaries. Total transfers have exceeded ₹44 lakh crore. Official estimates cite cumulative gains of ₹4.31 lakh crore from eliminating fake beneficiaries. Studies confirm reduced subsidy diversion and high beneficiary satisfaction."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 141,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "10. Legal Framework and Court Rulings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 145,
                                                                            columnNumber: 38
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "The Aadhaar Act, 2016 (Section 7) provides the legal basis for using Aadhaar for subsidies. The Supreme Court (Puttaswamy vs. UoI, 2018) upheld this for welfare schemes but struck down mandatory linking for private services. The court also established privacy as a fundamental right, shaping the ongoing legal landscape for DBT."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 146,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "11. Challenges and Ongoing Issues"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 150,
                                                                            columnNumber: 38
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: 'Persistent challenges include infrastructure gaps in remote areas, data quality issues in beneficiary databases, "last-mile" exclusion hurdles for marginalized groups, and the need for better integration between different scheme portals.'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 151,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-lg text-primary mb-2",
                                                                            children: "12. Recommendations and Future Roadmap"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 155,
                                                                            columnNumber: 38
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: 'The future roadmap, often called "DBT 2.0," focuses on real-time digital eligibility verification, consolidating multiple subsidies into single cash transfers, strengthening last-mile delivery with more robust technology and grievance redressal, and expanding DBT principles to new sectors like health and climate resilience.'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/footer.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 68,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/harshrajsinhraulji/DBT-Sahayak",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 163,
                                                columnNumber: 205
                                            }, this),
                                            content.footer.github
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 163,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://t.me/DBTsahayakbot",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-muted-foreground hover:text-primary text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 164,
                                                columnNumber: 182
                                            }, this),
                                            content.footer.telegram
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 164,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 60,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/footer.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/footer.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/footer.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/footer.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Footer, "asfZo8+jXyAozttdiZTZcQh4xD8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-toast.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "reducer": (()=>reducer),
    "toast": (()=>toast),
    "useToast": (()=>useToast)
});
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(memoryState);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/toast.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toast": (()=>Toast),
    "ToastAction": (()=>ToastAction),
    "ToastClose": (()=>ToastClose),
    "ToastDescription": (()=>ToastDescription),
    "ToastProvider": (()=>ToastProvider),
    "ToastTitle": (()=>ToastTitle),
    "ToastViewport": (()=>ToastViewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this));
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, this));
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, this));
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, this));
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, this));
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ToastViewport$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToastViewport");
__turbopack_context__.k.register(_c2, "Toast$React.forwardRef");
__turbopack_context__.k.register(_c3, "Toast");
__turbopack_context__.k.register(_c4, "ToastAction$React.forwardRef");
__turbopack_context__.k.register(_c5, "ToastAction");
__turbopack_context__.k.register(_c6, "ToastClose$React.forwardRef");
__turbopack_context__.k.register(_c7, "ToastClose");
__turbopack_context__.k.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_context__.k.register(_c9, "ToastTitle");
__turbopack_context__.k.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_context__.k.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/toaster.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/chatbot-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "chatbotData": (()=>chatbotData)
});
const chatbotData = {
    en: {
        start: {
            id: 'start',
            text: "Hello! I am Aadhaar Dost, your assistant. How can I help you today?",
            options: [
                {
                    text: "About DBT & Aadhaar Seeding",
                    nextNodeId: 'about_dbt'
                },
                {
                    text: "How to check my status?",
                    nextNodeId: 'check_status'
                },
                {
                    text: "Common problems",
                    nextNodeId: 'common_problems'
                },
                {
                    text: "About Scholarships",
                    nextNodeId: 'scholarships'
                }
            ]
        },
        about_dbt: {
            id: 'about_dbt',
            text: "DBT means Direct Benefit Transfer. For scholarships, your bank account must be 'Aadhaar Seeded' to receive funds, which is different from just being 'Aadhaar Linked'.",
            options: [
                {
                    text: "What's the difference?",
                    nextNodeId: 'difference'
                },
                {
                    text: "Why is seeding necessary?",
                    nextNodeId: 'why_seeding'
                },
                {
                    text: "Go back",
                    nextNodeId: 'start'
                }
            ]
        },
        difference: {
            id: 'difference',
            text: "Aadhaar 'Linking' is for ID verification at your bank. Aadhaar 'Seeding' connects your account to the NPCI database, making it DBT-enabled. This is mandatory for receiving scholarship funds.",
            isEnd: true
        },
        why_seeding: {
            id: 'why_seeding',
            text: "Seeding ensures that government benefits are transferred directly and securely to your designated bank account, reducing fraud and delays.",
            isEnd: true
        },
        check_status: {
            id: 'check_status',
            text: "You can check your Aadhaar seeding status on the official UIDAI portal. Visit 'My Aadhaar' > 'Check Aadhaar/Bank Seeding Status'. The link is in our 'Check Status' section.",
            isEnd: true
        },
        common_problems: {
            id: 'common_problems',
            text: "What problem are you facing?",
            options: [
                {
                    text: "My scholarship failed",
                    nextNodeId: 'scholarship_failed'
                },
                {
                    text: "My status is inactive",
                    nextNodeId: 'status_inactive'
                },
                {
                    text: "Name mismatch issue",
                    nextNodeId: 'name_mismatch'
                },
                {
                    text: "Go back",
                    nextNodeId: 'start'
                }
            ]
        },
        scholarship_failed: {
            id: 'scholarship_failed',
            text: "The most common reason is that your account is not Aadhaar-seeded for DBT. Please check your status on the UIDAI portal first.",
            isEnd: true
        },
        status_inactive: {
            id: 'status_inactive',
            text: "If your status is inactive, you must visit your bank branch. Download the 'Aadhaar Seeding Form' from our contact section, fill it, and submit it with a copy of your Aadhaar card.",
            isEnd: true
        },
        name_mismatch: {
            id: 'name_mismatch',
            text: "If your name in the bank account does not exactly match your name on the Aadhaar card, the seeding process can fail. You will need to get it corrected at either the bank or an Aadhaar enrollment center.",
            isEnd: true
        },
        scholarships: {
            id: 'scholarships',
            text: "A DBT-enabled account is required for all national scholarships. You can find a list of available scholarships on the 'Scholarships' section of our website. Do you have a question about a specific one?",
            options: [
                {
                    text: "Pre-Matric for SC",
                    nextNodeId: 'scholarship_info'
                },
                {
                    text: "Post-Matric for SC",
                    nextNodeId: 'scholarship_info'
                },
                {
                    text: "Means-cum-Merit",
                    nextNodeId: 'scholarship_info'
                },
                {
                    text: "No, thanks",
                    nextNodeId: 'end_ok'
                }
            ]
        },
        scholarship_info: {
            id: 'scholarship_info',
            text: "For detailed eligibility and application links for all scholarships, please visit the 'Scholarships' section on our main page. It has all the official information.",
            isEnd: true
        },
        end_ok: {
            id: 'end_ok',
            text: 'Alright. If you have more questions, feel free to ask!',
            isEnd: true
        },
        end_contact: {
            id: 'end_contact',
            text: "If your issue is not resolved, please use the resources in our 'Contact' section or reach out to the official helpline.",
            isContact: true
        }
    },
    hi: {
        start: {
            id: 'start',
            text: "नमस्ते! मैं आधार दोस्त हूँ, आपका सहायक। मैं आज आपकी कैसे मदद कर सकता हूँ?",
            options: [
                {
                    text: "डीबीटी और आधार सीडिंग के बारे में",
                    nextNodeId: 'about_dbt'
                },
                {
                    text: "मैं अपनी स्थिति कैसे जांचूं?",
                    nextNodeId: 'check_status'
                },
                {
                    text: "आम समस्याएं",
                    nextNodeId: 'common_problems'
                },
                {
                    text: "छात्रवृत्ति के बारे में",
                    nextNodeId: 'scholarships'
                }
            ]
        },
        about_dbt: {
            id: 'about_dbt',
            text: "डीबीटी का मतलब है डायरेक्ट बेनिफिट ट्रांसफर। छात्रवृत्ति के लिए, धन प्राप्त करने के लिए आपका बैंक खाता 'आधार सीडेड' होना चाहिए, जो केवल 'आधार लिंक्ड' होने से अलग है।",
            options: [
                {
                    text: "क्या अंतर है?",
                    nextNodeId: 'difference'
                },
                {
                    text: "सीडिंग क्यों जरूरी है?",
                    nextNodeId: 'why_seeding'
                },
                {
                    text: "वापस जाओ",
                    nextNodeId: 'start'
                }
            ]
        },
        difference: {
            id: 'difference',
            text: "आधार 'लिंकिंग' आपके बैंक में आईडी सत्यापन के लिए है। आधार 'सीडिंग' आपके खाते को एनपीसीआई डेटाबेस से जोड़ता है, जिससे यह डीबीटी-सक्षम हो जाता है। छात्रवृत्ति निधि प्राप्त करने के लिए यह अनिवार्य है।",
            isEnd: true
        },
        why_seeding: {
            id: 'why_seeding',
            text: "सीडिंग यह सुनिश्चित करता है कि सरकारी लाभ धोखाधड़ी और देरी को कम करते हुए सीधे और सुरक्षित रूप से आपके निर्दिष्ट बैंक खाते में स्थानांतरित हो जाएं।",
            isEnd: true
        },
        check_status: {
            id: 'check_status',
            text: "आप अपनी आधार सीडिंग स्थिति आधिकारिक यूआईडीएआई पोर्टल पर देख सकते हैं। 'माई आधार' > 'आधार/बैंक सीडिंग स्थिति जांचें' पर जाएं। लिंक हमारे 'स्थिति जांचें' अनुभाग में है।",
            isEnd: true
        },
        common_problems: {
            id: 'common_problems',
            text: "आप किस समस्या का सामना कर रहे हैं?",
            options: [
                {
                    text: "मेरी छात्रवृत्ति विफल रही",
                    nextNodeId: 'scholarship_failed'
                },
                {
                    text: "मेरी स्थिति निष्क्रिय है",
                    nextNodeId: 'status_inactive'
                },
                {
                    text: "नाम मेल नहीं खा रहा",
                    nextNodeId: 'name_mismatch'
                },
                {
                    text: "वापस जाओ",
                    nextNodeId: 'start'
                }
            ]
        },
        scholarship_failed: {
            id: 'scholarship_failed',
            text: "सबसे आम कारण यह है कि आपका खाता डीबीटी के लिए आधार-सीड नहीं है। कृपया पहले यूआईडीएआई पोर्टल पर अपनी स्थिति जांचें।",
            isEnd: true
        },
        status_inactive: {
            id: 'status_inactive',
            text: "यदि आपकी स्थिति निष्क्रिय है, तो आपको अपनी बैंक शाखा में जाना होगा। हमारे संपर्क अनुभाग से 'आधार सीडिंग फॉर्म' डाउनलोड करें, इसे भरें, और इसे अपने आधार कार्ड की एक प्रति के साथ जमा करें।",
            isEnd: true
        },
        name_mismatch: {
            id: 'name_mismatch',
            text: "यदि बैंक खाते में आपका नाम आपके आधार कार्ड पर दिए गए नाम से बिल्कुल मेल नहीं खाता है, तो सीडिंग प्रक्रिया विफल हो सकती है। आपको इसे बैंक या आधार नामांकन केंद्र पर ठीक करवाना होगा।",
            isEnd: true
        },
        scholarships: {
            id: 'scholarships',
            text: "सभी राष्ट्रीय छात्रवृत्तियों के लिए एक डीबीटी-सक्षम खाता आवश्यक है। आप हमारी वेबसाइट के 'छात्रवृत्ति' अनुभाग पर उपलब्ध छात्रवृत्तियों की सूची पा सकते हैं। क्या आपका किसी विशेष के बारे में कोई प्रश्न है?",
            options: [
                {
                    text: "एससी के लिए प्री-मैट्रिक",
                    nextNodeId: 'scholarship_info'
                },
                {
                    text: "एससी के लिए पोस्ट-मैट्रिक",
                    nextNodeId: 'scholarship_info'
                },
                {
                    text: "मीन्स-कम-मेरिट",
                    nextNodeId: 'scholarship_info'
                },
                {
                    text: "नहीं, धन्यवाद",
                    nextNodeId: 'end_ok'
                }
            ]
        },
        scholarship_info: {
            id: 'scholarship_info',
            text: "सभी छात्रवृत्तियों के लिए विस्तृत पात्रता और आवेदन लिंक के लिए, कृपया हमारे मुख्य पृष्ठ पर 'छात्रवृत्ति' अनुभाग पर जाएँ। इसमें सभी आधिकारिक जानकारी है।",
            isEnd: true
        },
        end_ok: {
            id: 'end_ok',
            text: 'ठीक है। यदि आपके और कोई प्रश्न हैं, तो बेझिझक पूछें!',
            isEnd: true
        },
        end_contact: {
            id: 'end_contact',
            text: "यदि आपकी समस्या का समाधान नहीं होता है, तो कृपया हमारे 'संपर्क' अनुभाग में संसाधनों का उपयोग करें या आधिकारिक हेल्पलाइन पर संपर्क करें।",
            isContact: true
        }
    },
    gu: {
        start: {
            id: 'start',
            text: "નમસ્તે! હું આધાર દોસ્ત છું, તમારો સહાયક। હું આજે તમારી કેવી રીતે મદદ કરી શકું?",
            options: [
                {
                    text: "ડીબીટી અને આધાર સીડિંગ વિશે",
                    nextNodeId: 'about_dbt'
                },
                {
                    text: "હું મારી સ્થિતિ કેવી રીતે તપાસું?",
                    nextNodeId: 'check_status'
                },
                {
                    text: "સામાન્ય સમસ્યાઓ",
                    nextNodeId: 'common_problems'
                },
                {
                    text: "શિષ્યવૃત્તિ વિશે",
                    nextNodeId: 'scholarships'
                }
            ]
        },
        about_dbt: {
            id: 'about_dbt',
            text: "ડીબીટી એટલે ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર. શિષ્યવૃત્તિ માટે, ભંડોળ મેળવવા માટે તમારું બેંક ખાતું 'આધાર સીડેડ' હોવું આવશ્યક છે, જે ફક્ત 'આધાર લિંક્ડ' હોવાથી અલગ છે.",
            options: [
                {
                    text: "શું તફાવત છે?",
                    nextNodeId: 'difference'
                },
                {
                    text: "સીડિંગ શા માટે જરૂરી છે?",
                    nextNodeId: 'why_seeding'
                },
                {
                    text: "પાછા જાઓ",
                    nextNodeId: 'start'
                }
            ]
        },
        difference: {
            id: 'difference',
            text: "આધાર 'લિંકિંગ' તમારી બેંકમાં ID ચકાસણી માટે છે। આધાર 'સીડિંગ' તમારા ખાતાને NPCI ડેટાબેઝ સાથે જોડે છે, તેને DBT-સક્ષમ બનાવે છે। શિષ્યવૃત્તિ ભંડોળ મેળવવા માટે આ ફરજિયાત છે.",
            isEnd: true
        },
        why_seeding: {
            id: 'why_seeding',
            text: "સીડિંગ એ સુનિશ્ચિત કરે છે કે સરકારી લાભો છેતરપિંડી અને વિલંબને ઘટાડીને સીધા અને સુરક્ષિત રીતે તમારા નિયુક્ત બેંક ખાતામાં ટ્રાન્સફર થાય છે.",
            isEnd: true
        },
        check_status: {
            id: 'check_status',
            text: "તમે તમારી આધાર સીડિંગની સ્થિતિ અધિકૃત UIDAI પોર્ટલ પર ચકાસી શકો છો. 'માય આધાર' > 'આધાર/બેંક સીડિંગ સ્થિતિ તપાસો' પર જાઓ। લિંક અમારા 'સ્થિતિ તપાસો' વિભાગમાં છે.",
            isEnd: true
        },
        common_problems: {
            id: 'common_problems',
            text: "તમે કઈ સમસ્યાનો સામનો કરી રહ્યા છો?",
            options: [
                {
                    text: "મારી શિષ્યવૃત્તિ નિષ્ફળ ગઈ",
                    nextNodeId: 'scholarship_failed'
                },
                {
                    text: "મારી સ્થિતિ નિષ્ક્રિય છે",
                    nextNodeId: 'status_inactive'
                },
                {
                    text: "નામમાં મેળ નથી",
                    nextNodeId: 'name_mismatch'
                },
                {
                    text: "પાછા જાઓ",
                    nextNodeId: 'start'
                }
            ]
        },
        scholarship_failed: {
            id: 'scholarship_failed',
            text: "સૌથી સામાન્ય કારણ એ છે કે તમારું ખાતું ડીબીટી માટે આધાર-સીડ કરેલું નથી। કૃપા કરીને પહેલા યુઆઈડીએઆઈ પોર્ટલ પર તમારી સ્થિતિ તપાસો.",
            isEnd: true
        },
        status_inactive: {
            id: 'status_inactive',
            text: "જો તમારી સ્થિતિ નિષ્ક્રિય છે, તો તમારે તમારી બેંક શાખાની મુલાકાત લેવી આવશ્યક છે. અમારા સંપર્ક વિભાગમાંથી 'આધાર સીડિંગ ફોર્મ' ડાઉનલોડ કરો, તેને ભરો, અને તેને તમારા આધાર કાર્ડની નકલ સાથે સબમિટ કરો.",
            isEnd: true
        },
        name_mismatch: {
            id: 'name_mismatch',
            text: "જો બેંક ખાતામાં તમારું નામ તમારા આધાર કાર્ડ પરના નામ સાથે બરાબર મેળ ખાતું નથી, તો સીડિંગ પ્રક્રિયા નિષ્ફળ થઈ શકે છે. તમારે તેને બેંક અથવા આધાર નોંધણી કેન્દ્ર પર સુધારવાની જરૂર પડશે.",
            isEnd: true
        },
        scholarships: {
            id: 'scholarships',
            text: "તમામ રાષ્ટ્રીય શિષ્યવૃત્તિઓ માટે ડીબીટી-સક્ષમ ખાતું જરૂરી છે। તમે અમારી વેબસાઇટના 'શિષ્યવૃત્તિ' વિભાગ પર ઉપલબ્ધ શિષ્યવૃત્તિઓની સૂચિ શોધી શકો છો। શું તમારી પાસે કોઈ ચોક્કસ વિશે પ્રશ્ન છે?",
            options: [
                {
                    text: "SC માટે પ્રી-મેટ્રિક",
                    nextNodeId: 'scholarship_info'
                },
                {
                    text: "SC માટે પોસ્ટ-મેટ્રિક",
                    nextNodeId: 'scholarship_info'
                },
                {
                    text: "મીન્સ-કમ-મેરિટ",
                    nextNodeId: 'scholarship_info'
                },
                {
                    text: "ના, આભાર",
                    nextNodeId: 'end_ok'
                }
            ]
        },
        scholarship_info: {
            id: 'scholarship_info',
            text: "તમામ શિષ્યવૃત્તિઓ માટે વિગતવાર યોગ્યતા અને અરજી લિંક્સ માટે, કૃપા કરીને અમારા મુખ્ય પૃષ્ઠ પર 'શિષ્યવૃત્તિ' વિભાગની મુલાકાત લો. તેમાં તમામ સત્તાવાર માહિતી છે.",
            isEnd: true
        },
        end_ok: {
            id: 'end_ok',
            text: 'ભલે। જો તમને વધુ પ્રશ્નો હોય, તો પૂછવા માટે નિઃસંકોચ રહો!',
            isEnd: true
        },
        end_contact: {
            id: 'end_contact',
            text: "જો તમારી સમસ્યા હલ ન થાય, તો કૃપા કરીને અમારા 'સંપર્ક' વિભાગમાં સંસાધનોનો ઉપયોગ કરો અથવા સત્તાવાર હેલ્પલાઇનનો સંપર્ક કરો.",
            isContact: true
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/chatbot.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Chatbot": (()=>Chatbot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-language.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatbot$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chatbot-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Chatbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentNodeId, setCurrentNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("start");
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const scrollAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        setTimeout(()=>{
            if (scrollAreaRef.current) {
                const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
                if (viewport) {
                    viewport.scrollTop = viewport.scrollHeight;
                }
            }
        }, 100);
    };
    const resetChat = ()=>{
        const chatTree = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatbot$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotData"][language];
        const startNode = chatTree.start;
        setMessages([
            {
                role: "model",
                text: startNode.text,
                options: startNode.options
            }
        ]);
        setCurrentNodeId("start");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            if (isOpen) {
                resetChat();
            }
        }
    }["Chatbot.useEffect"], [
        isOpen
    ]);
    // Reset chat when language changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            resetChat();
        }
    }["Chatbot.useEffect"], [
        language
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            scrollToBottom();
        }
    }["Chatbot.useEffect"], [
        messages
    ]);
    const handleOptionClick = (nextNodeId, optionText)=>{
        // Add user's choice to messages
        setMessages((prev)=>[
                ...prev,
                {
                    role: "user",
                    text: optionText
                }
            ]);
        // Find the next node in the chat tree
        const chatTree = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chatbot$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotData"][language];
        const nextNode = chatTree[nextNodeId];
        if (nextNode) {
            setTimeout(()=>{
                setMessages((prev)=>[
                        ...prev,
                        {
                            role: "model",
                            text: nextNode.text,
                            options: nextNode.options
                        }
                    ]);
                setCurrentNodeId(nextNodeId);
                // If the next node is an end node without options, offer to restart
                if (nextNode.isEnd && !nextNode.options) {
                    setTimeout(()=>{
                        const finalNode = chatTree['end_contact'];
                        setMessages((prev)=>[
                                ...prev,
                                {
                                    role: "model",
                                    text: finalNode.text,
                                    options: [
                                        {
                                            text: "Start Over",
                                            nextNodeId: 'start'
                                        }
                                    ]
                                }
                            ]);
                    }, 1500);
                }
            }, 500);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>setIsOpen(!isOpen),
                    size: "lg",
                    className: "rounded-full w-16 h-16 shadow-lg flex items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Toggle Chatbot"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chatbot.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-8 w-8 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chatbot.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
                            className: "h-8 w-8 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chatbot.tsx",
                            lineNumber: 91,
                            columnNumber: 60
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chatbot.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chatbot.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-24 right-6 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "w-80 h-[500px] flex flex-col shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            className: "flex flex-row items-center justify-between border-b",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chatbot.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg font-headline",
                                        children: "Aadhaar Dost"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chatbot.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chatbot.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chatbot.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "flex-1 p-0 overflow-y-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                className: "h-full",
                                ref: scrollAreaRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-start gap-2.5 ${message.role === 'user' ? 'justify-end' : ''}`,
                                                        children: [
                                                            message.role === 'model' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                                                className: "h-5 w-5 text-primary flex-shrink-0 mt-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chatbot.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 56
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `rounded-lg px-3 py-2 text-sm max-w-[80%] break-words ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`,
                                                                children: message.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chatbot.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 29
                                                            }, this),
                                                            message.role === 'user' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                className: "h-5 w-5 text-muted-foreground flex-shrink-0 mt-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chatbot.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 55
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/chatbot.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 25
                                                    }, this),
                                                    message.role === 'model' && message.options && messages.length - 1 === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-start gap-2 pt-2 pl-8",
                                                        children: message.options.map((option, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "outline",
                                                                size: "sm",
                                                                className: "text-xs h-auto py-1",
                                                                onClick: ()=>option.nextNodeId === 'start' ? resetChat() : handleOptionClick(option.nextNodeId, option.text),
                                                                children: option.text
                                                            }, i, false, {
                                                                fileName: "[project]/src/components/chatbot.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chatbot.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/components/chatbot.tsx",
                                                lineNumber: 109,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chatbot.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chatbot.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/chatbot.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chatbot.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                            className: "border-t p-2 text-center text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "This is a rule-based assistant. For complex queries, please check our ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#faq",
                                        className: "underline",
                                        onClick: ()=>setIsOpen(false),
                                        children: "FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chatbot.tsx",
                                        lineNumber: 145,
                                        columnNumber: 90
                                    }, this),
                                    " or ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#contact",
                                        className: "underline",
                                        onClick: ()=>setIsOpen(false),
                                        children: "contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chatbot.tsx",
                                        lineNumber: 145,
                                        columnNumber: 178
                                    }, this),
                                    " section."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chatbot.tsx",
                                lineNumber: 145,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chatbot.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chatbot.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chatbot.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Chatbot, "H1wblwmtTiJabdees0PYjS5bPXo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Chatbot;
var _c;
__turbopack_context__.k.register(_c, "Chatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-theme.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>ThemeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-theme.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_bf991810._.js.map