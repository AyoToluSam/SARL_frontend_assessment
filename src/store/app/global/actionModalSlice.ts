import type { ButtonProps } from "../../../components/core/Button";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ActionState = {
  isOpen?: boolean;
  type?: "success" | "error" | "warning";
  title: string | null;
  content: React.ReactNode | string | null;
  showCancelBtn?: boolean;
  cancelText?: string | null;
  callbackText?: string | null;
  callbackBtnVariant?: ButtonProps["variant"];
  extraButtonText?: string | null;
  callback?: (() => void) | null;
  isLoading?: boolean;
  isClosable?: boolean;
};

const initialState: ActionState = {
  isOpen: false,
  showCancelBtn: false,
  title: null,
  type: "success",
  content: null,
  callback: null,
  cancelText: null,
  callbackText: "Close to continue",
  callbackBtnVariant: "main",
  extraButtonText: null,
  isLoading: false,
  isClosable: true,
};

const actionModalSlice = createSlice({
  name: "actionModal",
  initialState,
  reducers: {
    openActionModal: (state, action: PayloadAction<ActionState>) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.callbackText = action.payload.callbackText || "Close to continue";
      state.type = action.payload.type || "success";
      state.callback = action.payload.callback || null;
      state.showCancelBtn = action.payload.showCancelBtn || false;
      state.cancelText = action.payload.cancelText;
      state.callbackBtnVariant = action.payload.callbackBtnVariant || "main";
      state.isLoading = action.payload.isLoading || false;
      state.isClosable = action.payload.isClosable ?? true;
    },
    closeActionModal: () => {
      return initialState;
    },
  },
});

export const { closeActionModal, openActionModal } = actionModalSlice.actions;
export const selectActionState = (state: { actionModal: ActionState }) =>
  state.actionModal;

export default actionModalSlice;
