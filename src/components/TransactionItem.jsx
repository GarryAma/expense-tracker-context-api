import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionItem = ({ transaction }) => {
  console.log(transaction);
  const context = useContext(GlobalContext);
  //   console.log(context);
  const { handleDelete } = context;

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} <span>{transaction.amount}</span>
      <button
        className="delete-btn"
        onClick={() => handleDelete(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
