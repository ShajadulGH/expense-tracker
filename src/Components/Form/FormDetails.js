import React, { useState } from "react";
import "./FormDetails.css";
const FormDetails = (props) => {
  // const [enteredValue, setEnteredValue] = useState({
  //   enteredText: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  // const titleHandler = (event) => {
  //   setEnteredValue((prev) => {
  //     return { ...prev, enteredText: event.target.value };
  //   });
  //   console.log(enteredValue.enteredText);
  // };

  const [enteredText, setEnteredText] = useState("");
  const titleHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState();
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenses = {
      costName: enteredText,
      price: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onStoreData(expenses);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredText("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={enteredText} onChange={titleHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">New Expense</button>
        <button onClick={props.onCancle}>Cancel</button>
      </div>
    </form>
  );
};
export default FormDetails;
