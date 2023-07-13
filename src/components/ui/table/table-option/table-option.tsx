import styles from './table-option.module.scss';

interface TableOption {
  value: string;
  onClick: () => void;
}

export default function TableOption({ value, onClick }: TableOption) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    onClick();
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={styles.option}>
        {value}
      </div>
    </>
  );
}
