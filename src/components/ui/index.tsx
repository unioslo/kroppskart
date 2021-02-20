import cn from 'classnames';

import style from './style.module.scss';

export const Alert = ({ children }) => (
  <div className={style.alertInfo}>{children}</div>
);

export const Button = ({ children, type, ...rest }) => (
  <button className={cn(type && style[type], style.button)} {...rest}>
    {children}
  </button>
);
