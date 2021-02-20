import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import appStateReducer from './appStateReducer';

const rootReducer = combineReducers({ app: appStateReducer });

export type rootState = ReturnType<typeof rootReducer>;

const makeStore = (initialState = {}) =>
  createStore(rootReducer, initialState, devToolsEnhancer({}));

export const wrapper = createWrapper(makeStore, { debug: true });
