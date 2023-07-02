import styles from './text-field.module.scss';

interface TextFieldProps {
  label: string;
  value: string;
  width?: number;
}

export default function TextField({ label, value, width }: TextFieldProps) {
  return (
    <>
      <fieldset>
        <label className={styles.label}>{label}</label>
        <p className={styles.contente}>{value}</p>
      </fieldset>
    </>
  );
}
