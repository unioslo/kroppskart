import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import style from './style.module.scss';

export const Alert = ({ children, type = 'info' }) => (
  <div
    className={cn(
      type === 'info' ? style.alertInfo : style.alertWarning,
      style.alert
    )}
  >
    {children}
  </div>
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

export const SelectionButtons = ({ onSelectAll, onUnselectAll }) => {
  return (
    <div className={style.selectionContainer}>
      <div className={style.selectionButtons}>
        <Button type="selectAll" onClick={onSelectAll}>
          Velg alle
        </Button>
        <Button type="selectNone" onClick={onUnselectAll}>
          Fjern alle
        </Button>
      </div>
    </div>
  );
};

export const NavigationButtons = ({
  onNext,
  onBack,
  nextPage,
}: {
  onNext?: () => void;
  onBack?: () => void;
  nextPage?: string;
}) => {
  return (
    <div className={style.navigationButtons}>
      <Button type="prevButton" onClick={onBack}>
        Tilbake
      </Button>
      <Link href={nextPage}>
        <Button onClick={onNext ?? ''} type="nextButton">
          Fortsett
        </Button>
      </Link>
    </div>
  );
};
