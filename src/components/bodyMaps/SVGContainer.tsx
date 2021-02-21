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
          width="700"
          height="700"
        >
          <image
            href="/kroppskart/images/selectionPattern.png"
            x="0"
            y="0"
            width="700"
            height="700"
          />
        </pattern>
      </defs>
      {children}
    </svg>
  </div>
);

const createMouseEnterHandler = (linkedWith: string | string[]) => () => {
  const addHover = (id: string) =>
    document.getElementById(id).parentElement.classList.add(style.hover);

  if (typeof linkedWith === 'string') {
    addHover(linkedWith);
  } else if (linkedWith) {
    linkedWith.map((id) => addHover(id));
  }
};

const createMouseLeaveHandler = (linkedWith: string | string[]) => () => {
  const removeHover = (id: string) =>
    document.getElementById(id).parentElement.classList.remove(style.hover);

  if (typeof linkedWith === 'string') {
    removeHover(linkedWith);
  } else if (linkedWith) {
    linkedWith.map((id) => removeHover(id));
  }
};

export const ClickablePolygon = ({ id, bodyMap, points, alt, linkedWith }) => {
  const selected = useSelector((state: rootState) => state.body[bodyMap]?.[id]);
  const dispatch = useDispatch();
  const ref = React.useRef();
  const onClick = () => {
    if (linkedWith) {
      if (typeof linkedWith === 'string') {
        dispatch(changeBodyMapValue(bodyMap, linkedWith, !selected));
      } else if (linkedWith) {
        linkedWith.map((id) =>
          dispatch(changeBodyMapValue(bodyMap, id, !selected))
        );
      }
    }
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
      ref={ref}
      onMouseEnter={createMouseEnterHandler(linkedWith)}
      onMouseLeave={createMouseLeaveHandler(linkedWith)}
      className={cn(selected && style.selected)}
    >
      <figcaption>{alt}</figcaption>
      <polygon id={id} points={points} />
    </a>
  );
};

export default SVGContainer;
