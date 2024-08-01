import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const context = useContext(GlobalContext);
  const { transactions } = context;

  //get total INCOME
  const arr = transactions.map((transaction) => transaction.amount);
  const filteredIncome = arr.filter((single) => single > 0);
  const income = filteredIncome.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  //get total exprenses
  const filteredExpenses = arr.filter((single) => single < 0);
  const expenses = filteredExpenses.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expenses}</p>
      </div>
    </div>
  );
};
