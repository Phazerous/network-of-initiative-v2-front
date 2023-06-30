import TableCell from '../table-cell/table-cell';
import styles from './table-header.module.scss';

export interface HeaderCell {
  value: string;
  width: number;
  paddingRight?: number;
}

interface TableHeaderProps {
  headerCells: HeaderCell[];
}

export default function TableHeader({ headerCells }: TableHeaderProps) {
  return (
    <thead>
      <tr className={styles.headerRow}>
        {headerCells.map((headerCell, idx) => (
          <TableCell
            key={idx}
            value={headerCell.value}
            width={headerCell.width}
            paddingRight={headerCell.paddingRight}
          />
        ))}
      </tr>
    </thead>
  );
}
