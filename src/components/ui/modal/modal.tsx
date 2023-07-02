import { ReactNode } from 'react';

import styles from './modal.module.scss';

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}
