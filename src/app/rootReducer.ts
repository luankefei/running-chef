import { combineReducers } from "@reduxjs/toolkit";
import chatReducer from "@containers/Chat/chatSlice";
import addressReducer from "@containers/Addressbook/addressSlice";

export default function createReducer(): any {
  return combineReducers({
    chat: chatReducer,
    address: addressReducer,
  });
}
