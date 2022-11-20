import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import CostList from "./CostList";
import { useState } from "react";
import CostChart from "./CostChart";
const Costs = (props) => {
  const [storedYear, setStoredYear] = useState("");
  const getSelectedYear = (selectedYear) => {
    setStoredYear(selectedYear);
    console.log(storedYear);
  };
  const filteredCost = props.items.filter(
    (item) =>
      item.date.toLocaleString("en-US", { year: "numeric" }) === storedYear
  );
  console.log(filteredCost);
  return (
    <Card className="cost">
      <CostFilter selected={storedYear} getYear={getSelectedYear} />
      <CostChart costs={filteredCost} />
      <CostList costList={filteredCost} />
    </Card>
  );
};
export default Costs;
