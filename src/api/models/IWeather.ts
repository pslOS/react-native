export interface IWeatherResponse {
  fromCache?: boolean;
  lon: number;
  lat: number;
  timezone: string;
  timezone_offset: number;
  current: ICurrentWeather;
  daily: IDailyWeather[];
}

export interface ICurrentWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  'feels_like': number;
  pressure: number;
  humidity: number;
  'dew_point': number;
  uvi: number;
  clouds: number;
  visibility: number;
  'wind_speed': number;
  'wind_deg': number;
  'wind_gust'?: number;
  weather: IWeather[];
  rain?: IVolume;
  snow?: IVolume;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IVolume {
  '1h': number;
}

export interface IDailyWeather {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: IDailyTemp;
  'feels_like': IDailyFeelTemp;
  pressure: number;
  humidity: number;
  'dew_point': number;
  'wind_speed': number;
  'wind_deg': number;
  'wind_gust'?: number;
  weather: IWeather[];
  clouds: number;
  pop: number;
  rain?: number;
  snow?: number;
  uvi: number;
}

export interface IDailyTemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface IDailyFeelTemp {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
