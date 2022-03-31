import { combineReducers } from "redux";
import { citiesReducer } from "./reducers";

export const rootReducer = combineReducers({
  cities: citiesReducer,
});
