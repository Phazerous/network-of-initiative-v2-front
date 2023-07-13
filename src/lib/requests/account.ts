import ApplicationShortDto from '../../dto/application-for-user.dto';
import { extractText, get, patch } from './base';
import InitiativeShortDto from '../../dto/initiative-short.dto';
import ApplicationForInitiatorShortDto from '../../dto/application-for-initiator-short.dto';
import UpdateUserDto from '../../dto/update-user.dto';

export interface InitiativeApplicationShort {
  id: string;
  status: string;
  applier: {
    name: string;
    lastname: string;
  };
}

export async function getInitiativeApplications(initiativeId: string) {
  const applications = await get(`/initiatives/${initiativeId}/applications`);

  return applications as ApplicationForInitiatorShortDto[];
}

export async function redirectToAccount() {
  const response = await get('/users');
  const userId = await extractText(response);
  window.location.href = `/${userId}`;
}

export async function getUserId() {
  const response = await get('/users');
  const userId = await extractText(response);
  return userId;
}

export interface InitiativeApplicationForInitiator {
  about: string;
  status: number;
  applier: {
    name: string;
    lastname: string;
    location: string;
    university: string;
    contact: string;
    about: string;
  };
}

export async function getInitiativeApplicationForInitiator(
  applicationId: string
) {
  const application = await get(`/applications/${applicationId}/initiator`);

  return application as InitiativeApplicationForInitiator;
}

export async function getUserProfile(userId: string) {
  return await get(`/users/${userId}`);
}

export async function updateUser(userId: string, updateUserDto: UpdateUserDto) {
  return await patch(`/users/${userId}`, updateUserDto);
}

export async function getUserInitiativesShort(userId: string) {
  const response = await get(`/users/${userId}/initiatives`);

  return response as InitiativeShortDto[];
}

export default async function getUserApplicationsShort(userId: string) {
  const applications = await get(`/users/${userId}/applications`);
  return applications as ApplicationShortDto[];
}
