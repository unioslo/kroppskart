import { HYDRATE } from 'next-redux-wrapper';
import { ParsedUrlQuery } from 'querystring';
import { HydrateAction } from './hydrate';

export type AppState = {
  urlParameters: ParsedUrlQuery;
  sex: 'male' | 'female';
  initialized: boolean;
};

const appStateReducer = (
  state = { sex: 'female', urlParameters: {}, initialized: false } as AppState,
  action: AppStateActions
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...action.payload.app };
    case ActionTypes.ADD_PARAMETERS:
      return { ...state, urlParameters: action.payload };
    case ActionTypes.SET_SEX:
      return { ...state, sex: action.payload, initialized: true };
    default:
      return state;
  }
};

enum ActionTypes {
  ADD_PARAMETERS = 'ADD_PARAMETERS',
  SET_SEX = 'SET_SEX',
  HYDRATE = '',
}

export type AppStateActions = AddParameters | SetSex | HydrateAction<AppState>;

export const setSex = (sex: 'male' | 'female') =>
  ({ type: ActionTypes.SET_SEX, payload: sex } as const);
type SetSex = ReturnType<typeof setSex>;

export const addParameters = (parameters: ParsedUrlQuery) =>
  ({
    type: ActionTypes.ADD_PARAMETERS,
    payload: parameters,
  } as const);
type AddParameters = ReturnType<typeof addParameters>;

export default appStateReducer;
