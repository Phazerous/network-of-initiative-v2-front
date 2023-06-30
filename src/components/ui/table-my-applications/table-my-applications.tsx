import ApplicationShortDto from '../../../dto/application-short-dto';
import Table from '../table/table';
import { TableRowProps } from '../table/table-row/table-row';
import styles from './table-my-applications.module.scss';

interface TableMyApplicationsProps {
  applications: ApplicationShortDto[];
}

const headerRow = {
  values: ['ИНИЦИАТИВА', 'СТАТУС'],
};

export default function TableMyApplications({
  applications,
}: TableMyApplicationsProps) {
  const tableRows = applications.map(
    (it) =>
      ({
        values: [it.initiative.title, it.status],
        onClick: () => console.log(it.initiative.title),
      } as TableRowProps)
  );

  const rows = [headerRow, ...tableRows];

  return (
    <>
      <Table
        rows={rows}
        className={styles.table}
      />
    </>
  );
}
