import styles from './text-field.module.scss';

interface TextFieldProps {
  label: string;
  value?: string;
  content: string;
  width?: number;
}

export default function TextField({
  label,
  value,
  content,
  width,
}: TextFieldProps) {
  return (
    <>
      <fieldset>
        <label className={styles.label}>{label}</label>
        <p className={styles.content}>
          {value}
          {content}
        </p>
      </fieldset>
    </>
  );
}
