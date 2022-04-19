import { WeatherService } from "../../services/WeatherService";
import {
  fetchCurrentWeather,
  fetchCurrentWeatherError,
  fetchCurrentWeatherSucces,
} from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchCurrentWeather());
      const res = await WeatherService.getCurrentWeather(payload);
      if (res.status === 200) {
        dispatch(fetchCurrentWeatherSucces(res));
      } else {
        dispatch(fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
