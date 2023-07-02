import ApplicationShortDto from '../../../dto/application-short-dto';
import Table from '../table/table';
import { HeaderCell } from '../table/table-header/table-header';
import { BodyCell, TableRowProps } from '../table/table-row/table-row';
import styles from './table-my-applications.module.scss';

interface TableMyApplicationsProps {
  applications: ApplicationShortDto[];
}

export default function TableMyApplications({
  applications,
}: TableMyApplicationsProps) {
  const bodyRows: TableRowProps[] = applications.map((app) => ({
    bodyCells: [
      { value: app.initiative.title },
      { value: app.statusText, statusColor: app.statusColor },
    ] as BodyCell[],
    onClick: () => console.log(app.id),
  }));

  return (
    <>
      <Table
        headerCells={headerCells}
        bodyRows={bodyRows}
        className={styles.table}
      />
    </>
  );
}

const headerCells: HeaderCell[] = [
  {
    value: 'ИНИЦИАТИВА',
    width: 300,
    paddingRight: 28,
  },
  {
    value: 'СТАТУС',
    width: 180,
  },
];
