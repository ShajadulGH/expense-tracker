import "./CostItem.css";
import CostDate from "./CostDate";
function CostItems(props) {
  return (
    <div className="expense-item">
      <CostDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.costName}</h2>
        <div className="expense-item__price">৳{props.price}</div>
      </div>
    </div>
  );
}
export default CostItems;
