import {configureStore} from "@reduxjs/toolkit";
// import  index from "./reducers/index";
import nightModeSlice from "./slices/nightModeSlice";
import languageSlice from "./slices/languageSlice";
import menuItemsSlice from "./slices/menuItemsSlice";
import cartSlice from "./slices/cartSlice";

import {localizeReducer } from "react-localize-redux";

const store = configureStore({
    reducer: {
        nightMode: nightModeSlice,
        language: languageSlice,
        menuItems: menuItemsSlice,
        cart: cartSlice,
    }
})

export default store