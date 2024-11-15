import React, { createContext, FC, useState, ReactNode } from "react";

interface ColorContextState {
  data: [];
  handleColorState: () => void;
}
interface ProvideProps {
  children: ReactNode;
}
export const ColorContext = createContext<ColorContextState | null>(null);

export const MyContextProvide: FC<ProvideProps> = ({ children }) => {
  const [colorState, setColor] = useState<ColorContextState>({
    data: [],
    handleColorState: () => {
      console.log("Implementing the color changes");
    },
  });
  return (
    <ColorContext.Provider value={colorState}>{children}</ColorContext.Provider>
  );
};
