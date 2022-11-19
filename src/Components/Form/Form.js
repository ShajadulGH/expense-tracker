import { useState } from "react";
import FormDetails from "./FormDetails";
import "./Form.css";
const Form = (props) => {
  const [startEditing, setStartEditing] = useState(false);
  const startEditingHandler = () => {
    setStartEditing(true);
  };
  const stopEditing = () => {
    setStartEditing(false);
  };
  const receivedData = (receivedData) => {
    const storedData = {
      ...receivedData,
    };
    props.onStoreCost(storedData);
  };
  return (
    <div className="new-expense">
      {!startEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {startEditing && (
        <FormDetails onCancle={stopEditing} onStoreData={receivedData} />
      )}
    </div>
  );
};
export default Form;
