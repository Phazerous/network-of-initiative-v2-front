import { ReactNode } from 'react';

interface TableHeaderProps {
  children: ReactNode;
}

export default function TableHeader({ children }: TableHeaderProps) {
  return (
    <>
      <thead>{children}</thead>
    </>
  );
}
