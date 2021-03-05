import { useRouter } from 'next/router';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { MessageBoxDelivering } from '../src/components/messageBoxes';
import { rootState } from '../src/store/store';
import {
  postSubmission,
  submissionFromAnswerState,
} from '../src/utils/submissionUtils';
import { resetAppState } from '../src/store/appStateReducer';
import { resetBodyMaps } from '../src/store/bodyMapReducer';
import { getUrlParam } from '../src/utils/routingUtils';

const useGetForm = (formId?: string) => {
  const { data, error } = useSWR(
    formId ? `/kroppskart/api/codebook?formId=${formId}` : null,
    (url: string) =>
      fetch(url)
        .then((r) => r.json())
        .then((j) => j.codebook)
  );

  return {
    codebookMap: data,
    isLoading: !data && !error,
    error,
  };
};

const Done = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { urlParameters, sex, initialized } = useSelector(
    (state: rootState) => state.app
  );
  const maps = useSelector((state: rootState) => state.body);
  const submissionId = getUrlParam(urlParameters.submissionId);
  const dataTarget = getUrlParam(urlParameters.dataTarget);
  const followUpSurvey = getUrlParam(urlParameters.followUpSurvey);

  const [delivering, setDelivering] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [delivered, setDelivered] = React.useState(false);

  const { codebookMap } = useGetForm(dataTarget);

  let submission;
  if (initialized && codebookMap) {
    submission = submissionFromAnswerState(
      maps,
      sex,
      submissionId,
      codebookMap
    );
  }

  // for (const [key, value] of submission.entries()) {
  //   console.log(key, value);
  // }

  React.useEffect(() => {
    // TODO: Reenable to deliver data
    const hasSufficientData = !!(codebookMap && submission && dataTarget);
    const shouldDeliver = !failed && !delivering && !delivered;

    if (hasSufficientData && shouldDeliver) {
      try {
        postSubmission(dataTarget, submission, submissionId)
          .then((res) => res.json())
          .then((json) => {
            if (json.status === 'success') {
              setDelivered(true);
              setDelivering(false);
              setFailed(false);
            } else {
              setFailed(true);
              setDelivering(false);
            }
          });
      } catch (e) {
        setFailed(true);
        setDelivering(false);
      }
    }
  }, [
    codebookMap,
    delivering,
    failed,
    delivered,
    setDelivering,
    setFailed,
    setDelivered,
  ]);

  React.useEffect(() => {
    if (delivered && followUpSurvey) {
      dispatch(resetBodyMaps());
      dispatch(resetAppState());
      router.push(`https://nettskjema.no/a/${followUpSurvey}`);
    }
  }, [delivered, followUpSurvey]);

  return (
    <main className="container">
      <MessageBoxDelivering />
    </main>
  );
};

export default Done;
