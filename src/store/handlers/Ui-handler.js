import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  notification: {
    active: false,
    msg: "Testing Case Buddy",
  },
  currentpage: "/",
};




const uihandler = createSlice({
  name: "ui",
  initialState,
  reducers: {
    SetNotification(state, action, payload) {
        console.log(action.payload)
    },
  },
});
export default uihandler.reducer;
export const ui = uihandler.actions;
