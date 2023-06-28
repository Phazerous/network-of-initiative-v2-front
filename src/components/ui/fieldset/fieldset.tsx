import Input from '../input/input';
import Textarea from '../textarea/textarea';

import styles from './fieldset.module.scss';

interface FieldsetProps {
  type: 'textarea' | 'input';
  label: string;
  value: string;
  setValue: (newValue: string) => void;
  width?: number;
  inputType?: 'text' | 'password';
}

export default function Fieldset({
  type,
  label,
  width,
  value,
  setValue,
  inputType,
}: FieldsetProps) {
  const formControls =
    type === 'textarea' ? (
      <Textarea
        value={value}
        setValue={setValue}
      />
    ) : (
      <Input
        type={inputType}
        value={value}
        setValue={setValue}
      />
    );

  return (
    <>
      <fieldset
        className={styles.fieldset}
        style={width ? { width: `${width}px` } : undefined}>
        <label className={styles.label}>{label}</label>
        {formControls}
      </fieldset>
    </>
  );
}
