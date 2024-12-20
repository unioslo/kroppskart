import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { setSex } from '../src/store/appStateReducer';
import { Button } from '../src/components/ui';
import useUrlParameters from '../src/utils/urlParameters';
import { MessageBoxIntro } from '../src/components/messageBoxes';
import { resetBodyMaps } from '../src/store/bodyMapReducer';
import { Trans } from '@lingui/macro';
import { useRouter } from 'next/router';

export default function Introduction() {
  useUrlParameters();
  const router = useRouter();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(resetBodyMaps());
  }, [dispatch]);

  React.useEffect(() => {
    router.prefetch('/bodymap');
  }, [router]);
  return (
    <main className="container">
      <MessageBoxIntro />
      <div>
        <Link passHref href={'/bodymap'}>
          <Button onClick={() => dispatch(setSex('female'))} type="female">
            <Trans>Kvinnekropp</Trans>
          </Button>
        </Link>
        <Link passHref href={'/bodymap'}>
          <Button onClick={() => dispatch(setSex('male'))} type="male">
            <Trans>Mannekropp</Trans>
          </Button>
        </Link>
      </div>
    </main>
  );
}
