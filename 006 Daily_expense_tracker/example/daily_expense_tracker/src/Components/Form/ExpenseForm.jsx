import React from "react";
import "./ExpenseForm.css";
import { useState, useContext } from "react";
import { ExpenseContext } from "../../Context/ExpenseContext";

const ExpenseForm = () => {
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const { currExpenses, setCurrExpenses, categories } =
    useContext(ExpenseContext);

  const HandleSubmit = () => {
    setCurrExpenses([
      ...currExpenses,
      { date: date, category: category, desc: desc, amount: parseInt(amount) },
    ]);
  };

  return (
    <div className="expense-form">
      <form id="expenseForm" onSubmit={() => HandleSubmit()}>
        <div className="expense-form-data">
          <label>Date: </label>
          <input
            id="date"
            type="date"
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>
        <div className="expense-form-data">
          <label>Description: </label>
          <input
            id="description"
            type="text"
            placeholder="Enter a few words describing this expense"
            onChange={(event) => setDesc(event.target.value)}
            required
          />
        </div>
        <div className="expense-form-data">
          <label>Category: </label>
          {/* <input
            id="category"
            type="text"
            onChange={(event) => setCategory(event.target.value)}
            required
          /> */}
          <select
            id="category"
            required
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select a category</option>
            {(categories).map((category, key) => {
              return (
                <option key={key} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="expense-form-data">
          <label>amount: </label>
          <input
            type="number"
            min="1"
            step="any"
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
