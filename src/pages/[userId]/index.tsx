import { useRouter } from 'next/router';
import AccountNav from '../../components/ui/account/account-nav/account-nav';
import { AccountTabOption } from '../../components/ui/account/account-tab.enum';
import styles from '../../styles/pages/[userId].module.scss';
import PersonalInfo from '../../components/ui/account/personal-info/personal-info';
import MyApplications from '../../components/ui/account/my-applications/my-applications';

const availableTabs = [
  'personal-info',
  'my-applications',
  'my-initiatives',
  'moderator-panel',
];

export default function Account() {
  const router = useRouter();
  const { userId, tab } = router.query;

  if (!router.isReady) {
    return <h1>Loading...</h1>;
  }

  if (typeof tab !== 'string' || !availableTabs.includes(tab)) {
    router.push(`/${userId}?tab=${availableTabs[0]}`);
    return;
  }

  const activeTab = getActiveTab(tab);

  const selectTab = (tab: AccountTabOption) => {
    if (tab === activeTab) return;

    let tabTitle = '';

    switch (tab) {
      case AccountTabOption.PERSONAL_INFO:
        tabTitle = availableTabs[0];
        break;
      case AccountTabOption.MY_APPLICATIONS:
        tabTitle = availableTabs[1];
        break;
      case AccountTabOption.MY_INITIATIVES:
        tabTitle = availableTabs[2];
        break;
      case AccountTabOption.MODERATOR_PANEL:
        tabTitle = availableTabs[3];
        break;
      default:
        throw new Error('Unhandled tab');
    }

    router.push(`/${userId}?tab=${tabTitle}`);
  };

  const getSelectedSection = () => {
    switch (activeTab) {
      case AccountTabOption.PERSONAL_INFO:
        return <PersonalInfo userId={userId as string} />;
      case AccountTabOption.MY_APPLICATIONS:
        return <MyApplications userId={userId as string} />;
      case AccountTabOption.MY_INITIATIVES:
      case AccountTabOption.MODERATOR_PANEL:
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AccountNav
          activeTab={activeTab}
          selectTab={selectTab}
        />

        <div className={styles.content}>{getSelectedSection()}</div>
      </main>
    </div>
  );
}

function getActiveTab(tab: string) {
  switch (tab) {
    case 'personal-info':
      return AccountTabOption.PERSONAL_INFO;
    case 'my-applications':
      return AccountTabOption.MY_APPLICATIONS;
    case 'my-initiatives':
      return AccountTabOption.MY_INITIATIVES;
    case 'moderator-panel':
      return AccountTabOption.MODERATOR_PANEL;
    default:
      throw new Error('Unhanlded tab');
  }
}
