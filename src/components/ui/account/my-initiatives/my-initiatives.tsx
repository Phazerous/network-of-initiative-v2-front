import { useRouter } from 'next/router';
import Table from '../../table/table';

import useSWR from 'swr';
import { getUserInitiatives } from '../../../../lib/requests/account';
import MyInitiativesTable from './my-initiatives-table/my-initiatives-table';
import { useState } from 'react';
import InitiativeApplications from '../initiative-applications/initiative-applications';

interface MyInitiativesProps {
  userId: string;
}

export default function MyInitiatives({ userId }: MyInitiativesProps) {
  const router = useRouter();
  const [selectedInitiativeId, setSelectedInitiativeId] = useState('');

  const { data, error } = useSWR(userId, (userId) =>
    getUserInitiatives(userId, router)
  );

  if (!data) return <h1>Loading...</h1>;

  if (selectedInitiativeId) {
    const selectedInitiative = data.find(
      (it) => it.id === selectedInitiativeId
    )!;

    return (
      <>
        <div onClick={() => setSelectedInitiativeId('')}>
          <h5>Все инициативы</h5>
        </div>
        <MyInitiativesTable initiatives={[selectedInitiative]} />
        <InitiativeApplications initiativeId={selectedInitiativeId} />
      </>
    );
  }

  return (
    <>
      <MyInitiativesTable
        initiatives={data}
        onSelect={(initiativeId: string) =>
          setSelectedInitiativeId(initiativeId)
        }
      />
    </>
  );
}
