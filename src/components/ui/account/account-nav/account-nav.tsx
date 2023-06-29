import { Router } from 'next/router';
import { AccountTabOption } from '../account-tab.enum';
import AccountTab from '../account-tab/account-tab';

import styles from './account-nav.module.scss';

interface AccountNavProps {
  activeTab: AccountTabOption;
  selectTab: (tab: AccountTabOption) => void;
}

const accountTabs = [
  AccountTabOption.PERSONAL_INFO,
  AccountTabOption.MY_APPLICATIONS,
  AccountTabOption.MY_INITIATIVES,
  AccountTabOption.MODERATOR_PANEL,
];

export default function AccountNav({ activeTab, selectTab }: AccountNavProps) {
  return (
    <>
      <nav className={styles.nav}>
        {accountTabs.map((tab) => (
          <AccountTab
            key={tab}
            tab={tab}
            isActive={tab === activeTab}
            onClick={() => selectTab(tab)}
          />
        ))}
      </nav>
    </>
  );
}
