import React, { createContext, FC, useState, ReactNode } from "react";

interface DataProp {
  id: string; // Ensure this matches your API data
  value: string;
}

interface StateContextState {
  stateData: DataProp[];
}
interface ActionContextState {
  handleColorState: (fetchData: DataProp[]) => void;
}
interface ProvideProps {
  children: ReactNode;
}
export const StateContext = createContext<StateContextState | null>(null);
export const ActionContext = createContext<ActionContextState | null>(null);

export const MyContextProvide: FC<ProvideProps> = ({ children }) => {
  const [colorState, setColor] = useState<DataProp[]>([]);

  const handleColorState = (fetchData: DataProp[]) => {
    setColor(fetchData);
  };
  return (
    <StateContext.Provider value={{ stateData: colorState }}>
      <ActionContext.Provider value={{ handleColorState }}>
        {children}
      </ActionContext.Provider>
    </StateContext.Provider>
  );
};
