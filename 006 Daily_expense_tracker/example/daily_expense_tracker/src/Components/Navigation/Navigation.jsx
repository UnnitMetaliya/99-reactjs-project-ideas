import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-menu">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Expenses
      </button>
      <button
        onClick={() => {
          navigate("/summary");
        }}
      >
        Expense Summary
      </button>
    </div>
  );
};

export default Navigation;
