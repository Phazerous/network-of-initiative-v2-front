import TextField from '../ui/text-field/text-field';
import styles from './user-card.module.scss';

interface UserCardProps {
  name: string;
  lastname: string;
  location: string;
  university: string;
  contact: string;
  about: string;
}

export default function UserCard({
  name,
  lastname,
  location,
  university,
  contact,
  about,
}: UserCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.firstRow}>
        <TextField
          label='ИМЯ'
          value={name}
        />
        <TextField
          label='ФАМИЛИЯ'
          value={lastname}
        />
        <TextField
          label='ГОРОД'
          value={location}
        />
        <TextField
          label='ВУЗ'
          value={university}
        />
      </div>
      <TextField
        label='КОНТАКТНАЯ ИНФОРМАЦИЯ'
        value={contact}
      />

      <TextField
        label='О СЕБЕ'
        value={about}
      />
    </div>
  );
}
