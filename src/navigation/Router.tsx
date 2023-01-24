import React, { ComponentClass, PureComponent, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from '@navigation/AppStack';

type Props = {};

class Router extends PureComponent<Props> {

  public render(): ReactNode {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
  }
}

export default Router as ComponentClass<Props>;
