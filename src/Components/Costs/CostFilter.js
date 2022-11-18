const CostFilter = (props) => {
  const yearHandler = (e) => {
    // console.log(e.target.value);
    props.getYear(e.target.value);
  };
  return (
    <div>
      <label>Filer Year</label>
      <select value={props.selected} onChange={yearHandler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};
export default CostFilter;
