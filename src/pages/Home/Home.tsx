import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeather } from "../../store/selectors/selectors";
import { AppDispatch } from "../../store/store";
import { fetchWeather } from "../../store/thunks/fetchWeather";
import ThisDay from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";
type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const weather = useCustomSelector(selectCurrentWeather);
  console.log(weather);

  useEffect(() => {
    dispatch(fetchWeather("novosibirsk"));
  }, []);

  return (
    <>
      <div className={s.home}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      {/* <Days /> */}
    </>
  );
};

export default Home;
