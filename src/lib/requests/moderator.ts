import { get, patch } from './base';

import ModeratorInitiative from '../../dto/moderator-initiative.dto';

export async function getInitiativeToModerate() {
  const initiatives = await get('/initiatives/mod');

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
