import React from 'react';
import { useSelector } from 'react-redux';
import { MessageBoxDelivering } from '../src/components/messageBoxes';
import { rootState } from '../src/store/store';
import {
  postSubmission,
  submissionFromAnswerState,
} from '../src/utils/submissionUtils';

const getUrlParam = (param?: string | string[]) => {
  if (Array.isArray(param)) {
    return param[0];
  }
  return param;
};

const Done = () => {
  const { urlParameters, sex, initialized } = useSelector(
    (state: rootState) => state.app
  );
  const maps = useSelector((state: rootState) => state.body);
  const submissionId = getUrlParam(urlParameters.submissionId);
  const dataTarget = getUrlParam(urlParameters.dataTarget);

  const [delivering, setDelivering] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [delivered, setDelivered] = React.useState(false);

  let submission;
  if (initialized) {
    submission = submissionFromAnswerState(maps, sex, submissionId);
  }
  const disable = false;

  // for (const [key, value] of submission.entries()) {
  //   console.log(key, value);
  // }

  React.useEffect(() => {
    // TODO: Reenable to deliver data
    if (
      disable &&
      submission &&
      dataTarget &&
      !failed &&
      !delivering &&
      !delivered
    ) {
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
  }, [delivering, failed, delivered, setDelivering, setFailed, setDelivered]);

  return (
    <main className="container">
      <MessageBoxDelivering />
    </main>
  );
};

export default Done;
