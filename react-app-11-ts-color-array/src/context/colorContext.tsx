import React, { createContext, FC, useState, ReactNode } from "react";

interface DataProp {
  id: string; // Ensure this matches your API data
  value: string;
}

interface ColorContextState {
  stateData: DataProp[];
  handleColorState: (fetchData: DataProp[]) => void;
}
interface ProvideProps {
  children: ReactNode;
}
export const ColorContext = createContext<ColorContextState | null>(null);

export const MyContextProvide: FC<ProvideProps> = ({ children }) => {
  const [colorState, setColor] = useState<ColorContextState>({
    stateData: [],
    handleColorState: (fetchData) => {
      // curly braces is imp. when binding pre and new
      setColor((pre) => ({ ...pre, stateData: fetchData }));
    },
  });
  return (
    <ColorContext.Provider value={colorState}>{children}</ColorContext.Provider>
  );
};
