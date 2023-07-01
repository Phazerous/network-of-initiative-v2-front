import { useRouter } from 'next/router';
import Table from '../../table/table';

import useSWR from 'swr';
import { getUserInitiatives } from '../../../../lib/requests/account';
import MyInitiativesTable from './my-initiatives-table/my-initiatives-table';

interface MyInitiativesProps {
  userId: string;
}

export default function MyInitiatives({ userId }: MyInitiativesProps) {
  const router = useRouter();

  const { data, error } = useSWR(userId, (userId) =>
    getUserInitiatives(userId, router)
  );

  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <MyInitiativesTable initiatives={data} />
    </>
  );
}
