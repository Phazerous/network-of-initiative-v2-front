import Button from '../../ui/button/button';
import Fieldset from '../../ui/fieldset/fieldset';

import styles from './create-user.module.scss';

export default function CreateUser() {
  const handleCreate = () => {};

  return (
    <>
      <div className={styles.content}>
        <h2>Создание пользователя</h2>

        <div className={styles.form}>
          <Fieldset
            width={300}
            type='input'
            label='ИМЯ'
          />
          <Fieldset
            width={300}
            type='input'
            label='ФАМИЛИЯ'
          />
          <Fieldset
            width={300}
            type='input'
            inputType='password'
            label='ПАРОЛЬ'
          />
          <Fieldset
            width={300}
            type='input'
            inputType='password'
            label='ПОДТВЕРДИТЕ ПАРОЛЬ'
          />
        </div>

        <Button
          content='Продолжить'
          style='primary'
          onClick={handleCreate}
        />
      </div>
    </>
  );
}
