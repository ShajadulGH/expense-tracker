import Chart from "../Chart/Chart";
const CostChart = (props) => {
  const allMonthValue = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];
  for (const item of props.costs) {
    const getMonths = item.date.getMonth();
    allMonthValue[getMonths].value += item.price;
  }
  console.log(allMonthValue);
  return <Chart dataForChart={allMonthValue} />;
};
export default CostChart;
