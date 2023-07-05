import { useRouter } from 'next/router';
import { getInitiativeApplicationForInitiator } from '../../../../lib/requests/account';
import Modal from '../../modal/modal';
import useSWR from 'swr';
import TextField from '../../text-field/text-field';
import ExpandableField from '../../expandable-field/expandable-field';
import { useState } from 'react';
import styles from './initiator-initiative-application-modal.module.scss';
import UserCard from '../../../user-card/user-card';
import Fieldset from '../../editable-text-field/editable-text-field';
import ActionButton, {
  ActionButtonType,
} from '../../action-button/action-button';

interface InitiatorInitiativeApplicationModalProps {
  applicationId: string;
  onClose: () => void;
}

export default function InitiatorInitiativeApplicationModal({
  applicationId,
  onClose,
}: InitiatorInitiativeApplicationModalProps) {
  const router = useRouter();

  const [showCandidate, setShowCandidate] = useState(false);
  const [answer, setAnswer] = useState('');

  const { data, error } = useSWR(applicationId, (applicationId) =>
    getInitiativeApplicationForInitiator(applicationId, router)
  );

  if (!data) return <h1>Loading...</h1>;

  const handleReject = async () => {};
  const handleApprove = async () => {};
  const handleDetails = async () => {};

  return (
    <>
      <Modal onClose={onClose}>
        <div className={styles.content}>
          <TextField
            label='РАССКАЖИТЕ О СЕБЕ'
            value={data.about}
          />

          <div>
            <ExpandableField
              expanded={showCandidate}
              value='ДАННЫЕ О КАНДИДАТЕ'
              onClick={() => setShowCandidate(!showCandidate)}
            />
            {showCandidate && <UserCard {...data.applier} />}
          </div>

          <Fieldset
            type='textarea'
            label='ОТВЕТ КАНДИДАТУ'
            value={answer}
            setValue={setAnswer}
          />

          <div className={styles.buttons}>
            <div className={styles.buttonRow}>
              <ActionButton
                actionType={ActionButtonType.REJECT}
                onClick={handleReject}
              />
              <ActionButton
                actionType={ActionButtonType.APPROVE}
                onClick={handleApprove}
              />
            </div>

            <div className={styles.buttonRow}>
              <ActionButton
                actionType={ActionButtonType.DETAILS}
                onClick={handleDetails}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
