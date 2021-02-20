import { HYDRATE } from 'next-redux-wrapper';

export type HydrateAction = {
  type: typeof HYDRATE;
  payload: Record<string, unknown>;
};
