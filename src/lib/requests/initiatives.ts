import InitiativeDto from '../../dto/initiative.dto';
import { post } from './base';

export default async function createInitiative(initiativeDto: InitiativeDto) {
  const response = await post('/initiatives/new', initiativeDto);

  return response;
}
