import { useRouter } from 'next/router';
import { useState } from 'react';
import { postApplication } from '../../../../lib/requests/applications';
import { redirectToAccount } from '../../../../lib/requests/account';
import EditableTextField from '../../editable-text-field/editable-text-field';
import Modal from '../../modal/modal';
import Button from '../../button/button';
import { SvgPlane } from '../../../../../public/svgs';
import styles from './modal-initiative-apply.module.scss';
import Checkbox from '../../checkbox/checkbox';

interface ModalInitiativeApplyProps {
  initiativeId: string;
  title: string;
}

export default function ModalInitiativeApply({
  initiativeId,
  title,
}: ModalInitiativeApplyProps) {
  const router = useRouter();

  const [about, setAbout] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSend = async () => {
    if (!checked) return;

    try {
      await postApplication(initiativeId, { about });
      redirectToAccount(router);
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
            label='РАССКАЖИТЕ О СЕБЕ'
            content={about}
            setValue={setAbout}
          />

          <div>
            <div className={styles.buttonContainer}>
              <Button
                style='primary'
                content='Send'
                svgIcon={<SvgPlane />}
                onClick={handleSend}
              />
            </div>

            <div className={styles.agreement}>
              <Checkbox
                checked={checked}
                setChecked={setChecked}
              />

              <p>
                Согласен на отправку данных из <span>личного кабинета</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
