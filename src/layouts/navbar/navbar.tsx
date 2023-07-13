import { ReactNode } from 'react';
import { SvgLogo, SvgUser } from '../../../public/svgs';
import styles from './navbar.module.scss';
import { useRouter } from 'next/router';
import { redirectToAccount } from '../../lib/requests/account';
import TableOptions from '../../components/ui/table/table-options/table-options';
import TableOption from '../../components/ui/table/table-option/table-option';
import { useActionMenu } from '../../hooks/action-menu';
import { logout } from '../../lib/requests/auth';

interface NavbarLayoutProps {
  children: ReactNode;
}

export default function NavbarLayout({ children }: NavbarLayoutProps) {
  const router = useRouter();
  const { setActionMenu } = useActionMenu();

  const showContextMenu = (e: React.MouseEvent<HTMLTableCellElement>) => {
    const { clientX: x, clientY: y } = e;
    setActionMenu(
      <TableOptions
        x={x}
        y={y + 10}>
        <TableOption
          value='Профиль'
          onClick={() => {
            setActionMenu(undefined);
            redirectToAccount(router);
          }}
        />
        <TableOption
          value='Выйти'
          onClick={() => logout(router)}
        />
      </TableOptions>
    );
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <div onClick={() => router.push('/initiatives')}>
            <SvgLogo />
          </div>
          <h5 onClick={() => router.push('/initiatives')}>Все инициативы</h5>
          <h5 onClick={() => router.push('/initiatives/create')}>
            Создать свою инициативу
          </h5>
          <div onClick={showContextMenu}>
            <SvgUser />
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
