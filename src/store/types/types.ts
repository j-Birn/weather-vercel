export type Weather = {
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
  };
  weather: [
    {
      description: string;
    }
  ];
  wind: {
    speed: number;
  };
  name: string;
};
