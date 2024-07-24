import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./product/apiProducts";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware),
});

setupListeners(store.dispatch);
