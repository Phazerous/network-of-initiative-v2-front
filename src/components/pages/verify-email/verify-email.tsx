import Button from '../../ui/button/button';
import Fieldset from '../../ui/fieldset/fieldset';

import styles from './verify-email.module.scss';

export default function VerifyEmail() {
  const handleNext = () => {};

  return (
    <>
      <div className={styles.content}>
        <h2>Подтверждение</h2>
        <div className={styles.verify}>
          <Fieldset
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
          content='Продолжить'
          style='primary'
          onClick={handleNext}
        />
      </div>
    </>
  );
}
