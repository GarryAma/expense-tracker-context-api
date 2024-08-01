import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const context = useContext(GlobalContext);
  // console.log(context);
  const { transactions } = context;
  const amountArr = transactions.map((transaction) => transaction.amount);
  const total = amountArr
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
