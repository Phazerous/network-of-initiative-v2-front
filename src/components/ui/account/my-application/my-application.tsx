import { useRouter } from 'next/router';
import { getMyApplication } from '../../../../lib/requests/applications';
import Modal from '../../modal/modal';
import useSWR from 'swr';
import styles from './my-application.module.scss';
import TextField from '../../text-field/text-field';
import AnswerField from '../answer-field/answer-field';

interface MyApplicationProps {
  applicationId: string;
  onClose: () => void;
}

export default function MyApplication({
  applicationId,
  onClose,
}: MyApplicationProps) {
  const router = useRouter();

  const { data: application, error } = useSWR(applicationId, (applicationId) =>
    getMyApplication(applicationId, router)
  );

  if (!application) return <h1>Loading...</h1>;

  console.log(application);

  const {
    about,
    answer,
    status,
    initiative: { title },
  } = application;

  return (
    <>
      <Modal onClose={onClose}>
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
