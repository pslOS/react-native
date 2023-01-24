import { IWeatherResponse } from '@api/models/IWeather';
import { Units } from '@const/units';
import moment from 'moment';
import { WeatherIcon } from '@assets/index';

interface IFormattedCurrentWeatherData {
  weather: { icon: WeatherIcon, description: string  };
  currentTemp: string;
  minTemp: string;
  maxTemp: string;
  humidity: string;
  pressure: string;
  wind: string;
  sunrise: string;
  sunset: string;
  daytime: string;
}

interface IFormattedDailyWeatherData {
  icon: WeatherIcon;
  minTemp: string;
  maxTemp: string;
  date: string;
}

export const formatCurrentWeatherData = (response: IWeatherResponse): IFormattedCurrentWeatherData => {
  return {
    weather: {
      icon: getWeatherIcon(response.current.weather[0].icon),
      description: capitalizeFirstLetter(response.current.weather[0].main),
    },
    currentTemp: response.current.temp.toFixed(0),
    minTemp: response.daily[0].temp.min.toFixed(0) + Units.TEMPERATURE_MIN,
    maxTemp: response.daily[0].temp.max.toFixed(0) + Units.TEMPERATURE_MAX,
    humidity: response.current.humidity + Units.PERCENTAGE,
    pressure: response.current.pressure + Units.PRESSURE,
    wind: response.current.wind_speed + Units.SPEED,
    sunrise: moment(response.current.sunrise * 1000).format('h:mm A'),
    sunset: moment(response.current.sunset * 1000).format('h:mm A'),
    daytime: moment.unix(response.current.sunset - response.current.sunrise).utc().format('h[h]mm[m]'),
  };
};

export const formatForecastWeatherData = (response: IWeatherResponse, day: number): IFormattedDailyWeatherData => {
  return {
    icon: getWeatherIcon(response.daily[day].weather[0].icon),
    minTemp: response.daily[day].temp.min.toFixed(0) + Units.TEMPERATURE_MIN,
    maxTemp: response.daily[day].temp.max.toFixed(0) + Units.TEMPERATURE_MAX,
    date: moment.unix(response.daily[day].dt).utc().format('ddd, DD'),
  };
};

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getWeatherIcon(weather: string): WeatherIcon {
  if (['01d'].includes(weather)) { return WeatherIcon.SUN; }
  if (['50d'].includes(weather)) { return WeatherIcon.FOG; }

  return WeatherIcon.CLOUD;
}
