import React from 'react';
import cn from 'classnames';

import style from './style.module.scss';

export const Alert = ({ children }) => (
  <div className={style.alertInfo}>{children}</div>
);

type ButtonProps = {
  children: React.ReactNode;
  type: string;
  [key: string]: any;
};

export const Button = React.forwardRef(
  (
    { children, type, ...rest }: ButtonProps,
    ref: React.LegacyRef<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      className={cn(type && style[type], style.button)}
      {...rest}
    >
      {children}
    </button>
  )
);
