import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
const CostItems = (props) => {
  return (
    <Card className="expense-item">
      <CostDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.costName}</h2>
        <div className="expense-item__price">৳{props.price}</div>
      </div>
    </Card>
  );
};
export default CostItems;
