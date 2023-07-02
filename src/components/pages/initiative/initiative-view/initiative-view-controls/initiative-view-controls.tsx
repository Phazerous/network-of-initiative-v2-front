import { SvgCopy, SvgPencil, SvgPlane } from '../../../../../../public/svgs';
import Button from '../../../../ui/button/button';
import InitiativeControls from '../../initiative-controls/initiative-controls';

interface InitiativeViewControlsProps {
  onEdit: () => void;
  canEdit: boolean;
  initiativeId: string;
}

export default function InitiativeViewControls({
  onEdit,
  canEdit,
}: InitiativeViewControlsProps) {
  const handleCopy = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
  };

  const handleApply = () => {
    //TODO MODAL
  };

  return (
    <>
      <InitiativeControls>
        <div style={{ marginRight: 'auto', display: 'inline' }}>
          <Button
            style='secondary'
            value='Скопировать ссылку'
            onClick={handleCopy}
            auto={true}
            svgIcon={<SvgCopy />}
          />
        </div>

        {!canEdit ? (
          <Button
            style='primary'
            value='Редактировать'
            onClick={onEdit}
            auto={true}
            svgIcon={<SvgPencil />}
          />
        ) : (
          <Button
            style='primary'
            value='Подать заявку'
            onClick={handleApply}
            auto={true}
            svgIcon={<SvgPlane />}
          />
        )}
      </InitiativeControls>
    </>
  );
}
