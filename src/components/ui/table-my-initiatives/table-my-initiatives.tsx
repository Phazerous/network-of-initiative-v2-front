import { useRouter } from 'next/router';
import InitiativeShortDto from '../../../dto/initiative-short.dto';
import { useActionMenu } from '../../../hooks/action-menu';
import Status from '../status/status';
import Table from '../table/table';
import TableBody from '../table/table-body/table-body';
import TableHeader from '../table/table-header/table-header';
import TableMore from '../table/table-more/table-more';
import TableOption from '../table/table-option/table-option';
import TableOptions from '../table/table-options/table-options';
import TableCell from '../table/table-row/table-cell/table-cell';
import TableRow from '../table/table-row/table-row';
import styles from './table-my-initiatives.module.scss';

interface TableMyInitiativesProps {
  initiatives: InitiativeShortDto[];
  onInitiativeSelect: (initiativeId: string) => void;
}

export default function TableMyInitiatives({
  initiatives,
  onInitiativeSelect,
}: TableMyInitiativesProps) {
  const { setActionMenu } = useActionMenu();
  const router = useRouter();

  const showContextMenu = (
    e: React.MouseEvent<HTMLTableCellElement>,
    initiativeId: string
  ) => {
    const { clientX: x, clientY: y } = e;
    setActionMenu(
      <TableOptions
        x={x}
        y={y}>
        <TableOption
          value='Открыть инициативу'
          onClick={() => {
            setActionMenu(undefined);
            router.push(`/initiatives/${initiativeId}`);
          }}
        />
      </TableOptions>
    );
  };

  return (
    <Table className={styles.table}>
      <TableHeader>
        <TableRow>
          <TableCell>ИНИЦИАТИВА</TableCell>
          <TableCell>СТАТУС</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {initiatives.map((initiative, idx) => (
          <TableRow
            key={idx}
            onClick={() => onInitiativeSelect(initiative.id)}>
            <TableCell>{initiative.title}</TableCell>
            <TableCell>
              <Status statusCode={initiative.status} />
            </TableCell>
            <TableCell
              onClick={(e: React.MouseEvent<HTMLTableCellElement>) =>
                showContextMenu(e, initiative.id)
              }>
              <TableMore />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
