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

  if (!applications || applications.length === 0) return;

  return (
    <Table className={styles.table}>
      <TableHeader>
        <TableRow>
          <TableCell>СОДЕЯТЕЛЬ</TableCell>
          <TableCell>СТАТУС</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications &&
          Array.isArray(applications) &&
          applications.map((app, idx) => (
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
