import { SvgDetails, SvgTick, SvgXMark } from '../../../../public/svgs';
import styles from './action-button.module.scss';

export enum ActionButtonType {
  REJECT = 'Отклонить',
  APPROVE = 'Одобрить',
  DETAILS = 'Добавить детали',
}

interface ActionButtonProps {
  actionType: ActionButtonType;
  onClick: () => void;
}

export default function ActionButton({
  actionType,
  onClick,
}: ActionButtonProps) {
  const buttonProps = getButtonProps(actionType);

  return (
    <>
      <div
        className={buttonProps.style}
        onClick={onClick}>
        <span>{actionType}</span>
        {buttonProps.icon}
      </div>
    </>
  );
}

function getButtonProps(actionType: ActionButtonType) {
  switch (actionType) {
    case ActionButtonType.REJECT:
      return {
        style: styles.reject,
        icon: <SvgXMark />,
      };
    case ActionButtonType.APPROVE:
      return {
        style: styles.approve,
        icon: <SvgTick />,
      };
    case ActionButtonType.DETAILS:
      return {
        style: styles.details,
        icon: <SvgDetails />,
      };
  }
}
