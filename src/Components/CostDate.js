import "./CostDate.css";
function CostDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="xpense-date__year">{year}</div>
      <div className="xpense-date__day">{day}</div>
    </div>
  );
}
export default CostDate;
