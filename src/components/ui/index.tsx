import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import style from './style.module.scss';
import { Trans } from '@lingui/macro';

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
          <Trans>Velg alle</Trans>
        </Button>
        <Button type="selectNone" onClick={onUnselectAll}>
          <Trans>Fjern alle</Trans>
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
  onNext?: (nextPage: string) => void;
  onBack?: () => void;
  nextPage?: string;
}) => {
  const router = useRouter();
  React.useEffect(() => {
    if (!nextPage) return;

    router.prefetch(nextPage);
  }, [nextPage, router]);
  return (
    <div className={style.navigationButtons}>
      <Button
        type="prevButton"
        onClick={() => {
          if (onBack) {
            onBack();
          } else {
            router.back();
          }
        }}
      >
        <Trans>Tilbake</Trans>
      </Button>
      <Button
        onClick={() => {
          if (onNext) {
            onNext(nextPage);
          } else {
            router.push(nextPage);
          }
        }}
        type="nextButton"
      >
        <Trans>Fortsett</Trans>
      </Button>
    </div>
  );
};
