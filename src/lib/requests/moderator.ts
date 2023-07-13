import { NextRouter } from 'next/router';
import { get, patch } from './base';
import ModeratorInitiative from '../../dto/moderator-initiative.dto';

export async function getInitiativeToModerate(router: NextRouter) {
  const initiatives = await get('/initiatives/mod', router);

  return initiatives as ModeratorInitiative[];
}

export async function respondInitiative(
  initiativeId: string,
  status: number,
  moderatorComment: string
) {
  const response = await patch(`/initiatives/${initiativeId}`, {
    status,
    moderatorComment,
  });

  return response;
}
