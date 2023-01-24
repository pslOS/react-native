import React, { PureComponent } from 'react';
import { generateStore } from '@store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@i18n/index';
import 'react-native-gesture-handler';
import Router from '@navigation/Router';
import Toast from 'react-native-toast-message';

const { store, persistor } = generateStore();

class App extends PureComponent {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router />
            <Toast />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
