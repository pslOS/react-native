import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon, WeatherIcon } from '@assets/index';
import { getCommonStyles } from '@styles/index';

import { getStyles } from './styles';

type Props = {
  icon: Icon | WeatherIcon;
  name: string;
  value: string;
  cardStyle?: boolean;
};

export const Metric: FC<Props> = ({ icon, name, value, cardStyle = false }) => {
  const styles = getStyles();
  const commonStyles = getCommonStyles();

  return (
        <TouchableOpacity disabled={!cardStyle} style={cardStyle ? styles.cardStyleContainer : styles.container}>
            <View style={commonStyles.iconContainer}>
                <Image style={commonStyles.icon} source={icon} />
            </View>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
  );
};

export default Metric;
