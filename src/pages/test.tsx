import Table from '../components/table/table';
import TableBody from '../components/table/table-body/table-body';
import TableHeader from '../components/table/table-header/table-header';
import TableCell from '../components/table/table-row/table-cell/table-cell';
import styles from '../styles/pages/my-initiatives.module.scss';
import TableRow, {
  TableRowProps,
} from '../components/table/table-row/table-row';

export default function Test() {
  return (
    <>
      <div className={styles.fast}>
        <Table className={styles.table}>
          <TableHeader>
            <TableRow>
              <TableCell>Hello world</TableCell>
              <TableCell>How are you doing?</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Oh yeah</TableCell>
              <TableCell>I`m going to run</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Oh yeah</TableCell>
              <TableCell>I`m going to run</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
