import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

const divRoot = document.getElementById("root");
const root = ReactDOM.createRoot(divRoot);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
