import { useRouter } from 'next/router';
import { getInitiativeApplicationForInitiator } from '../../../../lib/requests/account';
import useSWR from 'swr';
import ExpandableField from '../../expandable-field/expandable-field';
import { useState } from 'react';
import styles from './modal-initiator-initiative-application.module.scss';
import Fieldset from '../../editable-text-field/editable-text-field';
import ActionButton, {
  ActionButtonType,
} from '../../action-button/action-button';
import Modal from '../../modal/modal';
import TextField from '../../text-field/text-field';
import UserCard from '../../user-card/user-card';

interface InitiatorInitiativeApplicationModalProps {
  applicationId: string;
}

export default function ModalInitiatorInitiativeApplication({
  applicationId,
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
      <Modal>
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
            content={answer}
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
