import { HYDRATE } from 'next-redux-wrapper';

export type HydrateAction<T> = {
  type: typeof HYDRATE;
  payload: Record<string, T>;
};

export const SET_CLIENT_STATE = 'persist/REHYDRATE';
export const setClientState = (clientState: any) =>
  ({
    type: SET_CLIENT_STATE,
    payload: clientState,
  }) as const;
export type SetClientState = ReturnType<typeof setClientState>;
