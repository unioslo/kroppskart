import React from 'react';
import { useSelector } from 'react-redux';

import { rootState } from '../../store/store';
import { Button } from '../ui';

import style from './style.module.scss';

const getUrl = (formId: string, submissionId?: string) =>
  `https://nettskjema/a/${formId}?embed=1${'&referenceId' + submissionId}`;

const useHeightListener = (deliverForm?: () => void) => {
  const [height, setHeight] = React.useState(0);
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

const EmbeddedForm = ({ formId }: { formId: string }) => {
  const [toggle, setToggle] = React.useState(true);
  const sumbissionId = useSelector(
    (state: rootState) => state.app.urlParameters?.submissionId
  ) as string;
  React.useEffect(() => {
    if (!toggle) {
      setToggle(true);
    }
  }, [toggle, setToggle]);
  const height = useHeightListener();
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
          <h2>Ingen spørsmål for disse valgene</h2>
          {/* <NavigationButtons /> */}
        </div>
      )}
    </div>
  );
};

export default EmbeddedForm;
