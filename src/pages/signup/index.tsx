import Button from '../../components/ui/button/button';
import Fieldset from '../../components/ui/fieldset/fieldset';

import styles from './index.module.scss';

export default function Signup() {
  return (
    <>
      <main className='center-content'>
        <div className={styles.signup}>
          <h2>Регистрация</h2>

          <form className={styles.form}>
            <Fieldset
              type='input'
              label='ПОЧТА'
              width={300}
            />
            <Button
              content='Продолжить'
              style='primary'
            />
          </form>
        </div>
      </main>
    </>
  );
}
