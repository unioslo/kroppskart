import { HYDRATE } from 'next-redux-wrapper';
import { ParsedUrlQuery } from 'querystring';
import { HydrateAction } from './hydrate';

export type AppState = {
  urlParameters: ParsedUrlQuery;
  sex: 'male' | 'female';
};

const bodyMapReducer = (state = {} as AppState, action: BodyMapActions) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    case ActionTypes.ADD_BODY_MAP_VALUES: {
      const { bodyMap, id, value } = action.payload;
      return { ...state, [bodyMap]: { ...state[bodyMap], [id]: value } };
    }
    default:
      return state;
  }
};

enum ActionTypes {
  ADD_BODY_MAP_VALUES = 'ADD_BODY_MAP_VALUES',
  HYDRATE = '',
}

type BodyMapActions = AddBodyMapValues | HydrateAction;

export const addBodyMapValues = (bodyMap: string, id: string, value: boolean) =>
  ({
    type: ActionTypes.ADD_BODY_MAP_VALUES,
    payload: { bodyMap, id, value },
  } as const);
type AddBodyMapValues = ReturnType<typeof addBodyMapValues>;

export default bodyMapReducer;
