import { SvgCopy, SvgPencil, SvgPlane } from '../../../../../public/svgs';
import InitiativeDto from '../../../../dto/initiative.dto';
import Button from '../../../ui/button/button';
import TextField from '../../../ui/text-field/text-field';
import styles from './initiative-view.module.scss';

interface InitiativeViewProps {
  initiative: InitiativeDto;
  onEdit: () => void;
}

export default function InitiativeView({
  initiative: {
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
  const handleApply = () => {};
  const handleCopy = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
  };

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

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '64px',
        }}>
        <Button
          style='secondary'
          value='Скопировать ссылку'
          onClick={handleCopy}
          auto={true}
          className={styles.stickToLeft}
          svgIcon={<SvgCopy />}
        />

        {canEdit ? (
          <Button
            style='primary'
            value='Редактировать'
            onClick={onEdit}
            auto={true}
            svgIcon={<SvgPencil />}
          />
        ) : (
          <Button
            style='primary'
            value='Подать заявку'
            onClick={handleApply}
            auto={true}
            svgIcon={<SvgPlane />}
          />
        )}
      </div>
    </>
  );
}
