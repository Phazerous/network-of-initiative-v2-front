import { SvgDetails, SvgTick, SvgXMark } from '../../../../../public/svgs';
import styles from './answer-field.module.scss';

interface AnswerFieldProps {
  type: 'rejected' | 'details' | 'approved' | number;
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

function getStyle(type: string | number) {
  switch (type) {
    case 'rejected':
    case 2:
      return {
        style: styles.rejected,
        value: 'Отклонена',
        svg: <SvgXMark />,
      };

    case 'approved':
    case 1:
      return {
        style: styles.approved,
        value: 'Одобрена',
        svg: <SvgTick />,
      };

    case 0:
      return {
        value: 'На рассмотрении',
      };

    default:
      return {
        style: '',
        value: 'Необходимо открыть снова',
      };
  }
}
