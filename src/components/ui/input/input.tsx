interface CustomInputProps {
  type?: string;
}

import styles from './input.module.scss';

export default function Input({ type = 'text' }: CustomInputProps) {
  return (
    <>
      <input
        className={styles.input}
        type={type}
      />
    </>
  );
}
