import { persistReducer } from 'redux-persist';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appReducer } from '@reducers/index';

const persistConfig = {
  storage: AsyncStorage,
  key: 'REDUX',
  whitelist: ['city'],
};

const reducer = persistReducer(persistConfig, appReducer);

export default reducer;
