import React from "react";
import "./index.css";
import App from "./App";
//Redux
import { Provider } from "react-redux";
import store from "./store";
//ReactDom
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
