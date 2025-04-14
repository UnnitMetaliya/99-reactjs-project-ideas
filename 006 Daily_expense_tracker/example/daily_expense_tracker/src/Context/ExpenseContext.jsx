import React, { useState, createContext, useEffect } from "react";

export const ExpenseContext = createContext(null);

const ExpenseContextProvider = (props) => {
  const [dates, setDates] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currExpenses, setCurrExpenses] = useState(
    window.localStorage.getItem("expenses") !== "null"
      ? JSON.parse(window.localStorage.getItem("expenses"))
      : []
  );

  const categories = [
    { name: "Misc", color: "#ff8fa3" },
    { name: "Entertainment", color: "#ffb3c1" },
    { name: "Transportation", color: "#a4133c" },
    { name: "Groceries", color: "#c9184a" },
    { name: "Utilities", color: "#ff4d6d" },
    { name: "Bills", color: "#ff758f" },
  ];

  useEffect(() => {
    window.localStorage.setItem("expenses", JSON.stringify(currExpenses));
    if (currExpenses) {
      setDates(currExpenses.map((item) => item.date));
    }
  }, [currExpenses]);

  const contextValue = {
    currExpenses,
    setCurrExpenses,
    categories,
    dates,
    categoryFilter,
    setCategoryFilter,
    dateFilter,
    setDateFilter,
  };
  return (
    <ExpenseContext.Provider value={contextValue}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
