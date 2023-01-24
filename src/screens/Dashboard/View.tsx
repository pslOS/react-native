import React, { FC, useEffect, useState } from 'react';
import moment from 'moment';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import I18n from '@i18n/index';
import { getCommonStyles } from '@styles/index';
import { getStyles } from '@screens/Dashboard/styles';
import { DefaultScreenNavigationProp } from '@navigation/types';
import { ScreenNames } from '@navigation/screenNames';
import { Background, Icon } from '@assets/index';
import Metric from '@components/Metric';
import Weather from '@components/Weather';
import SafeAreaView from 'react-native-safe-area-view';
import { IWeatherResponse } from '@api/models/IWeather';
import Api from '@api/index';
import { Units } from '@const/units';
import {
  formatCurrentWeatherData,
  formatForecastWeatherData,
} from '@screens/Dashboard/helpers';
import { ICoordinates } from '@const/actions';
import { useApi } from '@hooks/useApi';

interface Props {
  navigation: DefaultScreenNavigationProp;
  cityName: string;
  cityCoordinates: ICoordinates;
}

const Dashboard: FC<Props> = ({ cityName, navigation, cityCoordinates }) => {
  const commonStyles = getCommonStyles();
  const styles = getStyles();
  const { call, loading } = useApi();
  const [weatherInfo, setWeatherInfo] = useState<IWeatherResponse | null>();

  useEffect(() => {
    async function getWeather() {
      const weather = await call<IWeatherResponse>(
        Api.getWeatherWithForecast(cityCoordinates)
      );
      setWeatherInfo(weather);
    }

    getWeather();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [cityCoordinates]);

  const onLocationPress = () => navigation.navigate(ScreenNames.Location);

  const getDate = () => moment().format('dddd, D MMM YYYY  |  h:mmA');

  const renderLoading = () => (
    <ActivityIndicator style={styles.loading} size='large' color='#999999' />
  );

  const renderForecastFor3Days = () => {
    const items: JSX.Element[] = [];

    for (let day = 1; day <= 3; day++) {
      const { icon, minTemp, maxTemp, date } = formatForecastWeatherData(
        weatherInfo!,
        day
      );
      items.push(
        <Metric
          key={day}
          cardStyle
          icon={icon}
          name={`  ${maxTemp}  ${minTemp}`}
          value={date}
        />
      );
    }

    return <>{items}</>;
  };

  const renderInfo = () => {
    const {
      weather,
      currentTemp,
      maxTemp,
      minTemp,
      humidity,
      pressure,
      wind,
      sunrise,
      sunset,
      daytime,
    } = formatCurrentWeatherData(weatherInfo!);

    return (
      <ScrollView style={styles.bottomContainer}>
        {weatherInfo?.fromCache && (
          <Text style={styles.info}>{'•••••'}</Text>
        )}
        <View style={styles.row}>
          <Weather icon={weather.icon} value={weather.description} />
          <View style={styles.currentTemperatureContainer}>
            <Text style={styles.temperatureSign}>{' '}</Text>
            <Text style={styles.currentTemperature}>{currentTemp}</Text>
            <Text style={styles.temperatureUnit}>{Units.TEMPERATURE}</Text>
          </View>
          <View style={styles.todayTemperatureContainer}>
            <Text style={styles.todayTemperature}>{maxTemp}</Text>
            <Text style={styles.todayTemperature}>{minTemp}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Metric
            icon={Icon.HUMIDITY}
            name={I18n.t('general.text.humidity')}
            value={humidity}
          />
          <Metric
            icon={Icon.BAROMETER}
            name={I18n.t('general.text.pressure')}
            value={pressure}
          />
          <Metric
            icon={Icon.WIND}
            name={I18n.t('general.text.wind')}
            value={wind}
          />
        </View>
        <View style={styles.row}>
          <Metric
            icon={Icon.SUNRISE}
            name={I18n.t('general.text.sunrise')}
            value={sunrise}
          />
          <Metric
            icon={Icon.SUNSET}
            name={I18n.t('general.text.sunset')}
            value={sunset}
          />
          <Metric
            icon={Icon.CLOCK}
            name={I18n.t('general.text.daytime')}
            value={daytime}
          />
        </View>
        <View style={styles.rowForecast}>{renderForecastFor3Days()}</View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={commonStyles.defaultScreenContainer}>
      <Image style={commonStyles.headerImage} source={Background.HEADER} />
      <View style={[commonStyles.contentContainer, styles.container]}>
        <View style={styles.topContainer}>
          <Text style={styles.date}>{getDate()}</Text>
          <TouchableOpacity
            style={styles.locationContainer}
            onPress={onLocationPress}
          >
            <Text style={styles.location}>{cityName}</Text>
            <Image style={styles.icon} source={Icon.LOCATION} />
          </TouchableOpacity>
        </View>
        {loading ? renderLoading() : weatherInfo ? renderInfo() : <View />}
        {/*{error && <Text style={styles.error}> {error}</Text>}*/}
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
