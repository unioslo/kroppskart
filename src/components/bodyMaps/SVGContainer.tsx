import React from 'react';
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { changeBodyMapValue } from '../../store/bodyMapReducer';
import { rootState } from '../../store/store';

import style from './bodyMap.module.scss';

const SVGContainer = ({ width, height, children }) => (
  <div
    className={style.SVGContainer}
    style={{ maxWidth: width, height: height }}
  >
    <svg viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <pattern
          id="test"
          patternUnits="userSpaceOnUse"
          width="600"
          height="600"
        >
          <image
            href="/images/selectionPattern.png"
            x="0"
            y="0"
            width="600"
            height="600"
          />
        </pattern>
      </defs>
      {children}
    </svg>
  </div>
);

export const ClickablePolygon = ({ id, bodyMap, points, alt }) => {
  const selected = useSelector((state: rootState) => state.body[bodyMap]?.[id]);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(changeBodyMapValue(bodyMap, id, !selected));
  };
  return (
    <a
      onClick={onClick}
      onKeyUp={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          onClick();
        }
      }}
      tabIndex={0}
      className={cn(selected && style.selected)}
    >
      <figcaption>{alt}</figcaption>
      <polygon id={id} points={points} />
    </a>
  );
};

export default SVGContainer;
