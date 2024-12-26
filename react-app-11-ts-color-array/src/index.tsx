import ReactDOM from "react-dom/client";
import App from "./App";
import { MyContextProvide } from "./context/colorContext";
import { Provider } from "react-redux";
import { store } from "./redux-version/store";

const rootDiv = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDiv);
root.render(
  <Provider store={store}>
    <MyContextProvide>
      <App />
    </MyContextProvide>
  </Provider>
);
