import styles from './status.module.scss';

interface StatusProps {
  statusCode: number;
}

export default function Status({ statusCode }: StatusProps) {
  return (
    <>
      <div className={styles.status}>
        <div
          className={`${styles.statusIcon} ${getStatusStyle(
            statusCode
          )}`}></div>
        <div className={styles.text}>{getStatusText(statusCode)}</div>
      </div>
    </>
  );
}

const getStatusText = (statusCode: number) => {
  switch (statusCode) {
    case 0:
      return 'На проверке';

    case 1:
      return 'Одобрена';

    case 2:
      return 'Отклонена';

    case 3:
      return 'Добавить детали';

    default:
      throw new Error('Unhandled status');
  }
};

const getStatusStyle = (statusCode: number) => {
  switch (statusCode) {
    case 0:
      return styles.onReview;

    case 1:
      return styles.approved;

    case 2:
      return styles.rejected;

    case 3:
      return styles.addDetails;
  }
};
