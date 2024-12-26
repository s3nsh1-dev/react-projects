import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
// this provider is the way to connect react with redux
import { Provider } from "react-redux";
import App from "./App";
// redux store
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
