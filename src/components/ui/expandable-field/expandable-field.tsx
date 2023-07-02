import { SvgDownAngle, SvgLeftAngle } from '../../../../public/svgs';
import styles from './expandable-field.module.scss';

interface ExpandableField {
  value: string;
  onClick: () => void;
  expanded: boolean;
}

export default function ExpandableField({
  value,
  onClick,
  expanded,
}: ExpandableField) {
  return (
    <>
      <div
        className={styles.field}
        onClick={onClick}>
        <p className={styles.text}>{value}</p>
        <div className={styles.svg}>
          {expanded ? <SvgDownAngle /> : <SvgLeftAngle />}
        </div>
      </div>
    </>
  );
}
