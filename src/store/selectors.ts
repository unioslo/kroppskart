import { useSelector } from 'react-redux';
import { redundantBodyMapKeys } from '../utils/constants';
import { rootState } from './store';

export const useParamSelector = (paramName: string) => {
  const param = useSelector(
    (state: rootState) => state.app.urlParameters?.[paramName]
  );
  if (Array.isArray(param)) {
    return param[0];
  }
  return param;
};

type props = {
  maleParam?: string;
  femaleParam?: string;
  generalParam?: string;
};

export const usePossiblyGenderedParamSelector = ({
  maleParam,
  femaleParam,
  generalParam,
}: props) => {
  const params = useSelector((state: rootState) => state.app.urlParameters);
  const sex = useSelector((state: rootState) => state.app.sex);

  if (sex === 'female' && femaleParam && params[femaleParam]) {
    return params[femaleParam];
  } else if (sex === 'male' && maleParam && params[maleParam]) {
    return params[maleParam];
  } else {
    return params[generalParam];
  }
};

export const useFilteredBodyMapValues = (mapName: string) => {
  const map = useSelector((state: rootState) => state.body[mapName]);
  const redundantKeys = redundantBodyMapKeys[mapName];

  let filteredMap = map;

  if (map && redundantKeys) {
    const filteredEntries = Object.entries(map).filter(
      ([key, value]) => !redundantKeys.includes(key) && value
    );
    filteredMap = Object.fromEntries(filteredEntries);
  }

  return filteredMap;
};
