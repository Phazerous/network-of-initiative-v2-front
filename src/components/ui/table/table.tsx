import { ReactNode } from 'react';
import styles from './table.module.scss';

interface TableProps {
  children: ReactNode;
  className?: string;
}

export default function Table({ children, className }: TableProps) {
  return (
    <>
      <table className={`${styles.table} ${className}`}>{children}</table>
    </>
  );
}
