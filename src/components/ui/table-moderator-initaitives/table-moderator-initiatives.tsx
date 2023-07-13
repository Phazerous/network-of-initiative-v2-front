import useSWR from 'swr';
import { getInitiativeToModerate } from '../../../lib/requests/moderator';
import { useRouter } from 'next/router';
import Spinner from '../spinner/spinner';
import TableHeader from '../table/table-header/table-header';
import TableRow from '../table/table-row/table-row';
import TableCell from '../table/table-row/table-cell/table-cell';
import TableBody from '../table/table-body/table-body';
import Table from '../table/table';
import { useModalContext } from '../../../hooks/modal-context';
import ModalModeratorInitiative from '../modals/modal-moderator-initiative/modal-moderator-initiative';
import styles from './table-moderator-initiatives.module.scss';

export default function TableModeratorInitiatives() {
  const router = useRouter();
  const { data: initiatives, error } = useSWR('rand', () =>
    getInitiativeToModerate(router)
  );
  const { setModal } = useModalContext();

  if (!initiatives) return <Spinner />;

  return (
    <Table className={styles.table}>
      <TableHeader>
        <TableRow>
          <TableCell>ИНИЦИАТИВА</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {initiatives.map((initiative, idx) => (
          <TableRow
            key={idx}
            onClick={() =>
              setModal(
                <ModalModeratorInitiative
                  id={initiative.id}
                  title={initiative.title}
                />
              )
            }>
            <TableCell>{initiative.title}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
