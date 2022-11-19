import { useState } from "react";
import Costs from "./Components/Costs/Costs";
import Form from "./Components/Form/Form";
const demoCostItem = [
  {
    id: 1,
    date: new Date(),
    costName: "Mobile",
    price: 15000,
  },
  {
    id: 2,
    date: new Date(),
    costName: "Car",
    price: 200000,
  },
  {
    id: 3,
    date: new Date(),
    costName: "Mouse",
    price: 2700,
  },
];
const App = () => {
  const [costItems, setCostItems] = useState(demoCostItem);
  const receivedData = (receivedData) => {
    setCostItems((prevCost) => {
      return [receivedData, ...prevCost];
    });
    console.log(costItems);
  };
  return (
    <div>
      <Form onStoreCost={receivedData} />
      <Costs items={costItems} />
    </div>
  );
};

export default App;
