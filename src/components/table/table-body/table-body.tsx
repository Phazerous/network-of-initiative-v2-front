import { ReactNode } from 'react';
import styles from './table-body.module.scss';

interface TableBodyProps {
  children: ReactNode;
}

export default function TableBody({ children }: TableBodyProps) {
  return (
    <>
      <tbody className={styles.body}>{children}</tbody>
    </>
  );
}
