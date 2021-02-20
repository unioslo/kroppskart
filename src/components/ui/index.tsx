import cn from 'classnames';

import style from './style.module.scss';

export const Alert = ({ children }) => (
  <div className={style.alertInfo}>{children}</div>
);

export const Button = ({ children, type, ref, ...rest }) => (
  <button ref={ref} className={cn(type && style[type], style.button)} {...rest}>
    {children}
  </button>
);
