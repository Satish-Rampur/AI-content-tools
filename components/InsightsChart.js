import { useState, useEffect } from "react";
import { Chart } from "react-chartjs-2";

const InsightsChart = ({ insights }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!insights) return;
    // Assuming insights is an array of objects with { label: string, value: number }
    const chartData = {
      labels: insights.map((insight) => insight.label),
      datasets: [
        {
          label: "Insights",
          data: insights.map((insight) => insight.value),
          backgroundColor: ["red", "blue", "green", "orange", "purple"], // Customize colors
        },
      ],
    };
    setChartData(chartData);
  }, [insights]);

  return (
    <div>
      <h2>Insights</h2>
      {chartData && <Chart type="bar" data={chartData} />}
    </div>
  );
};

export default InsightsChart;