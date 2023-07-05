import { useState } from 'react';
import Button from '../../ui/button/button';
import Fieldset from '../../ui/editable-text-field/editable-text-field';

import styles from './create-user.module.scss';
import { createUser } from '../../../lib/requests/signup';

interface CreateUserPageProps {
  onContinue: (userId: string) => void;
}

export default function CreateUserPage({ onContinue }: CreateUserPageProps) {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreate = async () => {
    const userCreateDto = { name, lastname, password };
    try {
      const userId = await createUser(userCreateDto);
      onContinue(userId);
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  };

  return (
    <>
      <div className={styles.content}>
        <h2>Создание пользователя</h2>

        <div className={styles.form}>
          <Fieldset
            value={name}
            setValue={setName}
            width={300}
            type='input'
            label='ИМЯ'
          />
          <Fieldset
            value={lastname}
            setValue={setLastname}
            width={300}
            type='input'
            label='ФАМИЛИЯ'
          />
          <Fieldset
            value={password}
            setValue={setPassword}
            width={300}
            type='input'
            inputType='password'
            label='ПАРОЛЬ'
          />
          <Fieldset
            value={confirmPassword}
            setValue={setConfirmPassword}
            width={300}
            type='input'
            inputType='password'
            label='ПОДТВЕРДИТЕ ПАРОЛЬ'
          />
        </div>

        <Button
          value='Продолжить'
          style='primary'
          onClick={handleCreate}
        />
      </div>
    </>
  );
}
