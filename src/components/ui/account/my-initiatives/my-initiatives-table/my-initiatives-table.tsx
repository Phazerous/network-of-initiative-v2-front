import Table from '../../../table/table';
import { HeaderCell } from '../../../table/table-header/table-header';
import { BodyCell, TableRowProps } from '../../../table/table-row/table-row';
import InitiativeShortDto from './initiative-short.dto';

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

interface MyInitiativesProps {
  initiatives: InitiativeShortDto[];
}

export default function MyInitiativesTable({
  initiatives,
}: MyInitiativesProps) {
  const bodyRows: TableRowProps[] = initiatives.map((initiative) => ({
    bodyCells: [
      { value: initiative.title },
      { value: initiative.status },
    ] as BodyCell[],
    onClick: () => console.log(initiative.id),
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
