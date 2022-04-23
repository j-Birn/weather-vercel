import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useCustomSelector } from "../../hooks/store";
import { useTheme } from "../../hooks/useTheme";
import { selectCurrentWeather } from "../../store/selectors/selectors";
import { changeCity } from "../../store/slices/currentWeatherSlice";
import { AppDispatch } from "../../store/store";
import { fetchWeather } from "../../store/thunks/fetchWeather";
import s from "./Header.module.scss";
type Props = {};
const Header = (props: Props) => {
  const theme = useTheme();
  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const dispatch = useDispatch<AppDispatch>();
  const weather = useCustomSelector(selectCurrentWeather);

  const [option, setOption] = useState<any>("moscow");

  useEffect(() => {
    dispatch(changeCity(option));
  }, [option]);

  useEffect(() => {
    dispatch(fetchWeather(weather.city));
  }, [weather.city]);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Погода</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.changeTheme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>

        <select
          className={s.select}
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="moscow">Москва</option>
          <option value="toronto">Торонто</option>
          <option value="berlin">Берлин</option>
        </select>

        {/* <FormControl fullWidth>
          <InputLabel>City</InputLabel>
          <Select
            sx={{
              bgcolor: "#fff",
            }}
            label="City"
          >
            <MenuItem value="moscow">moscow</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </Select>
        </FormControl> */}
      </div>
    </header>
  );
};

export default Header;
