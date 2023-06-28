import { ChangeEvent } from 'react';
import styles from './textarea.module.scss';

interface TextareaProps {
  value: string;
  setValue: (newValue: string) => void;
}

export default function Textarea({ value, setValue }: TextareaProps) {
  return (
    <>
      <textarea
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
        className={styles.textarea}></textarea>
    </>
  );
}
