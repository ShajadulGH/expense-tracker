import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import CostList from "./CostList";
import { useState } from "react";
const Costs = (props) => {
  const [storedYear, setStoredYear] = useState("2020");
  const getSelectedYear = (selectedYear) => {
    setStoredYear(selectedYear);
    console.log(storedYear);
  };
  const filteredCost = props.items.filter(
    (item) => item.date.getFullYear().toString() === storedYear
  );

  return (
    <Card className="cost">
      <CostFilter selected={storedYear} getYear={getSelectedYear} />
      <CostList costList={filteredCost} />
    </Card>
  );
};
export default Costs;
