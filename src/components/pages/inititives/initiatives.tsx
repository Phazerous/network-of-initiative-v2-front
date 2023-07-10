import { useRouter } from 'next/router';
import Table from '../../ui/table/table';
import TableBody from '../../ui/table/table-body/table-body';
import TableHeader from '../../ui/table/table-header/table-header';
import TableCell from '../../ui/table/table-row/table-cell/table-cell';
import useSWR from 'swr';
import { getInitiatives } from '../../../lib/requests/initiatives';
import TableRow from '../../ui/table/table-row/table-row';
import styles from './initiatives.module.scss';

export default function InitiativesPage() {
  const router = useRouter();
  const { data: initiatives, error } = useSWR('z', () =>
    getInitiatives(router)
  );

  if (!initiatives) return <h1>Loading...</h1>;

  return (
    <>
      <Table className={styles.table}>
        <TableHeader>
          <TableRow>
            <TableCell>ИНИЦИАТИВА</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initiatives.map((initiative, idx) => (
            <TableRow key={idx}>
              <TableCell>{initiative.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
