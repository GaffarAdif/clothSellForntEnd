import updateQuantity from "./Increment_decriment.js";
import UpdateBusketArray from "./BusketArrayReducer.js";
import SerVerUrlSave from "./ServerUrl.js";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  updateQuantity,
  UpdateBusketArray,
  SerVerUrlSave,
});

export default rootReducer;
