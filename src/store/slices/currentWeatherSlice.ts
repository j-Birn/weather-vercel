import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Weather } from "../types/types";

type Response = {
  status: number;
  message: string;
};

type CurrenWeather = {
  city: string;
  weather: Weather;
  isLoading: boolean;
  response: Response;
};

const initialState: CurrenWeather = {
  city: "moscow",
  weather: {
    main: {
      temp: 0,
      feels_like: 0,
      pressure: 0,
    },
    name: "",
    weather: [
      {
        description: "",
      },
    ],
    wind: {
      speed: 0,
    },
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    changeCity(state, action) {
      state.city = action.payload;
    },
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSucces(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.weather = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export const {
  changeCity,
  fetchCurrentWeather,
  fetchCurrentWeatherSucces,
  fetchCurrentWeatherError,
} = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
