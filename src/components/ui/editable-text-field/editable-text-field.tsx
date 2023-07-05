import Input from '../input/input';
import Textarea from '../textarea/textarea';
import styles from './editable-text-field.module.scss';

interface EditableTextFieldProps {
  type: 'textarea' | 'input';
  label: string;
  content: string;
  setValue: (newValue: string) => void;
  width?: number;
  inputType?: 'text' | 'password';
}

export default function EditableTextField({
  type,
  label,
  width,
  content,
  setValue,
  inputType,
}: EditableTextFieldProps) {
  const formControls =
    type === 'textarea' ? (
      <Textarea
        value={content}
        setValue={setValue}
      />
    ) : (
      <Input
        type={inputType}
        value={content}
        setValue={setValue}
      />
    );

  const computedStyles = styles.fieldset;

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
