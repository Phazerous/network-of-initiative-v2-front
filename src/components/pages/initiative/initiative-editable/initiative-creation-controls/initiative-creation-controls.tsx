import { SvgCreate } from '../../../../../../public/svgs';
import InitiativeDto from '../../../../../dto/initiative.dto';
import Button from '../../../../ui/button/button';
import InitiativeControls from '../../initiative-controls/initiative-controls';

interface InitiativeCreationControls {
  initiative: Omit<InitiativeDto, 'id' | 'canEdit'>;
}

export default function InitiativeCreationControls({
  initiative,
}: InitiativeCreationControls) {
  const handleCreate = async () => {};

  return (
    <>
      <InitiativeControls>
        <Button
          style='primary'
          value='Создать инициативу'
          svgIcon={<SvgCreate />}
          onClick={handleCreate}
        />
      </InitiativeControls>
    </>
  );
}
