import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const allValues = props.dataForChart.map((data) => data.value);
  const maxValue = Math.max(...allValues);
  console.log(maxValue);
  return (
    <div className="chart">
      {props.dataForChart.map((data) => (
        <ChartBar
          key={data.month}
          month={data.month}
          value={data.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
export default Chart;
