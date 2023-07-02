interface InitiativeApplicationsProps {
  initiativeId: string;
}

import useSWR from 'swr';
import { getInitiativeApplications } from '../../../../lib/requests/account';
import { useRouter } from 'next/router';
import InitiativeApplicationsTable from './initiative-applications-table/initiative-applications-table';
import { useState } from 'react';
import InitiatorInitiativeApplicationModal from '../../modals/initiator-initiative-application-modal/initiator-initiative-application-modal';

export default function InitiativeApplications({
  initiativeId,
}: InitiativeApplicationsProps) {
  const router = useRouter();
  const { data, error } = useSWR(initiativeId, (initiativeId) =>
    getInitiativeApplications(initiativeId, router)
  );
  const [selectedApplicationId, setSelectedApplicationId] = useState('');

  if (!data) return <h1>Loading...</h1>;

  const renderApplication = () => {
    if (selectedApplicationId)
      return (
        <InitiatorInitiativeApplicationModal
          applicationId={selectedApplicationId}
        />
      );
  };

  return (
    <>
      <InitiativeApplicationsTable
        applications={data}
        onSelect={setSelectedApplicationId}
      />
      {renderApplication()}
    </>
  );
}
