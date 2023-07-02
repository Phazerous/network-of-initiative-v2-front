import { ReactNode } from 'react';

import styles from './modal.module.scss';
import { SvgXMark } from '../../../../public/svgs';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div
          className={styles.close}
          onClick={onClose}>
          <SvgXMark />
        </div>
        {children}
      </div>
    </div>
  );
}
