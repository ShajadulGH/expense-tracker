import "./CostItem.css";
function CostItems(props) {
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="xpense-item__description">
        <h2>{props.costName}</h2>
        <div className="expense-item__price">৳{props.price}</div>
      </div>
    </div>
  );
}
export default CostItems;
