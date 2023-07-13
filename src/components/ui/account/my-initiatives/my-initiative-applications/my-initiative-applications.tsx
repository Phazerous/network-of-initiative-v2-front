import useSWR from 'swr';
import { getInitiativeApplications } from '../../../../../lib/requests/account';
import TableInitiativeApplications from '../../../table-initiative-applications/table-initiative-applications';
import Spinner from '../../../spinner/spinner';

interface MyInitiativeApplicationsProps {
  initiativeId: string;
}

export default function MyInitiativeApplications({
  initiativeId,
}: MyInitiativeApplicationsProps) {
  const { data: applications, error } = useSWR(initiativeId, (initiativeId) =>
    getInitiativeApplications(initiativeId)
  );

  if (!applications) return <Spinner />;

  if (!Array.isArray(applications) || applications.length !== 0) return;

  return (
    <>
      <TableInitiativeApplications applications={applications} />
    </>
  );
}
