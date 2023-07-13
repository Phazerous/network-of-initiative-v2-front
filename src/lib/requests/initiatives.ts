import InitiativeStatusDto from '../../dto/initiative-status.dto';
import InitiativeDto from '../../dto/initiative.dto';
import { extractText, get, post } from './base';

export async function getInitiative(initiativeId: string) {
  const initiative = await get(`/initiatives/${initiativeId}/full`);

  return initiative as Pick<
    InitiativeDto,
    | 'id'
    | 'title'
    | 'stage'
    | 'location'
    | 'description'
    | 'searching'
    | 'university'
  >;
}

export async function getInitiatives() {
  const initiatives = await get(`/initiatives`);

  return initiatives as Pick<InitiativeDto, 'id' | 'title' | 'location'>[];
}

export async function getInitiativeShort(initaitiveId: string) {
  const initiative = await get(`/initiatives/${initaitiveId}/short`);

  // TODO ADD DATE
  return initiative as Pick<
    InitiativeDto,
    'title' | 'description' | 'location' | 'university' | 'stage'
  >;
}

export async function createInitiative(
  initiativeDto: Omit<InitiativeDto, 'id' | 'canEdit' | 'status'>
) {
  try {
    const response = await post('/initiatives/new', initiativeDto);
    const initiativeId = await extractText(response);

    return initiativeId;
  } catch (e) {
    throw e;
  }
}

export async function getInitiativeStatus(initiativeId: string) {
  const initiative = await get(`/initiatives/${initiativeId}/status`);

  if (Object.keys(initiative).length === 0)
    return await get(`/initiatives/${initiativeId}/status`);

  return initiative as InitiativeStatusDto;
}
