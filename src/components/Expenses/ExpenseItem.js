import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import Amount from "./Amount";

function ExpenseItem(props) {
  return (
    <Card className="container">

        <ExpenseDate date={props.date}></ExpenseDate>
        <h1>{props.title}</h1>
        <Amount amount={props.amount}></Amount>
    </Card>
  );
}

export default ExpenseItem;
