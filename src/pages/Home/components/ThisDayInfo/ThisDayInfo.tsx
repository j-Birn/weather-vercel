import React from "react";
import { Weather } from "../../../../store/types/types";
import s from "./ThisDayInfo.module.scss";
import { ThisDayItem } from "./ThisDayItem";

interface Props {
  weather: Weather;
}

export interface Item {
  icon_id: string;
  name: string;
  value: any;
}

export const ThisDayInfo = ({ weather }: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(weather.main.temp)}° , ощущается как ${Math.floor(
        weather.main.feels_like
      )}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${weather.main.pressure} мм ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: weather.weather[0].description,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${weather.wind.speed} м/с `,
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
    </div>
  );
};
