import { HYDRATE } from 'next-redux-wrapper';
import { ParsedUrlQuery } from 'querystring';
import { HydrateAction } from './hydrate';

export type AppState = {
  urlParameters: ParsedUrlQuery;
  sex: 'male' | 'female';
  initialized: boolean;
  openModal: string;
};

const appStateReducer = (
  state = {
    sex: 'female',
    urlParameters: {},
    initialized: false,
    openModal: '',
  } as AppState,
  action: AppStateActions
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return state;
    //return { ...action.payload.app };
    case ActionTypes.ADD_PARAMETERS:
      return { ...state, urlParameters: action.payload };
    case ActionTypes.SET_SEX:
      return { ...state, sex: action.payload, initialized: true };
    case ActionTypes.OPEN_MODAL:
      return { ...state, openModal: action.payload };
    case ActionTypes.CLOSE_MODAL:
      return { ...state, openModal: '' };
    default:
      return state;
  }
};

enum ActionTypes {
  ADD_PARAMETERS = 'ADD_PARAMETERS',
  SET_SEX = 'SET_SEX',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

export type AppStateActions =
  | AddParameters
  | SetSex
  | OpenModal
  | CloseModal
  | HydrateAction<AppState>;

export const setSex = (sex: 'male' | 'female') =>
  ({ type: ActionTypes.SET_SEX, payload: sex } as const);
type SetSex = ReturnType<typeof setSex>;

export const addParameters = (parameters: ParsedUrlQuery) =>
  ({
    type: ActionTypes.ADD_PARAMETERS,
    payload: parameters,
  } as const);
type AddParameters = ReturnType<typeof addParameters>;

export const openModal = (type: string) =>
  ({ type: ActionTypes.OPEN_MODAL, payload: type } as const);
type OpenModal = ReturnType<typeof openModal>;

export const closeModal = () => ({ type: ActionTypes.CLOSE_MODAL } as const);
type CloseModal = ReturnType<typeof closeModal>;

export default appStateReducer;
