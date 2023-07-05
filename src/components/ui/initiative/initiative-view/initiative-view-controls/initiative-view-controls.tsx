import { SvgCopy, SvgPencil, SvgPlane } from '../../../../../../public/svgs';
import Button from '../../../../ui/button/button';
import InitiativeControls from '../../initiative-controls/initiative-controls';
import { useModalContext } from '../../../../../hooks/modal-context';
import ModalInitiativeApply from '../../../../ui/modals/modal-initaitive-apply/modal-initiative-apply';

interface InitiativeViewControlsProps {
  title: string;
  onEdit: () => void;
  canEdit: boolean;
  initiativeId: string;
}

export default function InitiativeViewControls({
  title,
  initiativeId,
  onEdit,
  canEdit,
}: InitiativeViewControlsProps) {
  const { setModal } = useModalContext();

  const handleCopy = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
  };

  const handleApply = () => {
    setModal(
      <ModalInitiativeApply
        title={title}
        initiativeId={initiativeId}
      />
    );
  };

  return (
    <>
      <InitiativeControls>
        <div style={{ marginRight: 'auto', display: 'inline' }}>
          <Button
            style='secondary'
            content='Скопировать ссылку'
            onClick={handleCopy}
            svgIcon={<SvgCopy />}
          />
        </div>

        {!canEdit ? (
          <Button
            style='primary'
            content='Редактировать'
            onClick={onEdit}
            svgIcon={<SvgPencil />}
          />
        ) : (
          <Button
            style='primary'
            content='Подать заявку'
            onClick={handleApply}
            svgIcon={<SvgPlane />}
          />
        )}
      </InitiativeControls>
    </>
  );
}
