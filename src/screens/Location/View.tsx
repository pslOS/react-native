import React, { useCallback, useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import removeAccents from 'remove-accents';

import I18n from '@i18n/index';
import { getCommonStyles } from '@styles/index';
import SafeAreaView from 'react-native-safe-area-view';
import { getStyles } from '@screens/Location/styles';
import { DefaultScreenNavigationProp } from '@navigation/types';
import { getCites, ICity } from '@const/actions';
import { Icon } from '@assets/index';
import { Units } from '@const/units';

interface Props {
  navigation: DefaultScreenNavigationProp;
  changeCity: (city: ICity) => void;
}

// tslint:disable-next-line:function-name
function Location(props: Props): JSX.Element {
  const allCities = getCites();

  const [search, setSearch] = useState('');
  const [results, setResults] = useState(allCities);

  const commonStyles = getCommonStyles();
  const styles = getStyles();

  const onItemPress = useCallback((city: ICity) => {
    props.changeCity(city);
    props.navigation.goBack();
      /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const renderItem = ({ item }: { item: ICity }) => {

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onItemPress.bind(undefined, item)}>
            <Text style={styles.city}>{item.name}</Text>
            <Text style={styles.temperature}>{`${item.temperature}${Units.TEMPERATURE}`}</Text>
        </TouchableOpacity>
    );
  };

  const onTextChange = (text: string) => {
    setSearch(text);
    setResults(
      allCities.filter(city => removeAccents(city.name.toLowerCase()).startsWith(removeAccents(text.toLowerCase())))
    );
  };

  return (
        <SafeAreaView style={commonStyles.defaultScreenContainer}>
            <View style={[commonStyles.contentContainer, styles.container]}>
                <Text style={styles.title}>{I18n.t('page.location.title')}</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        autoFocus
                        style={styles.textInput}
                        placeholder={I18n.t('general.text.search')}
                        placeholderTextColor={'#9F9F9F'}
                        maxLength={30}
                        onChangeText={onTextChange}
                        value={search}
                    />
                    <Image style={styles.icon} source={Icon.LOCATION_BLACK} />
                </View>
                <FlatList
                    data={results}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
  );
}

export default Location;
