import React from 'react';
import ApplicationShortDto from '../../../dto/application-short-dto';
import { useActionMenu } from '../../../hooks/action-menu';
import { useModalContext } from '../../../hooks/modal-context';
import styles from './table-my-applications.module.scss';
import TableOptions from '../table/table-options/table-options';
import TableOption from '../table/table-option/table-option';
import ModalMyApplication from '../modals/modal-my-application/modal-my-application';
import Table from '../table/table';
import TableHeader from '../table/table-header/table-header';
import TableRow from '../table/table-row/table-row';
import TableCell from '../table/table-row/table-cell/table-cell';
import TableBody from '../table/table-body/table-body';
import TableMore from '../table/table-more/table-more';

interface TableMyApplicationsProps {
  applications: ApplicationShortDto[];
}

export default function TableMyApplications({
  applications,
}: TableMyApplicationsProps) {
  const { actionMenu, setActionMenu } = useActionMenu();
  const { modal, setModal } = useModalContext();

  const showContextMenu = (
    e: React.MouseEvent<HTMLTableCellElement>,
    applicationId: string
  ) => {
    const { clientX: x, clientY: y } = e;
    setActionMenu(
      <TableOptions
        x={x}
        y={y}>
        <TableOption
          value='Подробнее'
          onClick={() =>
            setModal(<ModalMyApplication applicationId={applicationId} />)
          }
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
          <TableCell />
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app, idx) => (
          <TableRow key={idx}>
            <TableCell>{app.initiative.title}</TableCell>
            <TableCell>{app.statusText}</TableCell>
            <TableCell
              onClick={(e: React.MouseEvent<HTMLTableCellElement>) =>
                showContextMenu(e, app.id)
              }>
              <TableMore />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
