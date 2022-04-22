export type Weather = {
  city: string;
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
