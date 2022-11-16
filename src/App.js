import CostItem from "./Components/CostItem";
function App() {
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
      <h2>Cost Tracker</h2>
      <CostItem
        costName={demoCostItem[0].costName}
        price={demoCostItem[0].price}
        date={demoCostItem[0].date}
      ></CostItem>
      <CostItem
        costName={demoCostItem[1].costName}
        price={demoCostItem[1].price}
        date={demoCostItem[1].date}
      ></CostItem>
      <CostItem
        costName={demoCostItem[2].costName}
        price={demoCostItem[2].price}
        date={demoCostItem[2].date}
      ></CostItem>
      <CostItem
        costName={demoCostItem[3].costName}
        price={demoCostItem[3].price}
        date={demoCostItem[3].date}
      ></CostItem>
    </div>
  );
}

export default App;
