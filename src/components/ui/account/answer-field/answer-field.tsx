import { SvgDetails, SvgTick, SvgXMark } from '../../../../../public/svgs';
import styles from './answer-field.module.scss';

interface AnswerFieldProps {
  type: 'rejected' | 'details' | 'approved';
}

export default function AnswerField({ type }: AnswerFieldProps) {
  const { style, value, svg } = getStyle(type);

  return (
    <>
      <div className={style}>
        {value}
        {svg}
      </div>
    </>
  );
}

function getStyle(type: string) {
  switch (type) {
    case 'rejected':
      return {
        style: styles.rejected,
        value: 'Отклонена',
        svg: <SvgXMark />,
      };

    case 'details':
      return {
        style: styles.details,
        value: 'Добавить детали',
        svg: <SvgDetails />,
      };

    case 'approved':
      return {
        style: styles.approved,
        value: 'Одобрена',
        svg: <SvgTick />,
      };
    default:
      return {
        style: '',
        value: 'Error',
        svg: <SvgXMark />,
      };
  }
}
