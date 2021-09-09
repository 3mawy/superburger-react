import userSlice from "./slices/userSlice";
import nightModeSlice from "./slices/nightModeSlice";
import languageSlice from "./slices/languageSlice";
import carouselImageSlice from "./slices/carouselImageSlice";
import categoriesSlice from "./slices/categoriesSlice";
import extrasSlice from "./slices/extrasSlice";
import menuItemsSlice from "./slices/menuItemsSlice";
import offersSlice from "./slices/offersSlice";
import singleMenuItemSlice from "./slices/singleMenuItemSlice";
import singleOfferSlice from "./slices/singleOfferSlice";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";
import {combineReducers} from "@reduxjs/toolkit";
// import customerSlice from "./slices/customerSlice";

const reducers_collection = {
    user: userSlice,
    // customer: customerSlice,
    nightMode: nightModeSlice,
    language: languageSlice,
    carouselImages: carouselImageSlice,
    categories: categoriesSlice,
    extras: extrasSlice,
    menuItems: menuItemsSlice,
    offers: offersSlice,
    menuItem: singleMenuItemSlice,
    offer: singleOfferSlice,
    cart: cartSlice,
    order: orderSlice
}

export default combineReducers(reducers_collection);
