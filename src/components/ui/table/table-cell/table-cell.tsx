interface TableCellProps {
  value: string;
  width?: number;
  paddingRight?: number;
}

export default function TableCell({
  value,
  width,
  paddingRight,
}: TableCellProps) {
  return (
    <>
      <td>
        <div style={{ width: width, paddingRight: `${paddingRight}px` }}>
          {value}
        </div>
      </td>
    </>
  );
}
