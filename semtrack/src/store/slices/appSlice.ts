import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// is it better to have a seperate slice for toasts?
// is it better to nest the toast state in the app state?
// or should it be non-nested, i.e showToast, toastMessage, toastType vs
// toast.show, toast.message, toast.type

export interface Toast {
  show: boolean;
  message: string;
  type:
    | "success"
    | "error"
    | "warning"
    | "info"
    | "primary"
    | "secondary"
    | "accent"
    | undefined;
}

export interface AppState {
  toast: Toast;
}

const initialState: AppState = {
  toast: {
    show: false,
    message: "",
    type: "success",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToast(state, action: PayloadAction<Toast>) {
      state.toast = action.payload;
    },
    resetToast(state) {
      state.toast = initialState.toast;
    },
  },
});

export const { setToast, resetToast } = appSlice.actions;
export const appReducer = appSlice.reducer;
