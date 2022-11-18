import FormDetails from "./FormDetails";
import "./Form.css";
const Form = (props) => {
  const receivedData = (receivedData) => {
    const storedData = {
      ...receivedData,
    };
    props.onStoreCost(storedData);
  };
  return (
    <div className="new-expense">
      <FormDetails onStoreData={receivedData} />
    </div>
  );
};
export default Form;
