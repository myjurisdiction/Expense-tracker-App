import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  let maxValue = 0;

  for (let data of props.dataPoints) {
    if (data.value > maxValue) {
      maxValue = data.value;
    }
  }

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
