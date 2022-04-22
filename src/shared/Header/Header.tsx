import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import { changeCity } from "../../store/slices/currentWeatherSlice";
import s from "./Header.module.scss";
type Props = {};

const Header = (props: Props) => {
  const theme = useTheme();

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71,147,255,0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
      cursor: "pointer",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
    menuList: (styles: any) => ({
      ...styles,

      backgroundColor: theme.theme === Theme.DARK ? "#4f4f4f" : "#fff",
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const options = [
    { value: "moscow", label: "Moscow" },
    { value: "novosibirsk", label: "Novosibirsk" },
    { value: "yakutsk", label: "Yakutsk" },
  ];

  const dispacchio = useDispatch();

  const [option, setOption] = useState<any>("moscow");

  const handleChange = (obj: any) => {
    setOption(obj.value);
    console.log(option);
    dispacchio(changeCity(option));
  };

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
          value={options.find((obj) => obj.value === option)}
          onChange={handleChange}
          options={options}
          placeholder="Choose your city"
          styles={colorStyles}
        />
      </div>
    </header>
  );
};

export default Header;
