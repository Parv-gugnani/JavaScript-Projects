const data = [
  { label: "Category 1", value: 50 },
  { label: "Category 2", value: 80 },
  { label: "Category 3", value: 30 },
  { label: "Category 4", value: 60 },
];

const canvas = document.getElementById("chartCanvas");
const ctx = canvas.getContext("2d");

const chartConfig = {
  barWidth: 40,
  barSpacing: 20,
  chartMargin: 20,
  barColor: "#3498db",
};

function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxValue = Math.max(...data.map((item) => item.value));

  data.forEach((item, index) => {
    const x =
      chartConfig.chartMargin +
      index * (chartConfig.barWidth + chartConfig.barSpacing);
    const y =
      canvas.height -
      chartConfig.chartMargin -
      (item.value / maxValue) * (canvas.height - 2 * chartConfig.chartMargin);

    ctx.fillStyle = chartConfig.barColor;
    ctx.fillRect(
      x,
      y,
      chartConfig.barWidth,
      canvas.height - y - chartConfig.chartMargin
    );

    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.fillText(item.label, x + chartConfig.barWidth / 2, canvas.height - 5);
  });
}

drawChart();
