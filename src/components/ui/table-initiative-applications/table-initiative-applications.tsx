import ApplicationForInitiatorDto from '../../../dto/application-for-initiator-short.dto';
import { useModalContext } from '../../../hooks/modal-context';
import ModalInitiatorInitiativeApplication from '../modals/modal-initiator-initiative-application/modal-initiator-initiative-application';
import Status from '../status/status';
import Table from '../table/table';
import TableBody from '../table/table-body/table-body';
import TableHeader from '../table/table-header/table-header';
import TableCell from '../table/table-row/table-cell/table-cell';
import TableRow from '../table/table-row/table-row';
import styles from './table-initiative-applications.module.scss';

interface TableInitiativeApplicationsProps {
  applications: ApplicationForInitiatorDto[];
}

export default function TableInitiativeApplications({
  applications,
}: TableInitiativeApplicationsProps) {
  const { setModal } = useModalContext();

  const showModal = (applicationId: string) => {
    setModal(
      <ModalInitiatorInitiativeApplication applicationId={applicationId} />
    );
  };

  return (
    <Table className={styles.table}>
      <TableHeader>
        <TableRow>
          <TableCell>СОДЕЯТЕЛЬ</TableCell>
          <TableCell>СТАТУС</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app, idx) => (
          <TableRow
            key={idx}
            onClick={() => showModal(app.id)}>
            <TableCell>{`${app.applier.lastname} ${app.applier.name}`}</TableCell>
            <TableCell>
              <Status statusCode={app.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// interface InitiativeApplicationsTableProps {
//   applications: InitiativeApplicationShort[];
//   onSelect: (applicationId: string) => void;
// }

// const headerCells: HeaderCell[] = [
//   {
//     value: 'СОДЕЯТЕЛЬ',
//     width: 180,
//     paddingRight: 48,
//   },
//   {
//     value: 'СТАТУС',
//     width: 140,
//   },
//   {
//     width: 31,
//     value: <span style={{ visibility: 'hidden' }}>O</span>,
//   },
// ];

// export default function InitiativeApplicationsTable({
//   applications,
//   onSelect,
// }: InitiativeApplicationsTableProps) {
//   const bodyRows: TableRowProps[] = applications.map((application) => ({
//     bodyCells: [
//       { value: application.applier.lastname + ' ' + application.applier.name },
//       { value: application.status },
//       {
//         value: (
//           <OptionTooltip
//             options={[
//               {
//                 value: 'Подробнее',
//                 onClick: () => (
//                   <MyApplication
//                     applicationId={application.id}
//                     onClose={() => console.log('close')}
//                   />
//                 ),
//               },
//             ]}
//           />
//         ),
//       },
//     ] as BodyCell[],
//     onClick: () => onSelect(application.id),
//   }));

//   return (
//     <>
//       <Table
//         headerCells={headerCells}
//         bodyRows={bodyRows}
//       />
//     </>
//   );
// }
