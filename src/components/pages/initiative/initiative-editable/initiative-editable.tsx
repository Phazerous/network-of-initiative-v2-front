import { useState } from 'react';
import InitiativeDto from '../../../../dto/initiative.dto';

import styles from './initiative-editable.module.scss';
import EditableTextField from '../../../ui/fieldset/fieldset';
import InitiativeEditableControls from './initiative-editable-controls/initiative-editable-controls';

interface InitiativeEditableProps {
  initiative?: InitiativeDto;
  mode: 'edit' | 'create';
  handleReturn: () => void;
}

export default function InitiativeEditable({
  initiative,
  handleReturn,
}: InitiativeEditableProps) {
  const [title, setTitle] = useState(initiative?.title ?? '');
  const [stage, setStage] = useState(initiative?.stage ?? '');
  const [location, setLocation] = useState(initiative?.location ?? '');
  const [university, setUniversity] = useState(initiative?.university ?? '');
  const [description, setDescription] = useState(initiative?.description ?? '');
  const [searching, setSearching] = useState(initiative?.description ?? '');

  const handleSave = () => {};

  return (
    <>
      <EditableTextField
        type='input'
        label='НАЗВАНИЕ ИНИЦИАТИВЫ'
        value={title}
        setValue={setTitle}
      />

      <div className={styles.details}>
        <EditableTextField
          type='input'
          label='СТАТУС'
          value={stage}
          setValue={setStage}
        />

        <EditableTextField
          type='input'
          label='ГОРОД'
          value={location}
          setValue={setLocation}
        />

        <EditableTextField
          type='input'
          label='ВУЗ'
          value={university}
          setValue={setUniversity}
        />
      </div>

      <EditableTextField
        type='textarea'
        label='ОПИСАНИЕ ПРОЕКТА'
        value={description}
        setValue={setDescription}
      />

      <EditableTextField
        type='textarea'
        label='КОГО МЫ ИЩЕМ'
        value={searching}
        setValue={setSearching}
      />

      <InitiativeEditableControls
        handleReturn={handleReturn}
        handleSave={handleSave}
      />
    </>
  );
}
