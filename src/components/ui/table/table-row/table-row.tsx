import { ReactNode } from 'react';

export interface TableRowProps {
  onClick?: (data?: any) => void;
  children: ReactNode;
}

export default function TableRow({ onClick, children }: TableRowProps) {
  const handleClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
    e.stopPropagation();
    onClick && onClick();
  };

  return (
    <>
      <tr onClick={handleClick}>{children}</tr>
    </>
  );
}
