import { createContext, FC, useState, ReactNode, useMemo } from "react";

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
/*
When you split the context into two (StateContext and ActionContext), it’s likely that handleColorState is re-created on every render.
Every time the context value (ActionContext.Provider) changes, React creates a new reference for handleColorState.
*/
export const ActionContext = createContext<ActionContextState | null>(null);

export const MyContextProvide: FC<ProvideProps> = ({ children }) => {
  const [colorState, setColor] = useState<DataProp[]>([]);

  const handleColorState = useMemo(() => {
    return (fetchData: DataProp[]) => {
      setColor(fetchData);
    };
  }, []); // Empty dependency array ensures it stays the same across re-renders
  return (
    <StateContext.Provider value={{ stateData: colorState }}>
      <ActionContext.Provider value={{ handleColorState }}>
        {children}
      </ActionContext.Provider>
    </StateContext.Provider>
  );
};
