import { useSelector } from 'react-redux';
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
  male?: string;
  female?: string;
  general?: string;
};

export const usePossiblyGenderedParamSelector = ({
  male,
  female,
  general,
}: props) => {
  const params = useSelector((state: rootState) => state.app.urlParameters);
  const sex = useSelector((state: rootState) => state.app.sex);

  if (sex === 'female' && female && params[female]) {
    return params[female];
  } else if (sex === 'male' && male && params[male]) {
    return params[male];
  } else {
    return params[general];
  }
};

export const useGetBodyMap = (mapName: string) => {
  const map = useSelector((state: rootState) => state.body[mapName]);
  return map;
};
