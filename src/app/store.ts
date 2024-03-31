import { configureStore } from "@reduxjs/toolkit";
import ChatMessagesSlice from "../features/ChatMessagesSlice";

export const store = configureStore({
  reducer: {
    chatMessages: ChatMessagesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
