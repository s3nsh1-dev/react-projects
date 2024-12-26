import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Provider } from "./context/Books";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode is not a must to have feature
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
