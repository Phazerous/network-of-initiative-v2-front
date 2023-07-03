import { useState } from 'react';
import EditableTextField from '../../../../../ui/fieldset/fieldset';
import Modal from '../../../../../ui/modal/modal';
import Button from '../../../../../ui/button/button';
import {
  SvgPlane,
  SvgTick,
  SvgTickSmall,
} from '../../../../../../../public/svgs';
import styles from './initiative-apply-modal.module.scss';
import Checkbox from '../../../../../checkbox/checkbox';
import { postApplication } from '../../../../../../lib/requests/applications';
import { redirectToAccount } from '../../../../../../lib/requests/account';
import { useRouter } from 'next/router';

interface InitiativeApplyModalProps {
  initiativeId: string;
  title: string;
  handleClose: () => void;
}

export default function InitiativeApplyModal({
  initiativeId,
  title,
  handleClose,
}: InitiativeApplyModalProps) {
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
      <Modal onClose={handleClose}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <EditableTextField
            type='textarea'
            label='РАССКАЖИТЕ О СЕБЕ'
            value={about}
            setValue={setAbout}
          />

          <div>
            <div className={styles.buttonContainer}>
              <Button
                style='primary'
                value='Отправить'
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
