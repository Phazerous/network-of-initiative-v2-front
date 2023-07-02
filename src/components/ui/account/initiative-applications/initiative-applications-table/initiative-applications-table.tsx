import { InitiativeApplicationShort } from '../../../../../lib/requests/account';
import Table from '../../../table/table';
import { HeaderCell } from '../../../table/table-header/table-header';
import { BodyCell, TableRowProps } from '../../../table/table-row/table-row';

interface InitiativeApplicationsTableProps {
  applications: InitiativeApplicationShort[];
}

const headerCells: HeaderCell[] = [
  {
    value: 'СОДЕЯТЕЛЬ',
    width: 180,
    paddingRight: 48,
  },
  {
    value: 'СТАТУС',
    width: 140,
  },
];

export default function InitiativeApplicationsTable({
  applications,
}: InitiativeApplicationsTableProps) {
  const bodyRows: TableRowProps[] = applications.map((application) => ({
    bodyCells: [
      { value: application.applier.lastname + ' ' + application.applier.name },
      { value: application.status },
    ] as BodyCell[],
  }));

  return (
    <>
      <Table
        headerCells={headerCells}
        bodyRows={bodyRows}
      />
    </>
  );
}
