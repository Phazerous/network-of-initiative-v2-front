import ApplicationDto from './application.dto';

export default interface ApplicationForInitiatorShortDto
  extends Pick<ApplicationDto, 'id' | 'status'> {
  applier: Pick<ApplicationDto['applier'], 'name' | 'lastname'>;
}
