import { ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
}

export default function Table({ children }: TableProps) {
  return (
    <>
      <table>{children}</table>
    </>
  );
}
