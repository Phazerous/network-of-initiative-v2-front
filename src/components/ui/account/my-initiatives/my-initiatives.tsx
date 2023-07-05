import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getUserInitiatives } from '../../../../lib/requests/account';
import { useState } from 'react';
import TableMyInitiatives from '../../table-my-initiatives/table-my-initiatives';
import MyInitiativeApplications from './my-initiative-applications/my-initiative-applications';
import styles from './my-initiatives.module.scss';
import { SvgAngleRight } from '../../../../../public/svgs';

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

  return (
    <>
      {selectedInitiativeId ? (
        <div>
          <div
            className={styles.allInitiatives}
            onClick={() => setSelectedInitiativeId('')}>
            <p>Все инициативы</p>
            <SvgAngleRight />
          </div>
          <TableMyInitiatives
            initiatives={[
              initiatives.find(
                (initinative) => initinative.id === selectedInitiativeId
              )!,
            ]}
          />
        </div>
      ) : (
        <TableMyInitiatives
          onInitiativeSelect={(initaitiveId: string) =>
            setSelectedInitiativeId(initaitiveId)
          }
          initiatives={initiatives}
        />
      )}

      {selectedInitiativeId && (
        <div className={styles.applications}>
          <MyInitiativeApplications initiativeId={selectedInitiativeId} />
        </div>
      )}
    </>
  );
}
