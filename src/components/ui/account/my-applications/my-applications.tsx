import useSWR from 'swr';
import getUserApplicationsShort from '../../../../lib/requests/account';
import TableMyApplications from '../../table-my-applications/table-my-applications';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Spinner from '../../spinner/spinner';

interface MyApplicationsProps {
  userId: string;
}

export default function MyApplications({ userId }: MyApplicationsProps) {
  const router = useRouter();

  const { data, error } = useSWR('/hey', (url) =>
    getUserApplicationsShort(userId, router)
  );

  console.log(data);

  if (!data) return <Spinner />;

  return (
    <>
      {data.length === 0 ? (
        <h2>Вы еще не подавали заявки</h2>
      ) : (
        <TableMyApplications applications={data} />
      )}
    </>
  );
}
