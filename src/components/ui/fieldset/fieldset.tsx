import Input from '../input/input';
import Textarea from '../textarea/textarea';

import styles from './fieldset.module.scss';

interface EditableTextFieldProps {
  type: 'textarea' | 'input';
  label: string;
  value: string;
  setValue: (newValue: string) => void;
  width?: number;
  inputType?: 'text' | 'password';
  className?: string;
}

export default function EditableTextField({
  type,
  label,
  width,
  value,
  className,
  setValue,
  inputType,
}: EditableTextFieldProps) {
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

  const computedStyles = styles.fieldset + ' ' + (className ?? '');

  return (
    <>
      <fieldset
        className={computedStyles}
        style={width ? { width: `${width}px` } : undefined}>
        <label className={styles.label}>{label}</label>
        {formControls}
      </fieldset>
    </>
  );
}
