import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import style from './bodyMap.module.scss';

import { bodyMaps, head } from './mapData';
import SVGContainer, { ClickablePolygon } from './SVGContainer';
import {
  initBodyMapValues,
  selectAllAreas,
  unselectAllAreas,
} from '../../store/bodyMapReducer';

const headJawMouthMap = 'headJawMouth';
const { headMapParts, headMapKeys } = head;
const headMap = bodyMaps[headJawMouthMap];

const HeadMap = () => {
  const { width, height, image } = headMap;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(initBodyMapValues(headJawMouthMap, headMapKeys));
  }, []);
  return (
    <div className={style.bodyMapContainer}>
      <SVGContainer width={width} height={height}>
        {Object.entries(headMapParts).map(([key, value]) => {
          return (
            <ClickablePolygon
              key={key}
              id={key}
              linkedWith={value?.linkedWith}
              bodyMap={headJawMouthMap}
              points={value.points}
              alt={value.alt}
            />
          );
        })}
      </SVGContainer>
      <Image src={image} width={width} height={height} id="jaw" />
      <button onClick={() => dispatch(selectAllAreas(headJawMouthMap))}>
        Velg alle
      </button>
      <button onClick={() => dispatch(unselectAllAreas(headJawMouthMap))}>
        Fjern alle
      </button>
    </div>
  );
};

export default HeadMap;
