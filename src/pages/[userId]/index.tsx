import { useRouter } from 'next/router';
import AccountNav from '../../components/ui/account/account-nav/account-nav';
import { AccountTabOption } from '../../components/ui/account/account-tab.enum';
import styles from '../../styles/pages/[userId].module.scss';
import PersonalInfo from '../../components/ui/account/personal-info/personal-info';
import MyApplications from '../../components/ui/account/my-applications/my-applications';
import MyInitiatives from '../../components/ui/account/my-initiatives/my-initiatives';
import Spinner from '../../components/ui/spinner/spinner';
import useSWR from 'swr';
import { getUserId } from '../../lib/requests/account';

const availableTabs = [
  AccountTabOption.PERSONAL_INFO,
  AccountTabOption.MY_APPLICATIONS,
  AccountTabOption.MY_INITIATIVES,
  AccountTabOption.MODERATOR_PANEL,
];

export default function Account() {
  const router = useRouter();
  const { userId, tab } = router.query;
  const { data: actualUserId, error } = useSWR('zab', () => getUserId(router));

  if (!router.isReady) return <Spinner />;

  if (
    typeof tab !== 'string' ||
    !availableTabs.includes(tab as AccountTabOption)
  ) {
    router.push(`/${userId}?tab=${availableTabs[0]}`);
    return;
  }

  if (userId !== actualUserId) {
    router.push('/auth/login');
    return;
  }

  const activeTab = availableTabs.find((t) => t === tab)!;

  const selectTab = (tab: AccountTabOption) => {
    if (tab === activeTab) return;
    router.push(`/${userId}?tab=${tab}`);
  };

  const getTabContent = () => {
    switch (activeTab) {
      case AccountTabOption.PERSONAL_INFO:
        return <PersonalInfo userId={userId as string} />;
      case AccountTabOption.MY_APPLICATIONS:
        return <MyApplications userId={userId as string} />;
      case AccountTabOption.MY_INITIATIVES:
        return <MyInitiatives userId={userId as string} />;
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AccountNav
          activeTab={activeTab}
          selectTab={selectTab}
        />

        <div className={styles.content}>{getTabContent()}</div>
      </main>
    </div>
  );
}
