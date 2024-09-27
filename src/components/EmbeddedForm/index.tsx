import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../../store/store';
import { useGetNextPage } from '../Navigator';
import { Button, NavigationButtons } from '../ui';

import style from './style.module.scss';
import { finishFollowup } from '../../store/appStateReducer';
import { Trans } from '@lingui/macro';

const getUrl = (formId: string, submissionId?: string) => {
  const referenceId = submissionId ? `&referenceId=${submissionId}` : '';
  return formId && `https://nettskjema.no/a/${formId}?embed=1${referenceId}`;
};
const useMessageListener = (deliverForm?: () => void) => {
  const [height, setHeight] = React.useState(1000);
  React.useEffect(() => {
    const handler = (event) => {
      if (event.data === 'scrollToStart') {
        deliverForm?.();
      } else if (!isNaN(Number.parseInt(event.data))) {
        setHeight(Number.parseInt(event.data) + 10);
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  });
  return height;
};

const EmbeddedForm = ({
  formId,
  pageName,
}: {
  formId: string;
  pageName: string;
}) => {
  const [toggle, setToggle] = React.useState(true);
  const dispatch = useDispatch();
  const { nextPage } = useGetNextPage('followup', pageName);
  const router = useRouter();
  const onSubmit = React.useCallback(() => {
    dispatch(finishFollowup(pageName));
    router.replace(nextPage);
  }, [nextPage, router, dispatch, pageName]);
  const sumbissionId = useSelector(
    (state: rootState) => state.app.urlParameters?.submissionId
  ) as string;
  React.useEffect(() => {
    if (!toggle) {
      setToggle(true);
    }
  }, [toggle, setToggle]);
  const height = useMessageListener(onSubmit);
  const url = getUrl(formId, sumbissionId);
  return (
    <div className={style.embedContainer}>
      {url ? (
        <>
          <Button id="reload-iframe" onClick={() => setToggle(false)}>
            Last inn skjema på nytt
          </Button>
          {toggle && (
            <iframe
              className="nettskjema-iframe"
              id="embeddedSurvey"
              style={{ height: height }}
              src={url}
              title="Embedded survey"
              frameBorder="0"
            >
              If you can read this, your browser does not support iframes.
            </iframe>
          )}
        </>
      ) : (
        <div>
          <h2>
            <Trans> Ingen spørsmål for disse valgene</Trans>
          </h2>
          <NavigationButtons nextPage={nextPage} />
        </div>
      )}
    </div>
  );
};

export default EmbeddedForm;
