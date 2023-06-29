import { ChangeEvent } from 'react';
import styles from './input.module.scss';

interface InputProps {
  value: string;
  setValue: (newValue: string) => void;
  type?: string;
  size?: 'auth' | 'standard';
}

export default function Input({
  value,
  setValue,
  type = 'text',
  size = 'standard',
}: InputProps) {
  const computedStyles = size === 'auth' ? styles.auth : styles.standard;

  return (
    <>
      <input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        className={computedStyles}
        type={type}
      />
    </>
  );
}
