import { HYDRATE } from 'next-redux-wrapper';
import { SurveyParams } from '../utils/constants';
import { HydrateAction, SetClientState, SET_CLIENT_STATE } from './hydrate';

export type AppState = {
  urlParameters: SurveyParams;
  sex: 'male' | 'female';
  initialized: boolean;
  openModal: string;
  followUpDone: Record<string, boolean>;
};

const appStateReducer = (
  state = {
    sex: 'female',
    urlParameters: {},
    initialized: false,
    followUpDone: {},
    openModal: '',
  } as AppState,
  action: AppStateActions
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return state;
    //return { ...action.payload.app };
    case SET_CLIENT_STATE:
      return { ...action.payload?.app, rehydrated: true };
    case ActionTypes.ADD_PARAMETERS:
      if (action.payload.submissionId !== state.urlParameters?.submissionId) {
        return { ...state, followUpDone: {}, urlParameters: action.payload };
      }
      return { ...state, urlParameters: action.payload };
    case ActionTypes.SET_SEX:
      return { ...state, sex: action.payload, initialized: true };
    case ActionTypes.OPEN_MODAL:
      return { ...state, openModal: action.payload };
    case ActionTypes.CLOSE_MODAL:
      return { ...state, openModal: '' };
    case ActionTypes.RESET_APP_STATE:
      return {
        ...state,
        initialized: false,
        urlParameters: {},
        followUpDone: {},
      };
    case ActionTypes.FINISH_FOLLOWUP:
      if (!state.followUpDone) {
        return { ...state, followUpDone: { [action.payload]: true } };
      }
      return {
        ...state,
        followUpDone: { ...state.followUpDone, [action.payload]: true },
      };
    default:
      return state;
  }
};

enum ActionTypes {
  ADD_PARAMETERS = 'ADD_PARAMETERS',
  SET_SEX = 'SET_SEX',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  RESET_APP_STATE = 'RESET_APP_STATE',
  FINISH_FOLLOWUP = 'FINISH_FOLLOWUP',
}

export type AppStateActions =
  | AddParameters
  | SetSex
  | OpenModal
  | CloseModal
  | SetClientState
  | ResetAppState
  | FinishFollowup
  | HydrateAction<AppState>;

export const finishFollowup = (area: string) =>
  ({ type: ActionTypes.FINISH_FOLLOWUP, payload: area }) as const;
type FinishFollowup = ReturnType<typeof finishFollowup>;

export const setSex = (sex: 'male' | 'female') =>
  ({ type: ActionTypes.SET_SEX, payload: sex }) as const;
type SetSex = ReturnType<typeof setSex>;

export const addParameters = (parameters: SurveyParams) =>
  ({
    type: ActionTypes.ADD_PARAMETERS,
    payload: parameters,
  }) as const;
type AddParameters = ReturnType<typeof addParameters>;

export const openModal = (type: string) =>
  ({ type: ActionTypes.OPEN_MODAL, payload: type }) as const;
type OpenModal = ReturnType<typeof openModal>;

export const closeModal = () => ({ type: ActionTypes.CLOSE_MODAL }) as const;
type CloseModal = ReturnType<typeof closeModal>;

export const resetAppState = () =>
  ({ type: ActionTypes.RESET_APP_STATE }) as const;
type ResetAppState = ReturnType<typeof resetAppState>;

export default appStateReducer;
