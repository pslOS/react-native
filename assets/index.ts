const HEADER_COVER = require('@assets/graphic.png');

const SUNNY_ICON = require('@assets/sunny.png');
const CLOUDY_ICON = require('@assets/cloudy.png');
const FOGGY_ICON = require('@assets/fog.png');

const HUMIDITY_ICON = require('@assets/humidity.png');
const BAROMETER_ICON = require('@assets/barometer.png');
const WIND_ICON = require('@assets/wind.png');
const SUNRISE_ICON = require('@assets/sunrise.png');
const SUNSET_ICON = require('@assets/sunset.png');
const CLOCK_ICON = require('@assets/clock.png');
const LOCATION_ICON = require('@assets/location.png');
const LOCATION_BLACK_ICON = require('@assets/location_black.png');

export enum Background {
    HEADER = HEADER_COVER,
}

export enum WeatherIcon {
    SUN = SUNNY_ICON,
    CLOUD = CLOUDY_ICON,
    FOG = FOGGY_ICON,
}

export enum Icon {
    HUMIDITY = HUMIDITY_ICON,
    BAROMETER = BAROMETER_ICON,
    WIND = WIND_ICON,
    SUNRISE = SUNRISE_ICON,
    SUNSET = SUNSET_ICON,
    CLOCK = CLOCK_ICON,
    LOCATION = LOCATION_ICON,
    LOCATION_BLACK = LOCATION_BLACK_ICON,
    SUN = SUNNY_ICON,
    CLOUD = CLOUDY_ICON,
    FOG = FOGGY_ICON,
}

export interface WeatherMetric {
  icon: Icon;
  name: string;
  value: string;
}
