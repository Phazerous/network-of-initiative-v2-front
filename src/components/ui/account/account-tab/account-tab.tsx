import {
  SvgModeratorPanel,
  SvgMyApplications,
  SvgMyInitiatives,
  SvgPersonalInfo,
} from '../../../../../public/svgs';
import { AccountTabOption } from '../account-tab.enum';

import styles from './account-tab.module.scss';

interface AccountTabProps {
  tab: AccountTabOption;
  onClick: () => void;
  isActive: boolean;
}

export default function AccountTab({
  tab,
  isActive,
  onClick,
}: AccountTabProps) {
  const computedStyles = `${styles.tab} ${
    isActive ? styles.active : styles.idle
  }`;

  return (
    <>
      <div
        className={computedStyles}
        onClick={onClick}>
        {getTabIcon(tab)}
        {getTabName(tab)}
      </div>
    </>
  );
}

function getTabIcon(tab: AccountTabOption) {
  switch (tab) {
    case AccountTabOption.PERSONAL_INFO:
      return <SvgPersonalInfo />;
    case AccountTabOption.MY_APPLICATIONS:
      return <SvgMyApplications />;
    case AccountTabOption.MY_INITIATIVES:
      return <SvgMyInitiatives />;
  }
}

function getTabName(tab: AccountTabOption) {
  switch (tab) {
    case AccountTabOption.PERSONAL_INFO:
      return 'Личные данные';
    case AccountTabOption.MY_APPLICATIONS:
      return 'Мои заявки';
    case AccountTabOption.MY_INITIATIVES:
      return 'Мои инициативы';
  }
}
