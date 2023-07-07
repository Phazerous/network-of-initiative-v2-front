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
            content={name}
            setValue={setName}
            width={300}
            type='input'
            label='ИМЯ'
          />
          <Fieldset
            content={lastname}
            setValue={setLastname}
            width={300}
            type='input'
            label='ФАМИЛИЯ'
          />
          <Fieldset
            content={password}
            setValue={setPassword}
            width={300}
            type='input'
            inputType='password'
            label='ПАРОЛЬ'
          />
          <Fieldset
            content={confirmPassword}
            setValue={setConfirmPassword}
            width={300}
            type='input'
            inputType='password'
            label='ПОДТВЕРДИТЕ ПАРОЛЬ'
          />
        </div>

        <Button
          content='Продолжить'
          style='primary'
          stretch={true}
          onClick={handleCreate}
        />
      </div>
    </>
  );
}
