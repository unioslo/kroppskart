import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { addParameters } from '../store/appStateReducer';
import { rootState } from '../store/store';

export const useUrlParameters = () => {
  const router = useRouter();
  const parameters = useSelector((state: rootState) => state.app.urlParameters);
  const dispatch = useDispatch();

  const query = router.query;
  React.useEffect(() => {
    if (!parameters || (parameters && Object.values(parameters).length === 0)) {
      dispatch(addParameters(query));
    }
  }, [query, parameters, dispatch, addParameters]);
};

export default useUrlParameters;
