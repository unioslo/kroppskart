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
  }, []);
  return (
    <main className="container">
      <MessageBoxIntro />
      <div>
        <Link href={'/bodymap'}>
          <Button onClick={() => dispatch(setSex('female'))} type="female">
            Kvinnekropp
          </Button>
        </Link>
        <Link href={'/bodymap'}>
          <Button onClick={() => dispatch(setSex('male'))} type="male">
            Mannekropp
          </Button>
        </Link>
      </div>
    </main>
  );
}
