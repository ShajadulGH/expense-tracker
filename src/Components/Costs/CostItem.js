// import React, { useState } from "react";
import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
const CostItems = (props) => {
  // const [costName, setCostName] = useState(props.costName);
  // const clickHandler = () => {
  //   setCostName("Updated!!!");
  //   console.log(costName);
  // };
  return (
    <li>
      <Card className="expense-item">
        <CostDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.costName}</h2>
          <div className="expense-item__price">৳{props.price}</div>
          {/* <button onClick={clickHandler}>Click ME</button> */}
        </div>
      </Card>
    </li>
  );
};
export default CostItems;
