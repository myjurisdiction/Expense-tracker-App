import "./FilterExpense.css";

function FilterExpense(props) {
  const yearSelectHandler = (event) => {
    props.onYearSelect(event.target.value);
  };

  return (
    <div className="expense-filter">
      <label for="year">Select Year</label>
      <select
        name="year"
        value={props.selectedYear}
        id="year"
        onChange={yearSelectHandler}
      >
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default FilterExpense;
