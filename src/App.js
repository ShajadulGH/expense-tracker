import { useState } from "react";
import Costs from "./Components/Costs/Costs";
import Form from "./Components/Form/Form";
const demoCostItem = [];
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
