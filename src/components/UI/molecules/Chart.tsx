/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  title: string;
  data: any;
  options: any;
}

const Chart: React.FC<ChartProps> = ({ title, data, options }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "0 auto",
        width: "100%",
        height: "100%",
        padding: 2,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default Chart;
