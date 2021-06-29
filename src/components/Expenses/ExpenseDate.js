import "./ExpenseDate.css";
import Card from "../UI/Card";

function ExpenseDate(props) {
  return (
    <Card className="expense-date">
      <div>{props.date.toLocaleString("en-US", { month: "long" })}</div>
      <div>{props.date.toLocaleString("en-US", { year: "numeric" })}</div>
      <div>{props.date.toLocaleString("en-US", { day: "numeric" })}</div>
    </Card>
  );
}

export default ExpenseDate;
