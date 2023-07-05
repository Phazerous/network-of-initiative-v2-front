import { ReactNode } from 'react';
import { SvgLogo, SvgUser } from '../../../public/svgs';
import styles from './navbar.module.scss';

interface NavbarLayoutProps {
  children: ReactNode;
}

export default function NavbarLayout({ children }: NavbarLayoutProps) {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <SvgLogo />
          <SvgUser />
        </div>
      </div>
      {children}
    </>
  );
}
