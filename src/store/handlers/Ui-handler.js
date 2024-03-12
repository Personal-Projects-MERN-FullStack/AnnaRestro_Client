import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  notification: {
    active: false,
    msg: "Testing Case Buddy",
  },
  currentpage: "/",
  basket:[]
};

const uihandler = createSlice({
  name: "ui",
  initialState,
  reducers: {
    SetNotification(state, action, payload) {
      state.notification = action.payload;
    },
    SetCurrentPage(state,action,payload){
      state.currentpage = action.payload
    },Updatebasket(state, action,payload) {
      state.basket = [...action.payload]
    },
    AddTobasket(state, action, payload) {
      const existingItem = state.basket.find((item) => item._id === action.payload._id);
    
      if (existingItem) {
        existingItem.productQty += 1;
      } else {
        state.basket.push({ ...action.payload, productQty: 1 });
      }
    },
    RemoveFrombasket(state, action) {
      const existingItemIndex = state.basket.findIndex((item) => item._id === action.payload._id);
    
      if (existingItemIndex !== -1) {
        state.basket[existingItemIndex].productQty -= 1;
    
        if (state.basket[existingItemIndex].productQty === 0) {
          state.basket.splice(existingItemIndex, 1);
        }
      } else {
        state.basket.push({ ...action.payload, productQty: 1 });
      }
    },
    Clearbasket(state, action, payload) {
      state.basket = [];
    }
  },
});
export default uihandler.reducer;
export const ui = uihandler.actions;
