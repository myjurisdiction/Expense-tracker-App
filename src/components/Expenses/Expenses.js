import "./Expenses.css";
import Card from "../UI/Card";
import FilterExpense from "./FilterExpense";
import { useState } from "react";
import ExpenseDescription from "./ExpenseDescription";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [inputState, setInputState] = useState({
    description: "It's working...",
    year: "2020",
  });

  function yearSelectHandler(year) {
    setInputState(() => {
      return {
        ...inputState,
        year,
      };
    });
  }

  function onDescriptionChangeHandler(desc) {
    setInputState(() => {
      return {
        ...inputState,
        description: desc,
      };
    });
  }

  const filteredExpenses = props.items.filter(
    (el) => el.date.getFullYear().toString() === inputState.year
  );

  return (
    <Card className="expenses">
      <FilterExpense
        selected={inputState.year}
        onYearSelect={yearSelectHandler}
      ></FilterExpense>
      <ExpenseDescription
        onDescriptionChange={onDescriptionChangeHandler}
        description={inputState.description}
      ></ExpenseDescription>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpenseList items={filteredExpenses}></ExpenseList>
    </Card>
  );
}

/**
 * Alternative ways of representing conditional statements in React
 * 
 *  (1) > ** TERNARY EXPRESSION
 * {filteredExpenses.length === 0 ? (
        <p>No expenses found !!</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))
      )}

    (2) >  ** JAVASCRIPT SHORTHAND

     {filteredExpenses.length === 0 && <p>No expenses found !!</p>}

      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
 */

export default Expenses;
