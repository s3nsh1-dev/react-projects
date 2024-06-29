// Writing steps to learn and remember what we are doing in this index.js fole and understand each step.

//1. Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

//2. Get a reference to the div called root declared in the index.html
const ele = document.getElementById("root");

//3. Tell React ot take control of that element
const root = ReactDOM.createRoot(ele);

//4. Show the component on the screen.
root.render(<App />);
