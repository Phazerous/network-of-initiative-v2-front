import { isValidElement, useState } from 'react';
import styles from './option-tooltip.module.scss';
import { SvgDots } from '../../../../public/svgs';

interface TooltipOptions {
  value: string;
  onClick: () => void;
}

interface OptionTooltipProps {
  options: TooltipOptions[];
}

export default function OptionTooltip({ options }: OptionTooltipProps) {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState<any>(undefined);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, func: any) => {
    e.stopPropagation();

    const obj = func();

    if (isValidElement(obj)) setModal(obj);
  };

  const handleOptionsClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShow(!show);
  };

  return (
    <>
      <div
        style={{ display: 'inline-flex', padding: '0 6px 0 6px' }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          handleOptionsClick(e)
        }>
        <SvgDots />
      </div>

      {show && (
        <div className={styles.options}>
          {options.map((option, idx) => {
            return (
              <div
                className={styles.option}
                key={idx}
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                  handleClick(e, option.onClick)
                }>
                {option.value}
              </div>
            );
          })}
        </div>
      )}

      {modal}
    </>
  );
}
