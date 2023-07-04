import { useRouter } from 'next/router';
import { getMyApplication } from '../../../../lib/requests/applications';
import Modal from '../../modal-r/modal';
import useSWR from 'swr';
import styles from './modal-my-application.module.scss';
import TextField from '../../text-field/text-field';
import AnswerField from '../../account/answer-field/answer-field';

interface ModalMyApplication {
  applicationId: string;
}

export default function ModalMyApplication({
  applicationId,
}: ModalMyApplication) {
  const router = useRouter();
  const { data: application, error } = useSWR(applicationId, (applicationId) =>
    getMyApplication(applicationId, router)
  );

  if (!application) return <h1>Loading...</h1>;

  const {
    about,
    answer,
    status,
    initiative: { title },
  } = application;

  return (
    <>
      <Modal>
        <div className={styles.content}>
          <h1>{title}</h1>
          <TextField
            label='РАССКАЖИТЕ О СЕБЕ'
            value={about}
          />
          {answer && (
            <TextField
              label='ОТВЕТ ИНИЦИАТОРА'
              value={answer}
            />
          )}

          <div className={styles.statusField}>
            <AnswerField type={'rejected'} />
          </div>
        </div>
      </Modal>
    </>
  );
}
