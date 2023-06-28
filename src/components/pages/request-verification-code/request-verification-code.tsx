import { useRouter } from 'next/router';
import Button from '../../ui/button/button';
import Fieldset from '../../ui/fieldset/fieldset';
import styles from './request-verification-code.module.scss';
import { useState } from 'react';
import { requestVerificationCode } from '../../../lib/requests/signup';

interface RequestVerificationCodePageProps {
  onContinue: (email: string) => void;
}

export default function RequestVerificationCodePage({
  onContinue,
}: RequestVerificationCodePageProps) {
  const [email, setEmail] = useState('');

  const handleRequestVerificationCode = async () => {
    try {
      await requestVerificationCode(email);
      onContinue(email);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  return (
    <>
      <div className={styles.signup}>
        <h2>Регистрация</h2>

        <div className={styles.form}>
          <Fieldset
            value={email}
            setValue={setEmail}
            type='input'
            label='ПОЧТА'
            width={300}
          />
          <Button
            content='Продолжить'
            style='primary'
            onClick={handleRequestVerificationCode}
          />
        </div>
      </div>
    </>
  );
}
