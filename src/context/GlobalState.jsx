import { createContext, useReducer } from "react";
import { appReducer } from "./AppReducer";

//initial state
const initialState = {
  transaction: [
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

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
