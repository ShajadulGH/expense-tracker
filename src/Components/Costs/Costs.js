import CostItems from "./CostItem";
import Card from "../UI/Card";
const Costs = (props) => {
  return (
    <Card className="cost">
      <CostItems
        costName={props.items[0].costName}
        price={props.items[0].price}
        date={props.items[0].date}
      />
      <CostItems
        costName={props.items[1].costName}
        price={props.items[1].price}
        date={props.items[1].date}
      />
      <CostItems
        costName={props.items[2].costName}
        price={props.items[2].price}
        date={props.items[2].date}
      />
      <CostItems
        costName={props.items[3].costName}
        price={props.items[3].price}
        date={props.items[3].date}
      />
    </Card>
  );
};
export default Costs;
