import InitiativeDto from '../../../../dto/initiative.dto';
import TextField from '../../../ui/text-field/text-field';
import InitiativeViewControls from './initiative-view-controls/initiative-view-controls';
import styles from './initiative-view.module.scss';

interface InitiativeViewProps {
  initiative: InitiativeDto;
  onEdit: () => void;
}

export default function InitiativeView({
  initiative: {
    id,
    title,
    stage,
    location,
    university,
    description,
    searching,
    canEdit,
  },
  onEdit,
}: InitiativeViewProps) {
  return (
    <>
      <TextField
        label='НАЗВАНИЕ ИНИЦИАТИВЫ'
        value={title}
      />

      <div className={styles.details}>
        <TextField
          label='СТАТУС'
          value={stage}
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
        label='ОПИСАНИЕ ПРОЕКТА'
        value={description}
      />

      <TextField
        label='КОГО МЫ ИЩЕМ'
        value={searching}
      />

      <InitiativeViewControls
        onEdit={onEdit}
        canEdit={canEdit}
        initiativeId={id}
      />
    </>
  );
}
