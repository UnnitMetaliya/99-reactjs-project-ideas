import React, { useContext } from "react";
import { ExpenseItem } from "../../Components/Item/ExpenseItem";
import { ExpenseContext } from "../../Context/ExpenseContext";

const ExpenseDisplay = () => {
  const { currExpenses } = useContext(ExpenseContext);
  return (
    <div className="expense-display">
      {currExpenses &&
        currExpenses.map((expense, key) => {
          return (
            <ExpenseItem
              key={key}
              idx={key}
              desc={expense.desc}
              category={expense.category}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
    </div>
  );
};

export default ExpenseDisplay;
