import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from "../store/types/types";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;
const request = `${API_URL}weather?lat=35&lon=139&appid=${API_KEY}`;

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }
}

console.log(request);
