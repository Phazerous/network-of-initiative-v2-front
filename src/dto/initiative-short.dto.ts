import InitiativeDto from './initiative.dto';

export default interface InitiativeShortDto
  extends Pick<InitiativeDto, 'id' | 'title' | 'status'> {}
