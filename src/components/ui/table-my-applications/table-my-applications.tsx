import ApplicationShortDto from '../../../dto/application-short-dto';
import Table from '../../table/table';
import TableBody from '../../table/table-body/table-body';
import TableHeader from '../../table/table-header/table-header';
import TableCell from '../../table/table-row/table-cell/table-cell';
import TableRow from '../../table/table-row/table-row';
import styles from './table-my-applications.module.scss';

interface TableMyApplicationsProps {
  applications: ApplicationShortDto[];
}

export default function TableMyApplications({
  applications,
}: TableMyApplicationsProps) {
  return (
    <Table className={styles.table}>
      <TableHeader>
        <TableRow>
          <TableCell>ИНИЦИАТИВА</TableCell>
          <TableCell>СТАТУС</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app, idx) => (
          <TableRow key={idx}>
            <TableCell>{app.initiative.title}</TableCell>
            <TableCell>{app.statusText}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
