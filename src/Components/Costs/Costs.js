import CostItems from "./CostItem";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
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
      {filteredCost.map((items) => (
        <CostItems
          key={items.id}
          costName={items.costName}
          price={items.price}
          date={items.date}
        />
      ))}
    </Card>
  );
};
export default Costs;
