import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

export const TransactionList = () => {
  const context = useContext(GlobalContext);
  //   console.log(context);
  const { transactions } = context;

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction, i) => {
          return <TransactionItem key={i} transaction={transaction} />;
        })}
      </ul>
    </>
  );
};
