interface ButtonProps {
  value: string;
  style: 'primary';
  onClick?: () => void;
  className?: string;
}

import styles from './button.module.scss';

export default function Button({
  value,
  style,
  onClick,
  className,
}: ButtonProps) {
  const computedStyles = styleLookup[style] + ' ' + (className ?? '');

  return (
    <>
      <button
        className={computedStyles}
        onClick={onClick}>
        {value}
      </button>
    </>
  );
}

const styleLookup = {
  primary: styles.primary,
};
