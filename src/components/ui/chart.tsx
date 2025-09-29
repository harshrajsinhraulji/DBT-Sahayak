
"use client"

import * as React from "react"
import {
  Bar,
  BarChart as BarChartPrimitive,
  CartesianGrid,
  LabelList,
  Line,
  LineChart as LineChartPrimitive,
  Pie,
  PieChart as PieChartPrimitive,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RadarChartPrimitive,
  RadialBar,
  RadialBarChart as RadialBarChartPrimitive,
  Rectangle,
  ReferenceLine,
  Sector,
  XAxis,
  YAxis,
  type BarChartProps,
  type LabelProps,
  type PieChartProps,
  type PieProps,
  type RadarChartProps,
  type RadialBarChartProps,
  type SectorProps,
} from "recharts"

import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const BAR_CHART_PROPS: BarChartProps = {
  margin: {
    top: 24,
    right: 12,
    bottom: 12,
  },
  barGap: 8,
  barCategoryGap: "10%",
}

const LINE_CHART_PROPS = {
  margin: {
    top: 24,
    right: 24,
    bottom: 12,
  },
} satisfies BarChartProps

const RADAR_CHART_PROPS = {
  margin: {
    top: 24,
    right: 24,
    bottom: 12,
  },
} satisfies RadarChartProps

const RADIAL_CHART_PROPS = {
  margin: {
    top: 24,
    right: 24,
    bottom: 12,
    left: 24,
  },
} satisfies RadialBarChartProps

const PIE_CHART_PROPS = {
  margin: {
    top: 0,
    right: 4,
    bottom: 0,
    left: 4,
  },
} satisfies PieChartProps

const PieChart = React.forwardRef<
  HTMLDivElement,
  PieChartProps & {
    showGrid?: boolean
    showTooltip?: boolean
  }
>(({ className, ...props }, ref) => {
  return (
    <ChartContainer
      ref={ref}
      config={{}}
      className={cn("h-auto w-full", className)}
      {...props}
    />
  )
})
PieChart.displayName = "PieChart"

const RadarChart = React.forwardRef<
  HTMLDivElement,
  RadarChartProps & {
    showGrid?: boolean
    showTooltip?: boolean
  }
>(({ className, ...props }, ref) => {
  return (
    <ChartContainer
      ref={ref}
      config={{}}
      className={cn("h-auto w-full", className)}
      {...props}
    />
  )
})
RadarChart.displayName = "RadarChart"

const RadialChart = React.forwardRef<
  HTMLDivElement,
  RadialBarChartProps & {
    showGrid?: boolean
    showTooltip?: boolean
  }
>(({ className, ...props }, ref) => {
  return (
    <ChartContainer
      ref={ref}
      config={{}}
      className={cn("h-auto w-full", className)}
      {...props}
    />
  )
})
RadialChart.displayName = "RadialChart"

const LineChart = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof LineChartPrimitive> & {
    showGrid?: boolean
    showXAxis?: boolean
    showYAxis?: boolean
    showTooltip?: boolean
  }
>(({ className, ...props }, ref) => {
  return (
    <ChartContainer
      ref={ref}
      config={{}}
      className={cn("h-auto w-full", className)}
      {...props}
    />
  )
})
LineChart.displayName = "LineChart"

const BarChart = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof BarChartPrimitive> & {
    config: ChartConfig
    showGrid?: boolean
    showXAxis?: boolean
    showYAxis?: boolean
    showTooltip?: boolean
    showLegend?: boolean
  }
>(({ className, ...props }, ref) => {
  return (
    <ChartContainer
      ref={ref}
      className={cn("h-auto w-full", className)}
      {...props}
    />
  )
})
BarChart.displayName = "BarChart"

export {
  Bar,
  BarChart,
  BarChartPrimitive,
  BAR_CHART_PROPS,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  LINE_CHART_PROPS,
  LineChartPrimitive,
  Pie,
  PieChart,
  PieChartPrimitive,
  PIE_CHART_PROPS,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RADAR_CHART_PROPS,
  RadarChartPrimitive,
  RadialBar,
  RadialBarChartPrimitive,
  RadialChart,
  RADIAL_CHART_PROPS,
  Rectangle,
  ReferenceLine,
  Sector,
  XAxis,
  YAxis,
}
export type { LabelProps, PieProps, SectorProps }
