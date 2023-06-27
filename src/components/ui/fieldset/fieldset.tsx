import Input from '../input/input';
import Textarea from '../textarea/textarea';

import styles from './fieldset.module.scss';

interface FieldsetProps {
  type: 'textarea' | 'input';
  label: string;
  width?: number;
  inputType?: 'text';
}

export default function Fieldset({
  type,
  label,
  width,
  inputType,
}: FieldsetProps) {
  const formControls =
    type === 'textarea' ? <Textarea /> : <Input type={inputType} />;

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
