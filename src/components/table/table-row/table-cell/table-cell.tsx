import { ReactNode } from 'react';

export interface TableCellProps {
  children: ReactNode;
  onClick?: (data: any) => void;
}

export default function TableCell({ children, onClick }: TableCellProps) {
  return (
    <>
      <td
        style={{ userSelect: 'none' }}
        onClick={onClick}>
        <div>{children}</div>
      </td>
    </>
  );
}
