import { createContext, useState } from "react";
const BooksContext = createContext();

export function Provider({ children }) {
  const [count, setCount] = useState(0);

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
