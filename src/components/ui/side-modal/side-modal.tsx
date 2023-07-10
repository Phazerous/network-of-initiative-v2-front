import { ReactNode } from 'react';
import styles from './side-modal.module.scss';

interface SideModalProps {
  children: ReactNode;
}

export default function SideModal({ children }: SideModalProps) {
  return (
    <>
      <div className={styles.sideModal}>{children}</div>
    </>
  );
}
