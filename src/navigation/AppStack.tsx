import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '@screens/Dashboard';
import Location from '@screens/Location';

import { ScreenNames } from './screenNames';

const Stack = createStackNavigator();

const withoutHeaderOptions = { headerShown: false };
const transparentModalOption = { cardStyle: { backgroundColor: 'transparent' }, gestureEnabled: true };

function getAppStackScreen(): JSX.Element {
  return (
      <Stack.Navigator
          mode='modal'
          initialRouteName={ScreenNames.Dashboard}
      >
          <Stack.Screen
              name={ScreenNames.Dashboard}
              component={Dashboard}
              options={withoutHeaderOptions}
          />
          <Stack.Screen
              name={ScreenNames.Location}
              component={Location}
              options={Object.assign(withoutHeaderOptions, transparentModalOption)}
          />
      </Stack.Navigator>
  );
}

export default getAppStackScreen;
