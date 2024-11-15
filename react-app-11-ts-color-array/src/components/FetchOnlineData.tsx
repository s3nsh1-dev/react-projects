import { useState, useEffect } from "react";
import DisplayFetchedData from "./DisplayFetchedData";
import { fetchColors } from "../api/fetchColors";
import { useColorContext } from "../hooks/useColorContext";

interface colorProp {
  id: number;
  value: string;
}

export default function FetchOnlineData() {
  const [result, setResult] = useState<colorProp[]>([]);
  const ContextValue = useColorContext();
  console.log("Context Value", ContextValue?.data);
  /*
  use this context state update it and use it to display the
  global colors state in Homepage.
  */

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const fetching = await fetchColors();
        setResult(await fetching);
        console.log("Data Fetched: ", fetching);
      } catch (err) {
        console.log("Fetching Error: ", err);
      }
    };
    fetchingData();
  }, []);
  return (
    <div>
      <DisplayFetchedData data={result} />
    </div>
  );
}
/*
Using this with normal component function in typescript will cause errors
because of this keyword. {this} keyword in normal component function may point
to something different like when using StrictMode this may point to undefined
and without strict mode it may point to something different.
so we use arrow functions because Arrow functions do not have their own this.
Instead, they inherit this from their enclosing lexical context
(the context in which they are created).

Arrow functions work well in React because they don't require explicit
binding of {this} (since they inherit it from the enclosing context).
*/
