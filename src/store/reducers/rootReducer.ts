import { combineReducers } from "@reduxjs/toolkit";
import authApi from "../../store/api/authApi";
import baseApi from "../../store/api/baseApi";
import errorLogger from "../../store/middlewares/errorLogger";
import actionModalSlice from "../../store/app/global/actionModalSlice";
import notPermittedSlice from "../../store/app/global/notPermittedModalSlice";
import sessionExpiredSlice from "../../store/app/global/sessionExpiredSlice";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [actionModalSlice.name]: actionModalSlice.reducer,
  [notPermittedSlice.name]: notPermittedSlice.reducer,
  [sessionExpiredSlice.name]: sessionExpiredSlice.reducer,
});

export const combineMiddlewares = [
  authApi.middleware,
  baseApi.middleware,
  errorLogger,
];

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
