import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import style from './bodyMap.module.scss';

import { rootState } from '../../store/store';
import { addBodyMapValues } from '../../store/bodyMapReducer';
import { wholeBodyMapParts } from './bodyMapPoints';
import SVGContainer from './SVGContainer';

const ClickablePolygon = ({ id, bodyMap, points }) => {
  const selected = useSelector((state: rootState) => state.body[bodyMap]?.[id]);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addBodyMapValues(bodyMap, id, !selected));
  };
  return (
    <a onClick={onClick} className={cn(selected && style.selected)}>
      <polygon id={id} points={points} />
    </a>
  );
};

const WholeBodyMap = () => {
  const sex = useSelector((state: rootState) => state.app.sex);
  return (
    <div className={style.bodyMapContainer}>
      <SVGContainer width={576} height={526}>
        {Object.entries(wholeBodyMapParts).map(([key, value]) => {
          if (
            (key === 'crotch-female' && sex !== 'female') ||
            (key === 'crotch-male' && sex !== 'male')
          ) {
            return null;
          }
          return (
            <ClickablePolygon
              key={key}
              id={key}
              bodyMap="wholeBody"
              points={value}
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
    </div>
  );
};

export default WholeBodyMap;
