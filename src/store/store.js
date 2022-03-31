import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

import thunk from "redux-thunk";
import { logger } from "redux-logger/src";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
