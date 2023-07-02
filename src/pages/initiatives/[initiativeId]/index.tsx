import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getInitiative } from '../../../lib/requests/initiatives';
import Initiative from '../../../components/pages/initiative/initiative/initiative';

export default function InitiativePage() {
  const router = useRouter();

  const { initiativeId } = router.query as { initiativeId: string };
  const { data: initiative, error } = useSWR(initiativeId, (initiativeId) =>
    getInitiative(initiativeId, router)
  );

  if (!router.isReady) return <h1>Loading...</h1>;

  if (!initiative) return <h1>Loading...</h1>;

  return <Initiative initiative={initiative} />;
}
