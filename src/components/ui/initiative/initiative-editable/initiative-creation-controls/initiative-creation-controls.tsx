import { useRouter } from 'next/router';
import { SvgCreate } from '../../../../../../public/svgs';
import InitiativeDto from '../../../../../dto/initiative.dto';
import { createInitiative } from '../../../../../lib/requests/initiatives';
import Button from '../../../../ui/button/button';
import InitiativeControls from '../../initiative-controls/initiative-controls';

interface InitiativeCreationControls {
  initiative: Omit<InitiativeDto, 'id' | 'canEdit' | 'status'>;
}

export default function InitiativeCreationControls({
  initiative,
}: InitiativeCreationControls) {
  const router = useRouter();

  const handleCreate = async () => {
    try {
      const initiativeId = await createInitiative(initiative);
      router.push(`/initiatives/${initiativeId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <InitiativeControls>
        <Button
          style='primary'
          content='Создать инициативу'
          svgIcon={<SvgCreate />}
          onClick={handleCreate}
        />
      </InitiativeControls>
    </>
  );
}
