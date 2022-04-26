import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
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

  const data = [
    { value: "moscow", label: "Москва" },
    { value: "berlin", label: "Берлин" },
    { value: "toronto", label: "Торонто" },
  ];

  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    menu: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? "#4F4F4F" : "#fff",
    }),
    option: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

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

        <Select
          value={data.find((obj) => obj.value === option)}
          onChange={(e) => setOption(e?.value)}
          defaultValue={data[0]}
          styles={selectStyles}
          options={data}
        />

        {/* <select
          className={s.select}
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="moscow">Москва</option>
          <option value="toronto">Торонто</option>
          <option value="berlin">Берлин</option>
        </select> */}
      </div>
    </header>
  );
};

export default Header;
