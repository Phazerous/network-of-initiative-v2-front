import { useState } from 'react';
import Button from '../../ui/button/button';
import Fieldset from '../../ui/fieldset/fieldset';

import styles from './verify-email.module.scss';
import { verifyEmail } from '../../../lib/requests/signup';

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
            value={verificationCode}
            setValue={setVerificationCode}
            type='input'
            label='КОД ВЕРИФИКАЦИИ'
            width={300}
          />
          <p className={styles.para}>
            Код верификации был отправлен <br />
            на почту <span className={styles.span}>nphazerous@gmail.com</span>
          </p>
        </div>

        <Button
          value='Продолжить'
          style='primary'
          onClick={handleConfirm}
        />
      </div>
    </>
  );
}
