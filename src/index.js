import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
// rootReducer from ./reducers
import rootReducer from "./reducers";
// needed dependencies
// applyMiddleware from redux
import { applyMiddleware } from "redux";
// thunk from redux-thunk
import thunk from "redux-thunk";
// logger from redux-logger
import { logger } from "redux-logger";

const store = createStore(
  rootReducer,
  /* applyMiddleware goes here */
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
