import styles from './table-row.module.scss';

interface TableRowProps {
  values: string[];
}

export default function TableRow({ values }: TableRowProps) {
  return (
    <>
      <tr className={styles.tr}>
        {values.map((value, idx) => (
          <td key={idx}>
            <div>{value}</div>
          </td>
        ))}
      </tr>
    </>
  );
}
