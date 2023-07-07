import { ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  content: string;
  style: 'primary' | 'secondary';
  onClick?: () => void;
  stretch?: boolean;
  svgIcon?: ReactNode;
}

export default function Button({
  content,
  style,
  onClick,
  svgIcon,
  stretch = false,
}: ButtonProps) {
  console.log(stretch);

  const computedStyles = `${styles.button} ${styleLookup[style]}`;

  return (
    <button
      className={computedStyles}
      style={{
        width: stretch ? '100%' : undefined,
      }}
      onClick={onClick}>
      {content}
      {svgIcon}
    </button>
  );
}

const styleLookup = {
  primary: styles.primaryButton,
  secondary: styles.secondaryButton,
};
