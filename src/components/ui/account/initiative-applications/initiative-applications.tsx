interface InitiativeApplicationsProps {
  initiativeId: string;
}

import useSWR from 'swr';
import { getInitiativeApplications } from '../../../../lib/requests/account';
import { useRouter } from 'next/router';
import InitiativeApplicationsTable from './initiative-applications-table/initiative-applications-table';

export default function InitiativeApplications({
  initiativeId,
}: InitiativeApplicationsProps) {
  const router = useRouter();
  const { data, error } = useSWR(initiativeId, (initiativeId) =>
    getInitiativeApplications(initiativeId, router)
  );

  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <InitiativeApplicationsTable applications={data} />
    </>
  );
}
