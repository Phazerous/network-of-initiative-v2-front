import { SvgPencil, SvgReturn, SvgSave } from '../../../../../../public/svgs';
import Button from '../../../../ui/button/button';
import InitiativeControls from '../../initiative-controls/initiative-controls';

interface InitiativeEditableControlsProps {
  handleSave: () => void;
  handleReturn: () => void;
}

export default function InitiativeEditableControls({
  handleSave,
  handleReturn,
}: InitiativeEditableControlsProps) {
  return (
    <>
      <InitiativeControls>
        <div style={{ display: 'inline', marginRight: '16px' }}>
          <Button
            style='secondary'
            content='Вернуться'
            svgIcon={<SvgReturn />}
            onClick={handleReturn}
          />
        </div>

        <Button
          style='primary'
          content='Сохранить изменения'
          svgIcon={<SvgSave />}
          onClick={handleSave}
        />
      </InitiativeControls>
    </>
  );
}
