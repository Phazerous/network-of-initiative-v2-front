import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getUserInitiatives } from '../../../../lib/requests/account';
import { useState } from 'react';
import InitiativeApplications from '../initiative-applications/initiative-applications';
import TableMyInitiatives from '../../table-my-initiatives/table-my-initiatives';

interface MyInitiativesProps {
  userId: string;
}

export default function MyInitiatives({ userId }: MyInitiativesProps) {
  const router = useRouter();
  const [selectedInitiativeId, setSelectedInitiativeId] = useState('');

  const { data: initiatives, error } = useSWR(userId, (userId) =>
    getUserInitiatives(userId, router)
  );

  if (!initiatives) return <h1>Loading...</h1>;

  if (selectedInitiativeId) {
    const selectedInitiative = initiatives.find(
      (it) => it.id === selectedInitiativeId
    )!;

    // return (
    //   <>
    //     <div onClick={() => setSelectedInitiativeId('')}>
    //       <h5>Все инициативы</h5>
    //     </div>
    //     <MyInitiativesTable initiatives={[selectedInitiative]} />
    //     <InitiativeApplications initiativeId={selectedInitiativeId} />
    //   </>
    // );
  }

  return (
    <>
      <TableMyInitiatives
        onInitiativeSelect={() => console.log('later')}
        initiatives={initiatives}
      />
    </>
  );
}
