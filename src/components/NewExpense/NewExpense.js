import { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import Button from "../UI/Button";

function NewExpense(props) {
  //   function saveExpenseDataHandler(expenseData) {}

  const saveExpenseDataHandler = (expenseData) => {
    props.onNewExpense({ ...expenseData, id: Date.now() });
  };

  const [isEditing, setIsEditing] = useState(true);

  function isEditingHandler() {
    setIsEditing(false);
  }

  function cancelFormHandler() {
    setIsEditing(true);
  }

  return (
    <Card>
      {isEditing && <Button showForm={isEditingHandler}>Add Expense</Button>}
      {!isEditing && (
        <ExpenseForm
          isCancelForm={cancelFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </Card>
  );
}

export default NewExpense;
