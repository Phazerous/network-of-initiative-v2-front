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
