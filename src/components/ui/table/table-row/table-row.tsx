import TableCell from '../table-cell/table-cell';
import styles from './table-row.module.scss';

export interface BodyCell {
  value: string;
  onClick?: () => void;
  statusColor: string;
}

export interface TableRowProps {
  bodyCells: BodyCell[];
  onClick?: () => void;
}

export default function TableRow({ bodyCells, onClick }: TableRowProps) {
  return (
    <tr onClick={onClick}>
      {bodyCells.map((bodyCell, idx) => (
        <TableCell
          onClick={bodyCell.onClick}
          key={idx}
          value={bodyCell.value}
          statusColor={bodyCell.statusColor}
        />
      ))}
    </tr>
  );
}
