import { configureStore } from "@reduxjs/toolkit";
import { ReducerUi } from "./slices/uiSlice";
import { ReducerNotification } from "./slices/notificationSlice";

const store = configureStore({
  reducer: {
    ui: ReducerUi,
    notification: ReducerNotification
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
