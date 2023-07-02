import { useRouter } from 'next/router';
import { getInitiativeApplicationForInitiator } from '../../../../lib/requests/account';
import Modal from '../../modal/modal';
import useSWR from 'swr';
import TextField from '../../text-field/text-field';

interface InitiatorInitiativeApplicationModalProps {
  applicationId: string;
}

export default function InitiatorInitiativeApplicationModal({
  applicationId,
}: InitiatorInitiativeApplicationModalProps) {
  const router = useRouter();
  const { data, error } = useSWR(applicationId, (applicationId) =>
    getInitiativeApplicationForInitiator(applicationId, router)
  );

  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <Modal>
        <TextField
          label='РАССКАЖИТЕ О СЕБЕ'
          value={data.about}
        />
      </Modal>
    </>
  );
}
