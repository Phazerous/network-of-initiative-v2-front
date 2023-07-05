import { useEffect, useState } from 'react';
import Fieldset from '../../editable-text-field/editable-text-field';
import styles from './personal-info.module.scss';
import Button from '../../button/button';
import useSWR from 'swr';
import { get, patch } from '../../../../lib/requests/base';
import { useRouter } from 'next/router';

interface PersonalInfoProps {
  userId: string;
}

export default function PersonalInfo({ userId }: PersonalInfoProps) {
  const router = useRouter();

  const { data, error } = useSWR(
    userId ? `/${userId}` : null,
    userId ? (url) => get(url, router) : null,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [location, setLocation] = useState('');
  const [university, setUniversity] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [about, setAbout] = useState('');

  useEffect(() => {
    if (data) {
      setName(data.name);
      setLastname(data.lastname);
      setLocation(data.location);
      setUniversity(data.university);
      setEmail(data.email);
      setContact(data.contact);
      setAbout(data.about);
    }
  }, [data]);

  if (!data) return <h1>Loading...</h1>;

  const handleSave = async () => {
    const updateUserDto = {
      name,
      lastname,
      location,
      university,
      contact,
      about,
    };

    try {
      await patch(`/${userId}`, updateUserDto);
      router.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.primaryInfo}>
          <div className={styles.fieldsetRow}>
            <Fieldset
              type='input'
              label='ИМЯ'
              content={name}
              setValue={setName}
            />

            <Fieldset
              type='input'
              label='ФАМИЛИЯ'
              content={lastname}
              setValue={setLastname}
            />
          </div>

          <div className={styles.fieldsetRow}>
            <Fieldset
              type='input'
              label='ГОРОД'
              content={location}
              setValue={setLocation}
            />

            <Fieldset
              type='input'
              label='ВУЗ'
              content={university}
              setValue={setUniversity}
            />
          </div>

          <div className={styles.fieldsetRow}>
            <Fieldset
              type='input'
              label='ПОЧТА'
              content={email}
              setValue={setEmail}
            />

            <Fieldset
              type='input'
              label='КОНТАКТНАЯ ИНФОРМАЦИЯ'
              content={contact}
              setValue={setContact}
            />
          </div>
        </div>

        <Fieldset
          label='О СЕБЕ'
          type='textarea'
          content={about}
          setValue={setAbout}
        />

        <Button
          content='Сохранить изменения'
          style='primary'
          onClick={handleSave}
        />
      </section>
    </>
  );
}
