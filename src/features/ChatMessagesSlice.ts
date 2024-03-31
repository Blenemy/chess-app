import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ChatMessages {
  messages: string[];
}

const initialState: ChatMessages = {
  messages: [],
};

const ChatMessagesSlice = createSlice({
  name: "ChatMessages",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = ChatMessagesSlice.actions;
export default ChatMessagesSlice.reducer;
