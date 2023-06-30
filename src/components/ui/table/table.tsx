import TableRow from './table-row/table-row';

import styles from './table.module.scss';

interface TableProps {
  values: string[][];
  className?: string;
}

export default function Table({ values, className }: TableProps) {
  const headerValues = values[0];
  const rowsValues = values.slice(1);

  const computedStyles = `${styles.table} ${className}`;

  return (
    <>
      <table className={computedStyles}>
        <thead>
          <TableRow values={headerValues} />
        </thead>
        <tbody>
          {rowsValues.map((rowValues) => (
            <TableRow
              key={rowValues[0]}
              values={rowValues}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
