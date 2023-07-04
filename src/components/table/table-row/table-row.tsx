import { ReactNode } from 'react';

export interface TableRowProps {
  onClick?: (data: any) => void;
  children: ReactNode;
}

export default function TableRow({ onClick, children }: TableRowProps) {
  return (
    <>
      <tr onClick={onClick}>{children}</tr>
    </>
  );
}
