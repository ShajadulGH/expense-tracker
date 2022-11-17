import Costs from "./Components/Costs/Costs";
import Form from "./Components/Form/Form";

const App = () => {
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
      costName: "Keyboard",
      price: 5000,
    },
    {
      id: 3,
      date: new Date(),
      costName: "Desktop",
      price: 50000,
    },
    {
      id: 4,
      date: new Date(),
      costName: "Car",
      price: 1000000,
    },
  ];
  return (
    <div>
      <Form />
      <Costs items={demoCostItem} />
    </div>
  );
};

export default App;
