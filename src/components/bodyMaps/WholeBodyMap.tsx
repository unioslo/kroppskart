import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import style from './bodyMap.module.scss';

import { rootState } from '../../store/store';
import { wholeBodyMapKeys, wholeBodyMapParts } from './bodyMapPoints';
import SVGContainer, { ClickablePolygon } from './SVGContainer';
import {
  initBodyMapValues,
  selectAllAreas,
  unselectAllAreas,
} from '../../store/bodyMapReducer';

const WholeBodyMap = () => {
  const sex = useSelector((state: rootState) => state.app.sex);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(initBodyMapValues('wholeBody', wholeBodyMapKeys));
  }, []);
  return (
    <div className={style.bodyMapContainer}>
      <SVGContainer width={576} height={526}>
        {Object.entries(wholeBodyMapParts).map(([key, value]) => {
          return (
            <ClickablePolygon
              key={key}
              id={key}
              bodyMap="wholeBody"
              points={value.points}
              alt={value.alt}
            />
          );
        })}
      </SVGContainer>
      <Image
        src={sex === 'male' ? '/wholeBodyMale.png' : '/wholeBodyFemale.png'}
        width={576}
        height={526}
        useMap="#map"
        id="bodies"
      />
      <button onClick={() => dispatch(selectAllAreas('wholeBody'))}>
        Velg alle
      </button>
      <button onClick={() => dispatch(unselectAllAreas('wholeBody'))}>
        Fjern alle
      </button>
    </div>
  );
};

export default WholeBodyMap;
