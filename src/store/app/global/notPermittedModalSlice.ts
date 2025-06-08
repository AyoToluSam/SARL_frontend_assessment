import type { RootState } from "../../../store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const notPermittedSlice = createSlice({
  name: "notPermitted",
  initialState,
  reducers: {
    openNotPermittedModal: (state) => {
      state.showModal = true;
    },
    closeNotPermittedModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { openNotPermittedModal, closeNotPermittedModal } =
  notPermittedSlice.actions;

export const selectShowNotPermittedModal = (state: RootState) =>
  state.notPermitted.showModal;

export default notPermittedSlice;
