import useSWR from 'swr';
import getUserApplications from '../../../../lib/requests/account';
import TableMyApplications from '../../table-my-applications/table-my-applications';
import { useRouter } from 'next/router';

interface MyApplicationsProps {
  userId: string;
}

export default function MyApplications({ userId }: MyApplicationsProps) {
  const router = useRouter();

  const { data, error } = useSWR('/hey', (url) =>
    getUserApplications(userId, router)
  );

  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <TableMyApplications applications={data} />
    </>
  );
}
