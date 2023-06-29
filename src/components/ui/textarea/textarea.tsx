import { ChangeEvent } from 'react';
import styles from './textarea.module.scss';

interface TextareaProps {
  value: string;
  setValue: (newValue: string) => void;
  size?: 'auth' | 'standard';
}

export default function Textarea({
  value,
  setValue,
  size = 'standard',
}: TextareaProps) {
  const computedStyles = size === 'auth' ? styles.auth : styles.standard;

  return (
    <>
      <textarea
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
        className={computedStyles}></textarea>
    </>
  );
}
