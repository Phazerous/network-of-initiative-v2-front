import { SvgTickSmall } from '../../../public/svgs';
import styles from './checkbox.module.scss';

interface CheckboxProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

export default function Checkbox({ checked, setChecked }: CheckboxProps) {
  return (
    <>
      {checked ? (
        <div
          className={styles.checked}
          onClick={() => setChecked(false)}>
          <SvgTickSmall />
        </div>
      ) : (
        <div
          className={styles.unchecked}
          onClick={() => setChecked(true)}></div>
      )}
    </>
  );
}
