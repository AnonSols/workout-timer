import { createContext, useContext, useReducer } from "react";

const CalculatorContext = createContext(undefined);

const InitialState = {};

function CalculatorProvider({ children }) {
  function reducer() {}
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <CalculatorContext.Provider value={(state, dispatch)}>
      {children}
    </CalculatorContext.Provider>
  );
}

function useCalculator() {
  const context = useContext(CalculatorContext);

  if (context === undefined) return;

  return context;
}

export { useCalculator, CalculatorProvider };
