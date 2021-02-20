import React from 'react';

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
            href="/selectionPattern.png"
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

export default SVGContainer;
