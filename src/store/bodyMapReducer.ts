import { HYDRATE } from 'next-redux-wrapper';
import { HydrateAction } from './hydrate';

export type BodyMapState = {
  [key: string]: Record<string, Record<string, boolean>>;
};

const bodyMapReducer = (state = {} as BodyMapState, action: BodyMapActions) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    case ActionTypes.INIT_BODY_MAP_VALUES: {
      const initializedBodyMap = action.payload.keys.reduce((acc, val) => {
        acc[val] = false;
        return acc;
      }, {});
      return {
        ...state,
        [action.payload.bodyMap]: {
          ...initializedBodyMap,
          ...state[action.payload.bodyMap],
        },
      };
    }
    case ActionTypes.CHANGE_BODY_MAP_VALUE: {
      const { bodyMap, id, value } = action.payload;
      return { ...state, [bodyMap]: { ...state[bodyMap], [id]: value } };
    }
    case ActionTypes.SELECT_ALL_AREAS: {
      const map = state[action.payload];
      const allSelected = Object.keys(map).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
      return { ...state, [action.payload]: allSelected };
    }
    case ActionTypes.UNSELECT_ALL_AREAS: {
      const map = state[action.payload];
      const allEntriesToFalse = Object.entries(map).map(([key]) => [
        key,
        false,
      ]);
      const allUnselected = Object.fromEntries(allEntriesToFalse);
      return { ...state, [action.payload]: allUnselected };
    }
    default:
      return state;
  }
};

enum ActionTypes {
  INIT_BODY_MAP_VALUES = 'INIT_BODY_MAP_VALUES',
  CHANGE_BODY_MAP_VALUE = 'CHANGE_BODY_MAP_VALUES',
  SELECT_ALL_AREAS = 'SELECT_ALL_AREAS',
  UNSELECT_ALL_AREAS = 'UNSELECT_ALL_AREAS',
  HYDRATE = '',
}

type BodyMapActions =
  | ChangeBodyMapValues
  | InitBodyMapValues
  | SelectAllAreas
  | UnselectAllAreas
  | HydrateAction<BodyMapState>;

export const initBodyMapValues = (bodyMap: string, keys: string[]) =>
  ({
    type: ActionTypes.INIT_BODY_MAP_VALUES,
    payload: { bodyMap, keys },
  } as const);
type InitBodyMapValues = ReturnType<typeof initBodyMapValues>;

export const changeBodyMapValue = (
  bodyMap: string,
  id: string,
  value: boolean
) =>
  ({
    type: ActionTypes.CHANGE_BODY_MAP_VALUE,
    payload: { bodyMap, id, value },
  } as const);
type ChangeBodyMapValues = ReturnType<typeof changeBodyMapValue>;

export const selectAllAreas = (bodyMap: string) =>
  ({ type: ActionTypes.SELECT_ALL_AREAS, payload: bodyMap } as const);
type SelectAllAreas = ReturnType<typeof selectAllAreas>;

export const unselectAllAreas = (bodyMap: string) =>
  ({ type: ActionTypes.UNSELECT_ALL_AREAS, payload: bodyMap } as const);
type UnselectAllAreas = ReturnType<typeof unselectAllAreas>;

export default bodyMapReducer;
