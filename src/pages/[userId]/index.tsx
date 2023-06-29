import { useRouter } from 'next/router';
import AccountNav from '../../components/ui/account/account-nav/account-nav';
import { AccountTabOption } from '../../components/ui/account/account-tab.enum';

const availableTabs = [
  'personal-info',
  'my-applications',
  'my-initiatives',
  'moderator-panel',
];

export default function Account() {
  const router = useRouter();

  if (!router.isReady) {
    return <h1>Loading...</h1>;
  }

  const { userId, tab } = router.query;

  if (typeof tab !== 'string' || !availableTabs.includes(tab)) {
    router.push(`/${userId}/?tab=${availableTabs[0]}`);
    return;
  }

  return (
    <div>
      <AccountNav activeTab={getActiveTab(tab)} />
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
