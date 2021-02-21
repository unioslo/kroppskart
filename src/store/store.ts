import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import appStateReducer from './appStateReducer';
import bodyMapReducer from './bodyMapReducer';

const rootReducer = combineReducers({
  app: appStateReducer,
  body: bodyMapReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

const makeStore = (initialState = {}) =>
  createStore(rootReducer, initialState, devToolsEnhancer({}));

export const wrapper = createWrapper(makeStore, { debug: false });
