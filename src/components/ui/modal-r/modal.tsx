import { ReactNode } from 'react';
import styles from './modal.module.scss';
import { SvgXMark } from '../../../../public/svgs';
import { useModalContext } from '../../../hooks/modal-context';

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const { setModal } = useModalContext();

  const handleCloseModal = () => {
    setModal(undefined);
  };

  return (
    <>
      <div className={styles.blackout}>
        <div className={styles.wrapper}>
          {children}
          <div
            className={styles.close}
            onClick={handleCloseModal}>
            <SvgXMark />
          </div>
        </div>
      </div>
    </>
  );
}
