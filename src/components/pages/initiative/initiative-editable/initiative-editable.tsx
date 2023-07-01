import { useState } from 'react';
import InitiativeDto from '../../../../dto/initiative.dto';
import Fieldset from '../../../ui/fieldset/fieldset';
import styles from './initiative-editable.module.scss';
import Button from '../../../ui/button/button';
import createInitiative from '../../../../lib/requests/initiatives';
import { useRouter } from 'next/router';
import { redirectToAccount } from '../../../../lib/requests/account';

interface InitiativeEditableProps {
  initiative?: InitiativeDto;
}

export default function InitiativeEditable({
  initiative,
}: InitiativeEditableProps) {
  const router = useRouter();

  const [title, setTitle] = useState(initiative?.title ?? '');
  const [stage, setStage] = useState(initiative?.stage ?? '');
  const [location, setLocaiton] = useState(initiative?.location ?? '');
  const [university, setUniversity] = useState(initiative?.university ?? '');
  const [description, setDescription] = useState(initiative?.description ?? '');
  const [searching, setSearching] = useState(initiative?.searching ?? '');

  const handleSave = async () => {
    const initiativeDto = {
      title,
      stage,
      location,
      university,
      description,
      searching,
    };

    try {
      await createInitiative(initiativeDto);
      redirectToAccount(router);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <div className={styles.form}>
          <Fieldset
            type='input'
            label='НАЗВАНИЕ ИНИЦИАТИВЫ'
            value={title}
            setValue={setTitle}
          />

          <div className={styles.details}>
            <Fieldset
              type='input'
              label='СТАТУС'
              value={stage}
              setValue={setStage}
            />

            <Fieldset
              type='input'
              label='ГОРОД'
              value={location}
              setValue={setLocaiton}
            />

            <Fieldset
              type='input'
              label='ВУЗ'
              value={university}
              setValue={setUniversity}
            />
          </div>

          <Fieldset
            type='textarea'
            label='ОПИСАНИЕ ПРОЕКТА'
            value={description}
            setValue={setDescription}
          />

          <Fieldset
            type='textarea'
            label='КОГО МЫ ИЩЕМ'
            value={searching}
            setValue={setSearching}
          />
        </div>
      </div>

      <div className={styles.controls}>
        <Button
          style='primary'
          value='Создать'
          onClick={handleSave}
          auto={true}
        />
      </div>
    </>
  );
}
