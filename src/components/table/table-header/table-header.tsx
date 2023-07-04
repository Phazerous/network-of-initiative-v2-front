import { ReactNode } from 'react';
import styles from './table-header.module.scss';

interface TableHeaderProps {
  children: ReactNode;
}

export default function TableHeader({ children }: TableHeaderProps) {
  return (
    <>
      <thead className={styles.headerRow}>{children}</thead>
    </>
  );
}
