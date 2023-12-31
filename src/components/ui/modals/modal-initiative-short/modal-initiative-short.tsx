import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from './modal-initiative-short.module.scss';
import { getInitiativeShort } from '../../../../lib/requests/initiatives';
import SideModal from '../../side-modal/side-modal';
import TextField from '../../text-field/text-field';
import Button from '../../button/button';
import { useModalContext } from '../../../../hooks/modal-context';
import Spinner from '../../spinner/spinner';

interface ModalInitiativeShortProps {
  initiativeId: string;
}

export default function ModalInitiativeShort({
  initiativeId,
}: ModalInitiativeShortProps) {
  const { setModal } = useModalContext();
  const router = useRouter();
  const { data: initiative, error } = useSWR(initiativeId, (initiativeId) =>
    getInitiativeShort(initiativeId)
  );

  if (!initiative) return <Spinner />;

  return (
    <>
      <SideModal>
        <div className={styles.content}>
          <div>
            <h4>{initiative.title}</h4>

            <div className={styles.desc}>
              <TextField
                label='ОПИСАНИЕ ПРОЕКТА'
                content={initiative.description}
              />

              <TextField
                label='ГОРОД'
                content={initiative.location}
              />

              <TextField
                label='ВУЗ'
                content={initiative.university}
              />

              <TextField
                label='СТАДИЯ'
                content={initiative.stage}
              />

              <TextField
                label='ДАТА ПУБЛИКАЦИИ'
                content={'05.07.2032'}
              />
            </div>
          </div>

          <div className={styles.button}>
            <Button
              onClick={() => {
                setModal(undefined);
                router.push(`/initiatives/${initiativeId}`);
              }}
              content='Подробнее'
              style='primary'
              stretch={true}
            />
          </div>
        </div>
      </SideModal>
    </>
  );
}
