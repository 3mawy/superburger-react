import {configureStore} from "@reduxjs/toolkit";
// import  index from "./reducers/index";
import {nightModeSlice} from "./slices/nightModeSlice";
import menuItemsSlice from "./slices/menuItemsSlice";

const store = configureStore({
    reducer: {
        nightMode: nightModeSlice.reducer,
        menuItems: menuItemsSlice.reducer
    }
})

export default store