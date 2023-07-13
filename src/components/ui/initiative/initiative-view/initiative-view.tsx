import InitiativeDto from '../../../../dto/initiative.dto';
import TextField from '../../../ui/text-field/text-field';
import InitiativeViewControls from './initiative-view-controls/initiative-view-controls';
import styles from './initiative-view.module.scss';

interface InitiativeViewProps {
  initiative: Pick<
    InitiativeDto,
    | 'id'
    | 'title'
    | 'stage'
    | 'location'
    | 'description'
    | 'searching'
    | 'university'
  >;
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
  },
}: InitiativeViewProps) {
  return (
    <>
      <TextField
        label='НАЗВАНИЕ ИНИЦИАТИВЫ'
        content={title}
      />

      <div className={styles.details}>
        <TextField
          label='СТАТУС'
          content={stage}
        />

        <TextField
          label='ГОРОД'
          content={location}
        />

        <TextField
          label='ВУЗ'
          content={university}
        />
      </div>

      <TextField
        label='ОПИСАНИЕ ПРОЕКТА'
        content={description}
      />

      <TextField
        label='КОГО МЫ ИЩЕМ'
        content={searching}
      />

      <InitiativeViewControls
        title={title}
        initiativeId={id}
      />
    </>
  );
}
