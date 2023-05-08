import { Box } from "@mui/material";
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { IBRChartProps } from "./BRChart.types";

ChartJS.register(
    CategoryScale,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
);

export const BRChart: React.FC<IBRChartProps> = ({ options, data }) => {
    return (
        <Box sx={{ backgroundColor: "#ffffff" }}>
            <Line options={options} data={data} />
        </Box>
    );
};
