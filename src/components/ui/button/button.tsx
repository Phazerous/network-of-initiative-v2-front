interface ButtonProps {
  value: string;
  style: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  auto?: boolean;
}

import styles from './button.module.scss';

export default function Button({
  value,
  style,
  onClick,
  className,
  auto,
}: ButtonProps) {
  const computedStyles = styleLookup[style] + ' ' + (className ?? '');

  return (
    <>
      <button
        className={computedStyles}
        style={{ width: auto ? 'auto' : undefined }}
        onClick={onClick}>
        {value}
      </button>
    </>
  );
}

const styleLookup = {
  primary: styles.primary,
  secondary: styles.secondary,
};
