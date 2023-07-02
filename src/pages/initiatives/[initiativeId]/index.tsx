import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getInitiative } from '../../../lib/requests/initiatives';
import { useState } from 'react';
import InitiativeView from '../../../components/pages/initiative/initiative-view/initiative-view';
import InitiativeEditable from '../../../components/pages/initiative/initiative-editable/initiative-editable';
import styles from '../../../styles/pages/[initiativeId].module.scss';

export default function InitiativePage() {
  const router = useRouter();
  const [editing, setEditing] = useState(false);

  const { initiativeId } = router.query as { initiativeId: string };

  const { data: initiative, error } = useSWR(initiativeId, (initiativeId) =>
    getInitiative(initiativeId, router)
  );

  if (!router.isReady) return;
  if (!initiative) return <h1>Loading...</h1>; // TODO

  return (
    <>
      <div className={styles.container}>
        <main>
          {editing ? (
            <InitiativeEditable
              initiative={initiative}
              mode='edit'
              onReturn={() => setEditing(false)}
            />
          ) : (
            <InitiativeView
              initiative={initiative}
              onEdit={() => setEditing(true)}
            />
          )}
        </main>
      </div>
    </>
  );
}
