import { ReactNode } from 'react';
import styles from './initiative-controls.module.scss';

interface InitiativeControlsProps {
  children: ReactNode;
}

export default function InitiativeControls({
  children,
}: InitiativeControlsProps) {
  return (
    <>
      <div className={styles.controls}>{children}</div>
    </>
  );
}
