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
  onSelect?: (initiativeId: string) => void;
}

export default function MyInitiativesTable({
  initiatives,
  onSelect,
}: MyInitiativesProps) {
  const bodyRows: TableRowProps[] = initiatives.map((initiative) => ({
    bodyCells: [
      { value: initiative.title },
      { value: initiative.statusText, statusColor: initiative.statusColor },
    ] as BodyCell[],
    onClick: () => onSelect && onSelect(initiative.id),
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
