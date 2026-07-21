import { configureStore } from "@reduxjs/toolkit"
import loadingSlice from "./slices/loadingSlice"
import popupSlice from "./slices/popupSlice"
import categoriesSlice from "./slices/categoriesSlice"
import productsSlice from "./slices/productsSlice"
import reviewsSlice from "./slices/reviewsSlice"
import partnersSlice from "./slices/partnersSlice"

export const store = configureStore({
    reducer: {
        loading: loadingSlice,
        popup: popupSlice,
        categories: categoriesSlice,
        products: productsSlice,
        reviews: reviewsSlice,
        partners: partnersSlice,
    },
})