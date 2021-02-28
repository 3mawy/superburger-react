import {configureStore} from "@reduxjs/toolkit";
// import  index from "./reducers/index";
import nightModeSlice from "./slices/nightModeSlice";
import languageSlice from "./slices/languageSlice";
import menuItemsSlice from "./slices/menuItemsSlice";
import cartSlice from "./slices/cartSlice";
import singleMenuItemSlice from "./slices/singleMenuItemSlice";


const store = configureStore({
    reducer: {
        nightMode: nightModeSlice,
        language: languageSlice,
        menuItems: menuItemsSlice,
        menuItem: singleMenuItemSlice,
        cart: cartSlice,
    }
})

export default store