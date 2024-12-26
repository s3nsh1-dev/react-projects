import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// provider in not a default export so needs to be inside {} else we will be NavigationContext
import { NavigationProvider } from "./context/navigation";

// we get the root where the app is going to render
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
