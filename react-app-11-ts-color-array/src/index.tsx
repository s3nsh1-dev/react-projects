import ReactDOM from "react-dom/client";
import App from "./App";
import { MyContextProvide } from "./context/colorContext";

const rootDiv = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDiv);
root.render(
  <MyContextProvide>
    <App />
  </MyContextProvide>
);
