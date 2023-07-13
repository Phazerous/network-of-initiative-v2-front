import { ReactNode } from 'react';
import styles from './side-modal.module.scss';
import { useModalContext } from '../../../hooks/modal-context';

interface SideModalProps {
  children: ReactNode;
}

export default function SideModal({ children }: SideModalProps) {
  const { setModal } = useModalContext();

  return (
    <>
      <div className={styles.sideModal}>
        <div
          className={styles.x}
          onClick={() => setModal(undefined)}>
          X
        </div>
        {children}
      </div>
    </>
  );
}
