import { useRouter } from 'next/router';
import Button from '../../ui/button/button';
import Fieldset from '../../ui/editable-text-field/editable-text-field';
import styles from './request-verification-code.module.scss';
import { useState } from 'react';
import { requestVerificationCode } from '../../../lib/requests/signup';
import Link from 'next/link';

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
            content={email}
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

        <div className={styles.alternative}>
          <p>Уже есть аккаунт?</p>
          <Link
            className={styles.link}
            href='/login'>
            Войти
          </Link>
        </div>
      </div>
    </>
  );
}
