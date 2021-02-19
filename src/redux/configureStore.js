import {configureStore} from "@reduxjs/toolkit";
// import  index from "./reducers/index";
import {nightModeSlice} from "./slices/nightModeSlice";

const store = configureStore({
  reducer: {
    nightMode: nightModeSlice.reducer
  }
})

export default store