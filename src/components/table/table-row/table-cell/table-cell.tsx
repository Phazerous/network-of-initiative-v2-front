import { ReactNode } from 'react';

interface TableCell {
  children: ReactNode;
  onClick?: (data: any) => void;
}

export default function TableCell({ children, onClick }: TableCell) {
  return (
    <>
      <td>
        <div>{children}</div>
      </td>
    </>
  );
}
