import { getInitiativeStatus } from '../../../../lib/requests/initiatives';
import Modal from '../../modal/modal';
import styles from './modal-initative-status.module.scss';
import useSWR from 'swr';
import Spinner from '../../spinner/spinner';
import TextField from '../../text-field/text-field';
import AnswerField from '../../account/answer-field/answer-field';

interface ModalInitaitiveStatusProps {
  initiativeId: string;
}

export default function ModalInitiativeStatus({
  initiativeId,
}: ModalInitaitiveStatusProps) {
  const { data: initiative, error } = useSWR('zzzz', () =>
    getInitiativeStatus(initiativeId)
  );

  if (!initiative)
    return (
      <Modal>
        <Spinner />
      </Modal>
    );

  return (
    <>
      <Modal>
        <div className={styles.content}>
          <h1>{initiative.title}</h1>

          <TextField
            label='ОТВЕТ МОДЕРАТОРА'
            content={initiative.moderatorComment}
          />

          <div className={styles.statusField}>
            <AnswerField type={initiative.status} />
          </div>
        </div>
      </Modal>
    </>
  );
}
