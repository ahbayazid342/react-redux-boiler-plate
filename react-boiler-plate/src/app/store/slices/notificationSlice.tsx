import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationName: "notification",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {},
});

export const ReducerNotification = notificationSlice.reducer;
export const ActionsNotification = notificationSlice.actions;
