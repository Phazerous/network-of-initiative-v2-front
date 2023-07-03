import { useState } from 'react';
import { SvgCopy, SvgPencil, SvgPlane } from '../../../../../../public/svgs';
import Button from '../../../../ui/button/button';
import InitiativeControls from '../../initiative-controls/initiative-controls';
import InitiativeApplyModal from './initiative-apply-modal/initiative-apply-modal';

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
  const [isApplying, setApplying] = useState(false);

  const handleCopy = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
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
            onClick={() => setApplying(true)}
            auto={true}
            svgIcon={<SvgPlane />}
          />
        )}
      </InitiativeControls>

      {isApplying && (
        <InitiativeApplyModal
          title={title}
          initiativeId={initiativeId}
          handleClose={() => setApplying(false)}
        />
      )}
    </>
  );
}
