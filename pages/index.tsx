import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { setSex } from '../src/store/appStateReducer';
import { Button } from '../src/components/ui';
import useUrlParameters from '../src/utils/urlParameters';
import { MessageBoxIntro } from '../src/components/messageBoxes';

export default function Introduction() {
  useUrlParameters();
  const dispatch = useDispatch();
  const setFemale = () => dispatch(setSex('female'));
  const setMale = () => dispatch(setSex('male'));
  return (
    <div className="container">
      <MessageBoxIntro />
      <div>
        <Link href={'/bodymap'}>
          <Button onClick={setFemale} type="female">
            Kvinnekropp
          </Button>
        </Link>
        <Link href={'/bodymap'}>
          <Button onClick={setMale} type="male">
            Mannekropp
          </Button>
        </Link>
      </div>
    </div>
  );
}
