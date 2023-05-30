import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./app";
import store from "./store";
import { Provider } from "react-redux";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/customMuiStyle";
import "./i18nextConf";

function Page() {
  //  store.subscribe(() => console.log(store.getState()))

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
