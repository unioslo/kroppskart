import { HYDRATE } from 'next-redux-wrapper';

export type HydrateAction<T> = {
  type: typeof HYDRATE;
  payload: Record<string, T>;
};
