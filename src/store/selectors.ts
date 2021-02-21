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
