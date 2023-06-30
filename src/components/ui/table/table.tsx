import TableRow, { TableRowProps } from './table-row/table-row';

import styles from './table.module.scss';

interface TableProps {
  rows: TableRowProps[];
  className?: string;
}

export default function Table({ rows, className }: TableProps) {
  const headerRow = rows[0];
  const bodyRows = rows.slice(1);

  const computedStyles = `${styles.table} ${className}`;

  console.log(bodyRows, typeof bodyRows);

  return (
    <>
      <table className={computedStyles}>
        <thead>
          <TableRow {...headerRow} />
        </thead>
        <tbody>
          {bodyRows.map((row) => (
            <TableRow
              key={row.values[0]}
              {...row}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
