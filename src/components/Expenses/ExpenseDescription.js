import "./ExpenseDescription.css";

function ExpenseDescription(props) {
  // the onChange handler will point to the function defined here
  function expenseDecriptionHandler(event) {
    props.onDescriptionChange(event.target.value);
  }

  return (
    <div className="expense-description">
      <label for="description">Expense Description:</label>
      <textarea
        name="description"
        id="description"
        cols="50"
        rows="2"
        onChange={expenseDecriptionHandler}
        value={props.description}
      ></textarea>
    </div>
  );
}

export default ExpenseDescription;
