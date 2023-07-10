import InitiativeDto from '../../dto/initiative.dto';
import { get, post } from './base';
import { NextRouter } from 'next/router';

export default async function createInitiative(
  initiativeDto: Omit<InitiativeDto, 'canEdit'>
) {
  const response = await post('/initiatives/new', initiativeDto);

  return response;
}

export async function getInitiative(initiativeId: string, router: NextRouter) {
  const initiative = await get(`/initiatives/${initiativeId}`, router);

  return initiative;
}

export async function getInitiatives(router: NextRouter) {
  const initiatives = await get(`/initiatives`, router);

  return initiatives as Pick<InitiativeDto, 'id' | 'title' | 'location'>[];
}

export async function getInitiativeShort(
  initaitiveId: string,
  router: NextRouter
) {
  const initiative = await get(
    `/initiatives/${initaitiveId}?type=short`,
    router
  );

  // TODO ADD DATE
  return initiative as Pick<
    InitiativeDto,
    'title' | 'description' | 'location' | 'university' | 'stage'
  >;
}
