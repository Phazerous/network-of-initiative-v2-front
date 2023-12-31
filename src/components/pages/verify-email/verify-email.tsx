import { useState } from 'react';
import Button from '../../ui/button/button';
import Fieldset from '../../ui/editable-text-field/editable-text-field';

import styles from './verify-email.module.scss';
import { verifyEmail } from '../../../lib/requests/auth';

interface VerifyEmailProps {
  onContinue: () => void;
  email: string;
}

export default function VerifyEmailPage({
  email,
  onContinue,
}: VerifyEmailProps) {
  const [verificationCode, setVerificationCode] = useState('');

  const handleConfirm = async () => {
    try {
      await verifyEmail({ email, verificationCode });
      onContinue();
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  };

  return (
    <>
      <div className={styles.content}>
        <h2>Подтверждение</h2>
        <div className={styles.verify}>
          <Fieldset
            content={verificationCode}
            setValue={setVerificationCode}
            type='input'
            label='КОД ВЕРИФИКАЦИИ'
            width={300}
          />
          <p className={styles.para}>
            Код верификации был отправлен <br />
            на почту <span className={styles.span}>{email}</span>
          </p>
        </div>

        <Button
          content='Продолжить'
          style='primary'
          onClick={handleConfirm}
        />
      </div>
    </>
  );
}
