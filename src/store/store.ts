import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, createStore } from 'redux';
import { PersistState } from 'redux-persist';

import appStateReducer from './appStateReducer';
import bodyMapReducer from './bodyMapReducer';

const rootReducer = combineReducers({
  app: appStateReducer,
  body: bodyMapReducer,
});

export type rootState = ReturnType<typeof rootReducer> & {
  _persist: PersistState;
};

const makeConfiguredStore = (reducer) =>
  createStore(
    reducer,
    (typeof window !== 'undefined' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
      undefined
  );

const makeStore = () => {
  if (typeof document === 'undefined') {
    return makeConfiguredStore(rootReducer);
  }
  // we need it only on client side
  const { persistStore, persistReducer } = require('redux-persist');
  const storage = require('redux-persist/lib/storage').default;
  const persistConfig = {
    key: 'nextjs',
    whitelist: ['app', 'body', 'fromClient'], // make sure it does not clash with server keys
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = makeConfiguredStore(persistedReducer);

  // @ts-expect-error This is a hack recommended by next-redux-wrapper
  store.__persistor = persistStore(store); // Nasty hack

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
