import styles from './table-row.module.scss';

export interface TableRowProps {
  values: string[];
  onClick?: () => void;
}

export default function TableRow({ values, onClick }: TableRowProps) {
  return (
    <>
      <tr
        className={styles.tr}
        onClick={onClick}>
        {values.map((value, idx) => (
          <td key={idx}>
            <div>{value}</div>
          </td>
        ))}
      </tr>
    </>
  );
}
