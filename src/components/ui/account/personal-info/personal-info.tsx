import { useState } from 'react';
import Fieldset from '../../fieldset/fieldset';
import styles from './personal-info.module.scss';
import Button from '../../button/button';

export default function PersonalInfo() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [location, setLocation] = useState('');
  const [university, setUniversity] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [about, setAbout] = useState('');

  const handleSave = () => {};

  return (
    <>
      <section className={styles.section}>
        <div className={styles.primaryInfo}>
          <div className={styles.fieldsetRow}>
            <Fieldset
              type='input'
              label='ИМЯ'
              value={name}
              setValue={setName}
              className={styles.input}
            />

            <Fieldset
              type='input'
              label='ФАМИЛИЯ'
              value={lastname}
              setValue={setLastname}
              className={styles.input}
            />
          </div>

          <div className={styles.fieldsetRow}>
            <Fieldset
              type='input'
              label='ГОРОД'
              value={location}
              setValue={setLocation}
              className={styles.input}
            />

            <Fieldset
              type='input'
              label='ВУЗ'
              value={university}
              setValue={setUniversity}
              className={styles.input}
            />
          </div>

          <div className={styles.fieldsetRow}>
            <Fieldset
              type='input'
              label='ПОЧТА'
              value={email}
              setValue={setEmail}
              className={styles.input}
            />

            <Fieldset
              type='input'
              label='КОНТАКТНАЯ ИНФОРМАЦИЯ'
              value={contact}
              setValue={setContact}
              className={styles.input}
            />
          </div>
        </div>

        <Fieldset
          label='О СЕБЕ'
          type='textarea'
          value={about}
          setValue={setAbout}
        />

        <Button
          value='Сохранить изменения'
          style='primary'
          onClick={handleSave}
          className={styles.button}
        />
      </section>
    </>
  );
}
