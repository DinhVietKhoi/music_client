/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import userReducer from "./userSlice";
// Định nghĩa kiểu RootState
interface RootState {
  player: ReturnType<typeof playerReducer>;
  user: ReturnType<typeof userReducer>;
}

const rootReducer = combineReducers({
  player: playerReducer,
  user: userReducer,
});
export type { RootState };

export default rootReducer;
