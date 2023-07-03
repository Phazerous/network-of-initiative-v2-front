import TableHeader, { HeaderCell } from './table-header/table-header';
import TableRow, { TableRowProps } from './table-row/table-row';

import styles from './table.module.scss';

interface TableProps {
  headerCells: HeaderCell[];
  bodyRows: TableRowProps[];
  className?: string;
}

export default function Table({ headerCells, bodyRows }: TableProps) {
  console.log(bodyRows);

  return (
    <>
      <table className={styles.table}>
        <TableHeader headerCells={headerCells} />
        <tbody>
          {bodyRows.map((bodyRow, idx) => (
            <TableRow
              key={idx}
              {...bodyRow}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
