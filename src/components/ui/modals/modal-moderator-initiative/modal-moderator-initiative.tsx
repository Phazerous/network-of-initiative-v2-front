import { useState } from 'react';
import Modal from '../../modal/modal';
import styles from './modal-moderator-initiative.module.scss';
import EditableTextField from '../../editable-text-field/editable-text-field';
import ActionButton, {
  ActionButtonType,
} from '../../action-button/action-button';
import { respondInitiative } from '../../../../lib/requests/moderator';
import { useRouter } from 'next/router';

interface ModalModeratorInitiativeProps {
  id: string;
  title: string;
}

export default function ModalModeratorInitiative({
  id,
  title,
}: ModalModeratorInitiativeProps) {
  const router = useRouter();
  const [moderatorComment, setModeratorComment] = useState('');

  const handleReject = async () => {
    try {
      await respondInitiative(id, 2, moderatorComment);
      router.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const handleApprove = async () => {
    try {
      await respondInitiative(id, 1, moderatorComment);
      router.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Modal>
        <div className={styles.content}>
          <h1>{title}</h1>

          <EditableTextField
            type='textarea'
            label='ОТВЕТ МОДЕРАТОРА'
            content={moderatorComment}
            setValue={setModeratorComment}
          />
        </div>

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
      </Modal>
    </>
  );
}
