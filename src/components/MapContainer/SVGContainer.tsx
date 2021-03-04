import React from 'react';
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { changeBodyMapValue } from '../../store/bodyMapReducer';
import { rootState } from '../../store/store';

import style from './bodyMap.module.scss';

const SVGContainer = ({ width, height, children }) => (
  <div className={style.SVGContainer}>
    <svg viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <pattern
          id="test"
          patternUnits="userSpaceOnUse"
          width="5"
          height="5"
          viewBox="0 0 10 10"
          patternTransform="rotate(45)"
        >
          <line stroke="black" strokeWidth="3" x1="5" y1="0" x2="5" y2="10" />
          <line stroke="black" strokeWidth="3" x1="0" y1="5" x2="10" y2="5" />
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

const createMouseLeaveHandler = (
  linkedWith: string | string[],
  setBlank: (b: boolean) => void
) => () => {
  const removeHover = (id: string) =>
    document.getElementById(id)?.parentElement?.classList.remove(style.hover);
  setBlank(false);

  if (typeof linkedWith === 'string') {
    removeHover(linkedWith);
  } else if (linkedWith) {
    linkedWith.map((id) => removeHover(id));
  }
};

const createMouseDownHandler = (
  linkedWith: string | string[],
  ref,
  setBlank
) => () => {
  const hideEffect = (id: string) =>
    document.getElementById(id)?.parentElement?.classList.add(style.blank);
  if (ref?.current) {
    setBlank(true);
  }
  if (typeof linkedWith === 'string') {
    hideEffect(linkedWith);
  } else if (linkedWith) {
    linkedWith.map((id) => hideEffect(id));
  }
};

export const ClickablePolygon = ({
  id,
  bodyMap,
  points,
  alt,
  linkedWith,
  followUp,
}) => {
  const selected = useSelector((state: rootState) => state.body[bodyMap]?.[id]);
  const [hoverBlank, setBlank] = React.useState(false);
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
      onKeyPress={(event) => {
        event.preventDefault();
        if (event.key === 'Enter' || event.key === ' ') {
          onClick();
        }
      }}
      tabIndex={followUp ? null : 0}
      ref={ref}
      onMouseEnter={createMouseEnterHandler(linkedWith)}
      onMouseLeave={createMouseLeaveHandler(linkedWith, setBlank)}
      onMouseDown={createMouseDownHandler(linkedWith, ref, setBlank)}
      className={cn(
        selected && style.selected,
        hoverBlank && !selected && style.hoverBlank
      )}
    >
      <title>{alt + `. ${!selected ? 'Ikke valgt' : 'Valgt'}`}</title>
      <polygon id={id} points={points} />
    </a>
  );
};

export default SVGContainer;
