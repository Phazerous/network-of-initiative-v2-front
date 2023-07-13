import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getInitiative } from '../../../lib/requests/initiatives';
import { useState } from 'react';
import styles from '../../../styles/pages/[initiativeId].module.scss';
import InitiativeEditable from '../../../components/ui/initiative/initiative-editable/initiative-editable';
import InitiativeView from '../../../components/ui/initiative/initiative-view/initiative-view';
import Spinner from '../../../components/ui/spinner/spinner';

export default function InitiativePage() {
  const router = useRouter();

  const { initiativeId } = router.query as { initiativeId: string };

  const { data: initiative, error } = useSWR(initiativeId, (initiativeId) =>
    getInitiative(initiativeId, router)
  );

  if (!router.isReady) return;
  if (!initiative) return <Spinner />;

  return (
    <>
      <div className={styles.container}>
        <main>
          <InitiativeView initiative={initiative} />
        </main>
      </div>
    </>
  );
}
