import { Store, applyMiddleware, createStore } from 'redux';
import { Persistor, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from '@reducers/persist';
import { IAction } from '@const/actions';

import IStoreState from './IStoreState';

let store: Store<IStoreState, IAction>;
let persistor: Persistor;

export const getStore = (): Store => store;
export const getPersistor = (): Persistor => persistor;

export const generateStore = (): { store: Store<IStoreState>, persistor: Persistor } => {
  const middleware = [
    thunk,
  ];

  const appliedMiddleware  = applyMiddleware(...middleware);

  store = createStore(
    rootReducer,
    appliedMiddleware
  );

  persistor = persistStore(store);

  return { store, persistor };
};
