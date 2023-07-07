import { useState } from 'react';
import Fieldset from '../components/ui/editable-text-field/editable-text-field';
import styles from '../styles/pages/login.module.scss';
import Button from '../components/ui/button/button';
import login from '../lib/requests/login';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const loginDto = {
      email,
      password,
    };

    try {
      const userId = await login(loginDto);
      router.push(`/${userId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <main className='center-content'>
        <div className={styles.login}>
          <h2>Авторизация</h2>

          <Fieldset
            label='ПОЧТА'
            type='input'
            content={email}
            setValue={setEmail}
          />

          <Fieldset
            label='ПАРОЛЬ'
            type='input'
            inputType='password'
            content={password}
            setValue={setPassword}
          />

          <Button
            style='primary'
            content='Продолжить'
            onClick={handleLogin}
            stretch={true}
          />

          <div className={styles.alternative}>
            <p>Еще нет аккаунта?</p>
            <Link
              className={styles.link}
              href='/signup'>
              Создать
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
