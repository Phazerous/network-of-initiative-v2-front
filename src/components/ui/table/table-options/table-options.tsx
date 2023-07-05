import { ReactNode } from 'react';
import styles from './table-options.module.scss';

interface TableOptionsProps {
  children: ReactNode;
  x: number;
  y: number;
}

export default function TableOptions({ children, x, y }: TableOptionsProps) {
  return (
    <>
      <div
        className={styles.menu}
        style={{ top: y, left: x }}>
        {children}
      </div>
    </>
  );
}
