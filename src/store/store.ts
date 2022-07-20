import { configureStore } from "@reduxjs/toolkit";
import currentWeatherSlice from "./slices/currentWeatherSlice";

export const store = configureStore({
  reducer: {
    weather: currentWeatherSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
