interface ButtonProps {
  content: string;
  style: 'primary';
}

import styles from './button.module.scss';

export default function Button({ content, style }: ButtonProps) {
  const buttonStyle = styleLookup[style];

  return (
    <>
      <button className={buttonStyle}>{content}</button>
    </>
  );
}

const styleLookup = {
  primary: styles.primary,
};
