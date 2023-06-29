import { useState } from 'react';
import Fieldset from '../components/ui/fieldset/fieldset';
import styles from '../styles/pages/login.module.scss';
import Button from '../components/ui/button/button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {};

  return (
    <>
      <main className='center-content'>
        <div className={styles.login}>
          <h2>Авторизация</h2>

          <Fieldset
            label='ПОЧТА'
            type='input'
            value={email}
            setValue={setEmail}
          />

          <Fieldset
            label='ПАРОЛЬ'
            type='input'
            inputType='password'
            value={password}
            setValue={setPassword}
          />

          <Button
            style='primary'
            value='Продолжить'
            onClick={handleLogin}
            className={styles.button}
          />
        </div>
      </main>
    </>
  );
}
