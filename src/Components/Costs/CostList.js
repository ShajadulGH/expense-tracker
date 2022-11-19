import CostItem from "./CostItem";
import "./CostList.css";
const CostList = (props) => {
  if (props.costList.length === 0) {
    return <h2 className="no-expense">No Expenses Found</h2>;
  }
  return (
    <ul>
      {props.costList.map((items) => (
        <CostItem
          key={items.id}
          costName={items.costName}
          price={items.price}
          date={items.date}
        />
      ))}
    </ul>
  );
};
export default CostList;
