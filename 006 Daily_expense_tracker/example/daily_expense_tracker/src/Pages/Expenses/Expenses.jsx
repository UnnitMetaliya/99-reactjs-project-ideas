import "./Expenses.css";
import React, { useContext, useState } from "react";
import ExpenseForm from "../../Components/Form/ExpenseForm";
import { ExpenseContext } from "../../Context/ExpenseContext";
import ExpenseDisplay from "../../Components/Display/ExpenseDisplay";

const Expenses = () => {
  const [addMode, setAddMode] = useState(false);
  const { categories, dates, setCategoryFilter, setDateFilter } =
    useContext(ExpenseContext);

  return (
    <div className="expense-page">
      <div className="expense-section">
        <ul className="expense-header">
          <li>Description</li>
          <hr />
          <li>
            <select
              id="categoryHeader"
              onChange={(event) => setCategoryFilter(event.target.value)}
            >
              <option value="">Category</option>
              {categories.map((category, key) => {
                return (
                  <option key={key} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </li>
          <hr />
          <li>Price</li>
          <hr />
          <li
            style={{
              width: "calc(15vw + 4rem)",
            }}
          >
            <select
              id="dateHeader"
              onChange={(event) => setDateFilter(event.target.value)}
            >
              <option value="">Date</option>
              {Array.from(new Set(dates)).map((date, key) => {
                return (
                  <option key={key} value={date}>
                    {date}
                  </option>
                );
              })}
            </select>
          </li>
        </ul>
        <ExpenseDisplay />
      </div>
      <div className="add-section">
        <button
          onClick={() => {
            setAddMode(!addMode);
          }}
        >
          {addMode ? "Cancel" : "Add expense"}
        </button>
        {addMode && <ExpenseForm />}
      </div>
    </div>
  );
};

export default Expenses;
