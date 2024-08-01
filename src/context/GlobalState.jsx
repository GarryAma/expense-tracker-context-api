import { createContext, useReducer } from "react";
import { appReducer } from "./AppReducer";

//initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//create global context

export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  // console.log(state);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const addTransaction = (obj) => {
    dispatch({
      type: "ADD",
      payload: obj,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        handleDelete,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
