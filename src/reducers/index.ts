import { combineReducers } from 'redux';

import IStoreState from '@store/IStoreState';
import city from '@reducers/city';

export const appReducer = combineReducers<IStoreState>({
  city,
});
