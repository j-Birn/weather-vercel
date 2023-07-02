import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeather } from "../../store/selectors/selectors";
import ThisDay from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";

const Home = () => {
  const weather = useCustomSelector(selectCurrentWeather);

  return (
    <div className={s.home}>
      <ThisDay weather={weather.weather} />
      <ThisDayInfo weather={weather.weather} />
    </div>
  );
};

export default Home;
