import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [];

function App() {
  let [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const newExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NewExpense onNewExpense={newExpenseHandler}></NewExpense>
      <Expenses
        items={expenses}
      ></Expenses>
    </div>
  );
}

export default App;
