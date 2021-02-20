import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { setSex } from '../../store/appStateReducer';
import { Alert, Button } from '../ui';

export default function Introduction() {
  const dispatch = useDispatch();
  const setFemale = () => dispatch(setSex('female'));
  const setMale = () => dispatch(setSex('male'));
  return (
    <>
      <Alert>
        <p>
          På de neste sidene spør vi om smerter du har hatt de siste 4 ukene.
        </p>
        <p>
          Ta med alle typer smerter, både overfladiske og dype (i brystet,
          munnen, magen, huden, muskler og ledd, kjønnsorganer, urinveier, med
          flere).
        </p>
        <p>Ikke ta med forbigående, kortvarige smerter.</p>
        <p>Kvinner skal ikke ta med menstruasjonssmerter.</p>
      </Alert>
      <Alert>Har du kvinnekropp eller mannekropp? (Trykk for å velge)</Alert>
      <Link href={'/survey'}>
        <Button onClick={setFemale} type="female">
          Kvinnekropp
        </Button>
      </Link>
      <Link href={'/survey'}>
        <Button onClick={setMale} type="male">
          Mannekropp
        </Button>
      </Link>
    </>
  );
}
