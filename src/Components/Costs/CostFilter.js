import "./CostFilter.css";
const CostFilter = (props) => {
  const yearHandler = (e) => {
    // console.log(e.target.value);
    props.getYear(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter Year</label>
        <select value={props.selected} onChange={yearHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};
export default CostFilter;
