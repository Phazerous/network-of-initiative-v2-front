import Table from '../table/table';
import styles from './table-my-applications.module.scss';

const headerRow = ['ИНИЦИАТИВА', 'СТАТУС'];

const dummy = ['bla', 'bla'];

export default function TableMyApplications() {
  const values = [headerRow, dummy, dummy];

  return (
    <>
      <Table
        values={values}
        className={styles.table}
      />
    </>
  );
}
