import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { WeatherIcon } from '@assets/index';
import { getCommonStyles } from '@styles/index';

import { getStyles } from './styles';

type Props = {
  icon: WeatherIcon;
  value: string;
};

const Weather: FC<Props> = ({ icon, value }) => {
  const styles = getStyles();
  const commonStyles = getCommonStyles();

  return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image style={commonStyles.icon} source={icon} />
            </View>
            <Text style={styles.value}>{value}</Text>
        </View>
  );
};

export default Weather;
