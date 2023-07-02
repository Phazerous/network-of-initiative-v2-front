import styles from './table-cell.module.scss';

interface TableCellProps {
  value: string;
  statusColor?: string;
  width?: number;
  paddingRight?: number;
}

export default function TableCell({
  value,
  width,
  paddingRight,
  statusColor,
}: TableCellProps) {
  return (
    <>
      <td>
        <div style={{ width: width, paddingRight: `${paddingRight}px` }}>
          {statusColor && (
            <div
              className={styles.status}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '100%',
                backgroundColor: statusColor,
                marginRight: '8px',
                display: 'inline-block',
              }}></div>
          )}
          {value}
        </div>
      </td>
    </>
  );
}
