import useSWR from 'swr';
import { useRouter } from 'next/router';
import { getInitiativeApplications } from '../../../../../lib/requests/account';
import TableInitiativeApplications from '../../../table-initiative-applications/table-initiative-applications';

interface MyInitiativeApplicationsProps {
  initiativeId: string;
}

export default function MyInitiativeApplications({
  initiativeId,
}: MyInitiativeApplicationsProps) {
  const router = useRouter();
  const { data: applications, error } = useSWR(initiativeId, (initiativeId) =>
    getInitiativeApplications(initiativeId, router)
  );

  if (!applications) return <h1>Loading...</h1>;

  if (applications.length === 0) return;

  return (
    <>
      <TableInitiativeApplications applications={applications} />
    </>
  );
}
