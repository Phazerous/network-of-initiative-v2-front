import { ChangeEvent } from 'react';
import styles from './input.module.scss';

interface InputProps {
  value: string;
  setValue: (newValue: string) => void;
  type?: string;
}

export default function Input({ value, setValue, type = 'text' }: InputProps) {
  return (
    <>
      <input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        className={styles.input}
        type={type}
      />
    </>
  );
}
