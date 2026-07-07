"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

interface MonthlyContribution {
    month: string;
    contributions: number;
}

const chartConfig = {
    contributions: {
        label: "Contributions",
        color: "var(--accent)",
    },
} satisfies ChartConfig;

export function ContributionsChart({ data }: { data: MonthlyContribution[] }) {
    return (
        <ChartContainer config={chartConfig} className="w-full h-[280px] mt-4">
            <BarChart data={data}>
                <CartesianGrid vertical={false} stroke="var(--border)" />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                    dataKey="contributions"
                    fill="var(--color-contributions)"
                    radius={4}
                />
            </BarChart>
        </ChartContainer>
    );
}