import React, { useContext, useEffect, useState } from "react";
import "./Summary.css";
import { PieChart } from "react-minimal-pie-chart";
import { ExpenseContext } from "../../Context/ExpenseContext";

const Summary = () => {
  const { currExpenses, categories } = useContext(ExpenseContext);
  const [summaryData, setSummaryData] = useState([]);
  const getColor = (category) => {
    let color = "";
    for (const item of categories) {
      if (item.name === category) {
        return item.color;
      }
    }
    return color;
  };

  useEffect(() => {
    var categoryData = {};
    var total = 0;
    var newSummaryData = [...summaryData];
    for (const expense of currExpenses) {
      if (expense.category in categoryData) {
        categoryData[expense.category] += expense.amount;
        total += expense.amount;
      } else {
        categoryData[expense.category] = expense.amount;
        total += expense.amount;
      }
    }
    for (const category in categoryData) {
      newSummaryData.push({
        title: category,
        value: (categoryData[category] / total) * 100,
        color: getColor(category),
      });
    }
    setSummaryData(newSummaryData);
  }, [currExpenses]);

  return (
    <div className="expense-summary-page">
      <div className="expense-chart">
        <PieChart
          data={summaryData}
          label={({ dataEntry }) => dataEntry.title + " " + Math.round(dataEntry.value).toString() + "%"}
          labelStyle={{ fontSize: "0.25em" }}
        />
      </div>
    </div>
  );
};

export default Summary;
