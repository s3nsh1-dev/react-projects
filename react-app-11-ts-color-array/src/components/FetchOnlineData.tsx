import DisplayFetchedData from "./DisplayFetchedData";
import { useFetchColors } from "../hooks/useFetchColors";

export default function FetchOnlineData() {
  useFetchColors();
  return (
    <div>
      <DisplayFetchedData />
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

/*
Component Flow
Due to JS being Asynchronous in nature it fist executes all the
functions the call the useEffect which cause another render
and the function that is executed will loading React app run
twice
*/
