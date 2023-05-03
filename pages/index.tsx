import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { setSex } from '../src/store/appStateReducer';
import { Button } from '../src/components/ui';
import useUrlParameters from '../src/utils/urlParameters';
import { MessageBoxIntro } from '../src/components/messageBoxes';
import { resetBodyMaps } from '../src/store/bodyMapReducer';

export default function Introduction() {
  useUrlParameters();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(resetBodyMaps());
  }, [dispatch]);
  // React.useEffect(() => {
  //   const json = {
  //     metadata: { elapsedTime: 10755 },
  //     answers: [{ type: 'TEXT', questionId: 1578117, text: 'test' }],
  //   };

  //   fetch('https://nettskjema-dev.uio.no/api/v3/form/1209967/submission', {
  //     body: JSON.stringify(json),
  //     method: 'post',
  //   });
  //   fetch('https://nettskjema-dev.uio.no/api/v3/private/deliver/form/1209967', {
  //     body: JSON.stringify(json),
  //     method: 'post',
  //   });
  // }, []);
  return (
    <main className="container">
      <MessageBoxIntro />
      <div>
        <Link passHref href={'/bodymap'}>
          <Button onClick={() => dispatch(setSex('female'))} type="female">
            Kvinnekropp
          </Button>
        </Link>
        <Link passHref href={'/bodymap'}>
          <Button onClick={() => dispatch(setSex('male'))} type="male">
            Mannekropp
          </Button>
        </Link>
      </div>
    </main>
  );
}
