import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { GiTrashCan } from "react-icons/gi";
import "./ExpenseItem.css";
import { ExpenseContext } from "../../Context/ExpenseContext";

export const ExpenseItem = (props) => {
  const [show, setShow] = useState(true);
  const [date, setDate] = useState(props.date);
  const [desc, setDesc] = useState(props.desc);
  const [category, setCategory] = useState(props.category);
  const [amount, setAmount] = useState(props.amount);
  const { currExpenses, setCurrExpenses, dateFilter, categoryFilter } =
    useContext(ExpenseContext);
  const [editMode, setEditMode] = useState(false);

  const removeExpense = () => {
    var newExpenses = currExpenses.filter((item, idx) => idx !== props.idx);
    setCurrExpenses(newExpenses);
    setEditMode(false);
  };

  const saveExpense = () => {
    var newExpenses = currExpenses;
    newExpenses.splice(props.idx, 1, {
      date: date,
      category: category,
      desc: desc,
      amount: parseInt(amount),
    });
    setCurrExpenses(newExpenses);
    setEditMode(false);
  };

  useEffect(() => {
    if (dateFilter) {
      if (categoryFilter) {
        setShow(
          dateFilter === date && categoryFilter === category ? true : false
        );
      } else {
        setShow(dateFilter === date ? true : false);
      }
    } else if (categoryFilter) {
      setShow(categoryFilter === category ? true : false);
    } else {
      setShow(true);
    }
  }, [dateFilter, categoryFilter, date, category]);
  if (show) {
    return (
      <div className="expense-item">
        <hr />
        {editMode ? (
          <div className="edit-expense">
            <li>
              <input
                type="textbox"
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
              />
            </li>
            <hr />
            <li>
              <input
                type="text"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </li>
            <hr />
            <li>
              <input
                type="number"
                min="1"
                step="any"
                onChange={(event) => setAmount(event.target.value)}
                value={amount}
              />
            </li>
            <hr />
            <li>
              <input
                id="date"
                type="date"
                onChange={(event) => setDate(event.target.value)}
                value={date}
              />
            </li>
            <div className="edit-button">
              <button onClick={() => removeExpense()}>
                <GiTrashCan />
              </button>
              <button onClick={() => saveExpense()}>
                <FaCheck />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <ul className="item-details">
              <li>{desc}</li>
              <hr />
              <li>{category}</li>
              <hr />
              <li>${amount}</li>
              <hr />
              <li>{date}</li>
              <div className="edit-button">
                <button onClick={() => setEditMode(true)}>Edit</button>
              </div>
            </ul>
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};
