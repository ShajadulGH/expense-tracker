import React, { useState } from "react";
import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
const CostItems = (props) => {
  const [costName, setCostName] = useState(props.costName);
  const clickHandler = () => {
    setCostName("Updated!!!");
    console.log(costName);
  };
  return (
    <Card className="expense-item">
      <CostDate date={props.date} />
      <div className="expense-item__description">
        <h2>{costName}</h2>
        <div className="expense-item__price">৳{props.price}</div>
        <button onClick={clickHandler}>Click ME</button>
      </div>
    </Card>
  );
};
export default CostItems;
