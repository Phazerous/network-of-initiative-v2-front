import styles from './table-option.module.scss';

interface TableOption {
  value: string;
  onClick: () => void;
}

export default function TableOption({ value, onClick }: TableOption) {
  return (
    <>
      <div
        onClick={onClick}
        className={styles.option}>
        {value}
      </div>
    </>
  );
}
