import { ReactNode, isValidElement, useState } from 'react';
import styles from './table-cell.module.scss';

interface TableCellProps {
  value: string | ReactNode;
  statusColor?: string;
  width?: number;
  paddingRight?: number;
  onClick?: () => any;
}

export default function TableCell({
  value,
  width,
  paddingRight,
  statusColor,
  onClick,
}: TableCellProps) {
  const [conditionalRendring, setConditionalRendering] =
    useState<any>(undefined);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      e.stopPropagation();
      const res = onClick();

      if (isValidElement(res)) setConditionalRendering(res);
      if (conditionalRendring) setConditionalRendering(undefined);
    }
  };

  return (
    <>
      <td>
        <div
          onClick={handleClick}
          style={{
            width: width,
            paddingRight: `${paddingRight}px`,
            height: '100%',
          }}>
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
          {conditionalRendring}
        </div>
      </td>
    </>
  );
}
