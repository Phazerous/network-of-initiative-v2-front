interface ButtonProps {
  value: string;
  style: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  auto?: boolean;
  svgIcon?: ReactNode;
}

import { ReactNode } from 'react';
import styles from './button.module.scss';

export default function Button({
  value,
  style,
  onClick,
  className,
  svgIcon,
  auto = true,
}: ButtonProps) {
  const computedStyles = styleLookup[style] + ' ' + (className ?? '');

  return (
    <>
      <button
        className={computedStyles}
        style={{
          width: auto ? 'auto' : undefined,
        }}
        onClick={onClick}>
        {value}
        {svgIcon}
      </button>
    </>
  );
}

const styleLookup = {
  primary: styles.primary,
  secondary: styles.secondary,
};
