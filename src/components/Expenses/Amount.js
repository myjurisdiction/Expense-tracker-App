import "./Amount.css";
import Card from "../UI/Card";

function Amount(props) {
  return (
    <Card className="expense-amount">
      <p>{props.amount}</p>
    </Card>
  );
}

export default Amount;
