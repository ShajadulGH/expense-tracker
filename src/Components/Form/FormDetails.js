import React, { useState } from "react";
import "./FormDetails.css";
const FormDetails = () => {
  const [enteredText, setEnteredText] = useState("");
  const titleHandler = (event) => {
    setEnteredText(event.target.value);
    console.log(enteredText);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={amountHandler} type="number" min="10" step="10" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">New Expense</button>
      </div>
    </form>
  );
};
export default FormDetails;
