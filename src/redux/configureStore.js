import {configureStore} from "@reduxjs/toolkit";
// import  index from "./reducers/index";
import nightModeSlice from "./slices/nightModeSlice";
import menuItemsSlice from "./slices/menuItemsSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        nightMode: nightModeSlice,
        menuItems: menuItemsSlice,
        cart: cartSlice
    }
})

export default store