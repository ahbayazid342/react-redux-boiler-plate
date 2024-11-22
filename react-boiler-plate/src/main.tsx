import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./app/store/store.tsx";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
