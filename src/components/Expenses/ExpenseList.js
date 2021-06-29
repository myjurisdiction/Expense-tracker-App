import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let expenseContent = (
    <h1 className="expense-fallback">No expenses found !!</h1>
  );

  if (props.items.length) {
    expenseContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      ></ExpenseItem>
    ));
  }
  return <ul>{expenseContent}</ul>;
};

export default ExpenseList;
