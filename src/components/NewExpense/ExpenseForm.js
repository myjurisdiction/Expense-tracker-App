import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // i have to use the useState hook here

  //   const[(newTitle, setTitle)] = useState("");
  //   const [newDate, setDate] = useState("");
  //   const [newAmount, setAmount] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function titleChangeHandler(event) {
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });

    // there is a better laternative to the above procedure of updating the state.
    // iF my state update depends on the previous state i should use the below syntax

    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }

  function changeAmountHandler(event) {
    // setAmount(event.target.value);
    // console.log(newAmount);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });

    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  }

  function changeDateHandler(event) {
    // setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });

    setUserInput((prevState) => {
      return {
        ...prevState,
        date: new Date(event.target.value) || new Date(),
      };
    });
  }

  function formSubmitHandler(event) {
    // this is done so that th browser does not send any request when the page loads
    event.preventDefault();
    if (!userInput.date) {
      userInput.date = new Date();
    }
    props.onSaveExpenseData(userInput);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });

    props.isCancelForm();
  }

  function cancelFormHandler() {
    props.isCancelForm();
  }

  return (
    <div className="expense-form">
      {/* since button type submit is inside form so i can add onSubmit event on the form alone. */}
      <form onSubmit={formSubmitHandler}>
        <div className="expense-form-content">
          <label id="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={userInput.title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="expense-form-content">
          <label id="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={changeAmountHandler}
          ></input>
        </div>
        <div className="expense-form-content">
          <label id="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            min="2021-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={changeDateHandler}
          ></input>
        </div>
        <button className="expense-form-content" type="submit">
          Add Expense
        </button>
      </form>
      <button
        className="expense-form-content"
        type="submit"
        onClick={cancelFormHandler}
      >
        cancel
      </button>
    </div>
  );
};

export default ExpenseForm;
