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
import {
  approveApplication,
  rejectApplication,
} from '../../../../lib/requests/applications';
import Spinner from '../../spinner/spinner';
import AnswerField from '../../account/answer-field/answer-field';

interface InitiatorInitiativeApplicationModalProps {
  applicationId: string;
}

export default function ModalInitiatorInitiativeApplication({
  applicationId,
}: InitiatorInitiativeApplicationModalProps) {
  const router = useRouter();

  const [showCandidate, setShowCandidate] = useState(false);
  const [answer, setAnswer] = useState('');

  const { data: application, error } = useSWR(applicationId, (applicationId) =>
    getInitiativeApplicationForInitiator(applicationId, router)
  );

  if (!application) return <Spinner />;

  const handleReject = async () => {
    try {
      await rejectApplication(applicationId, answer);
      router.reload();
    } catch (e) {
      console.log(e);
    }
  };
  const handleApprove = async () => {
    try {
      await approveApplication(applicationId, answer);
      router.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Modal>
        <div className={styles.content}>
          <TextField
            label='РАССКАЖИТЕ О СЕБЕ'
            content={application.about}
          />

          <div>
            <ExpandableField
              expanded={showCandidate}
              value='ДАННЫЕ О КАНДИДАТЕ'
              onClick={() => setShowCandidate(!showCandidate)}
            />
            {showCandidate && <UserCard {...application.applier} />}
          </div>

          {application.status === 0 ? (
            <>
              <Fieldset
                type='textarea'
                label='ОТВЕТ КАНДИДАТУ'
                content={answer}
                setValue={setAnswer}
              />{' '}
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
              </div>
            </>
          ) : (
            <div className={styles.answer}>
              <AnswerField type={application.status} />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
