interface ButtonProps {
  content: string;
  style: 'primary';
  onClick?: () => void;
}

import styles from './button.module.scss';

export default function Button({ content, style, onClick }: ButtonProps) {
  const buttonStyle = styleLookup[style];

  return (
    <>
      <button
        className={buttonStyle}
        onClick={onClick}>
        {content}
      </button>
    </>
  );
}

const styleLookup = {
  primary: styles.primary,
};
