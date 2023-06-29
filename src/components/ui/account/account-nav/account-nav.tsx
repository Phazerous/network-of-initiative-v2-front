import { AccountTabOption } from '../account-tab.enum';
import AccountTab from '../account-tab/account-tab';

interface AccountNavProps {
  activeTab: AccountTabOption;
}

const accountTabs = [
  AccountTabOption.PERSONAL_INFO,
  AccountTabOption.MY_APPLICATIONS,
  AccountTabOption.MY_INITIATIVES,
  AccountTabOption.MODERATOR_PANEL,
];

export default function AccountNav({ activeTab }: AccountNavProps) {
  const handleSelect = (tab: AccountTabOption) => {};

  return (
    <>
      {accountTabs.map((tab) => (
        <AccountTab
          key={tab}
          tab={tab}
          isActive={tab === activeTab}
          onClick={() => handleSelect(tab)}
        />
      ))}
    </>
  );
}
