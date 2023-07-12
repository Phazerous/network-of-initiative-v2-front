import Image from 'next/image';
import styles from './spinner.module.scss';

export default function Spinner() {
  return (
    <>
      <div className={styles.wrapper}>
        <Image
          src={'/gifs/spinner.gif'}
          width={40}
          height={120}
          alt='gif'
        />
      </div>
    </>
  );
}
