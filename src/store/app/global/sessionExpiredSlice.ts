import type { RootState } from "../../../store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionExpired: false,
};

const sessionExpiredSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionExpired: (state) => {
      state.sessionExpired = true;
    },
    closeSessionExpired: (state) => {
      state.sessionExpired = false;
    },
  },
});

export const { setSessionExpired, closeSessionExpired } =
  sessionExpiredSlice.actions;

export const selectSessionExpired = (state: RootState) =>
  state.session.sessionExpired;

export default sessionExpiredSlice;
