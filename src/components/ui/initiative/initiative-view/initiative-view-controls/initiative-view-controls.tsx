import { SvgCopy, SvgPencil, SvgPlane } from '../../../../../../public/svgs';
import Button from '../../../../ui/button/button';
import InitiativeControls from '../../initiative-controls/initiative-controls';
import { useModalContext } from '../../../../../hooks/modal-context';
import ModalInitiativeApply from '../../../../ui/modals/modal-initaitive-apply/modal-initiative-apply';

interface InitiativeViewControlsProps {
  title: string;
  initiativeId: string;
}

export default function InitiativeViewControls({
  title,
  initiativeId,
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

        <Button
          style='primary'
          content='Подать заявку'
          onClick={handleApply}
          svgIcon={<SvgPlane />}
        />
      </InitiativeControls>
    </>
  );
}
