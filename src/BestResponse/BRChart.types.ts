import { ChartData, ChartOptions, DefaultDataPoint } from "chart.js";

export interface IBRChartProps {
    data: ChartData<"line", DefaultDataPoint<"line">, unknown>;
    options: ChartOptions<"line">;
}

export const options = {
    responsive: true,
    animation: {
        duration: 0,
    },
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Expected payoff of the shooter",
        },
    },
    scales: {
        y1: {
            display: true,
            max: 10,
            min: 1,
            position: "left" as const,
            type: "linear" as const,
        },
        y2: {
            display: true,
            max: 10,
            min: 1,
            position: "right" as const,
            type: "linear" as const,
            // grid line settings
            grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
        },
    },
};

export const labels = ["0", "1"];
