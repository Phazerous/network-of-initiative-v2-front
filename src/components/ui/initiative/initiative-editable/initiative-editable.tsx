import { useState } from 'react';
import InitiativeDto from '../../../../dto/initiative.dto';
import styles from './initiative-editable.module.scss';
import EditableTextField from '../../../ui/editable-text-field/editable-text-field';
import InitiativeEditableControls from './initiative-editable-controls/initiative-editable-controls';
import InitiativeCreationControls from './initiative-creation-controls/initiative-creation-controls';

interface InitiativeEditableProps {
  initiative?: InitiativeDto;
  mode: 'edit' | 'create';
  handleReturn?: () => void;
}

export default function InitiativeEditable({
  mode,
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
        content={title}
        setValue={setTitle}
      />

      <div className={styles.details}>
        <EditableTextField
          type='input'
          label='СТАТУС'
          content={stage}
          setValue={setStage}
        />

        <EditableTextField
          type='input'
          label='ГОРОД'
          content={location}
          setValue={setLocation}
        />

        <EditableTextField
          type='input'
          label='ВУЗ'
          content={university}
          setValue={setUniversity}
        />
      </div>

      <EditableTextField
        type='textarea'
        label='ОПИСАНИЕ ПРОЕКТА'
        content={description}
        setValue={setDescription}
      />

      <EditableTextField
        type='textarea'
        label='КОГО МЫ ИЩЕМ'
        content={searching}
        setValue={setSearching}
      />

      {mode === 'edit' && handleReturn && (
        <InitiativeEditableControls
          handleReturn={handleReturn}
          handleSave={handleSave}
        />
      )}

      {mode === 'create' && (
        <InitiativeCreationControls
          initiative={{
            title,
            stage,
            location,
            university,
            description,
            searching,
          }}
        />
      )}
    </>
  );
}
