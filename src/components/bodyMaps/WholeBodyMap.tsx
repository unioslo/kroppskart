import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import style from './bodyMap.module.scss';

import { rootState } from '../../store/store';
import { bodyMaps, wholeBody } from './mapData';
import SVGContainer, { ClickablePolygon } from './SVGContainer';
import {
  initBodyMapValues,
  selectAllAreas,
  unselectAllAreas,
} from '../../store/bodyMapReducer';

const bodyMap = 'wholeBody';
const { wholeBodyMapParts, wholeBodyMapKeys } = wholeBody;
const wholeBodyMap = bodyMaps[bodyMap];

const WholeBodyMap = () => {
  const sex = useSelector((state: rootState) => state.app.sex);
  const { width, height, image } = wholeBodyMap;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(initBodyMapValues(bodyMap, wholeBodyMapKeys));
  }, []);
  return (
    <div className={style.bodyMapContainer}>
      <SVGContainer width={width} height={height}>
        {Object.entries(wholeBodyMapParts).map(([key, value]) => {
          return (
            <ClickablePolygon
              key={key}
              id={key}
              bodyMap="wholeBody"
              linkedWith={value?.linkedWith}
              points={value.points}
              alt={value.alt}
            />
          );
        })}
      </SVGContainer>
      <Image
        src={image[sex ?? 'male']}
        width={width}
        height={height}
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
