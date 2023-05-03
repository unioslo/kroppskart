import { useRouter } from 'next/router';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MessageBoxDelivering } from '../src/components/messageBoxes';
import { rootState } from '../src/store/store';
import { submissionFromAnswerState } from '../src/utils/submissionUtils';
import { resetAppState } from '../src/store/appStateReducer';
import { resetBodyMaps } from '../src/store/bodyMapReducer';
import { getUrlParam } from '../src/utils/routingUtils';
import { Alert, Button } from '../src/components/ui';
import { allAnswersFalse } from '../src/utils/mapUtils';
import { createSubmissionAndPost } from '@uio-appu/nettskjema-utils';

const Done = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { urlParameters, sex, initialized } = useSelector(
    (state: rootState) => state.app
  );
  const maps = useSelector((state: rootState) => state.body);
  const submissionId = getUrlParam(urlParameters.submissionId);
  const dataTarget = getUrlParam(urlParameters.dataTarget);
  const followUpSurvey = getUrlParam(urlParameters.FollowUpSurvey);
  const noPain = getUrlParam(urlParameters.NoPain);
  const noAreasSelected = !maps?.wholeBody || allAnswersFalse(maps.wholeBody);

  const [delivering, setDelivering] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [delivered, setDelivered] = React.useState(false);
  const [isClient, setIsClient] = React.useState(typeof window !== 'undefined');
  let submission;
  if (initialized && typeof window !== 'undefined') {
    submission = submissionFromAnswerState(maps, sex, submissionId);
  }

  // for (const [key, value] of submission.entries()) {
  //   console.log(key, value);
  // }

  React.useEffect(() => {
    if (!isClient) {
      setIsClient(typeof window !== 'undefined');
    }
    const hasSufficientData = !!(submission && dataTarget);
    const shouldDeliver = !failed && !delivering && !delivered;

    if (isClient && hasSufficientData && shouldDeliver) {
      try {
        createSubmissionAndPost(dataTarget, submission, 'prod')
          .then(() => {
            setDelivered(true);
            setDelivering(false);
            setFailed(false);
          })
          .catch((e) => {
            setFailed(true);
            setDelivering(false);
            console.error(e);
          });
      } catch (e) {
        setFailed(true);
        setDelivering(false);
      }
    }
  }, [
    isClient,
    delivering,
    failed,
    delivered,
    setDelivering,
    setFailed,
    setDelivered,
    submissionId,
    submission,
    dataTarget,
  ]);

  React.useEffect(() => {
    const referenceId = submissionId ? `?referenceId=${submissionId}` : '';
    if (delivered && noPain && noAreasSelected) {
      dispatch(resetBodyMaps());
      dispatch(resetAppState());
      router.push(`https://nettskjema.no/a/${noPain}${referenceId}`);
    } else if (delivered && followUpSurvey) {
      dispatch(resetBodyMaps());
      dispatch(resetAppState());
      router.push(`https://nettskjema.no/a/${followUpSurvey}${referenceId}`);
    }
  }, [
    delivered,
    followUpSurvey,
    noPain,
    noAreasSelected,
    submissionId,
    dispatch,
    router,
  ]);

  return (
    <main className="container">
      {(delivering || (!delivering && !failed && !delivered && dataTarget)) && (
        <MessageBoxDelivering />
      )}
      {failed && (
        <Alert type="warning">
          <p>Levering mislykket.</p>
          <Button type="retryButton" onClick={() => setFailed(false)}>
            Trykk her for å prøve å levere på nytt.
          </Button>
        </Alert>
      )}
      {(!dataTarget || (delivered && !followUpSurvey)) && (
        <Alert>
          <p>
            Takk for deltagelsen i undersøkelsen! Du kan nå lukke nettleseren.
          </p>
        </Alert>
      )}
      {delivered && (followUpSurvey || (noPain && noAreasSelected)) && (
        <Alert>
          Takk for deltagelsen i undersøkelsen! Du vil bli tatt videre til en
          oppfølgning.
        </Alert>
      )}
    </main>
  );
};

export default Done;
