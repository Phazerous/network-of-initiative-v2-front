import { NextRouter } from 'next/router';
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

export async function getInitiativeApplications(
  initiativeId: string,
  router: NextRouter
) {
  const applications = await get(
    `/initiatives/${initiativeId}/applications`,
    router
  );

  return applications as ApplicationForInitiatorShortDto[];
}

export async function redirectToAccount(router: NextRouter) {
  try {
    const response = await get('/users', router);
    const userId = await extractText(response);
    router.push(`/${userId}`);
  } catch (e) {
    router.push('/auth/login');
  }
}

export async function getUserId(router: NextRouter) {
  try {
    const response = await get('/users', router);
    const userId = await extractText(response);
    return userId;
  } catch (e) {
    router.push('/auth/login');
  }
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
  applicationId: string,
  router: NextRouter
) {
  const application = await get(
    `/applications/${applicationId}/initiator`,
    router
  );

  return application as InitiativeApplicationForInitiator;
}

export async function getUserProfile(userId: string, router: NextRouter) {
  return await get(`/users/${userId}`, router);
}

export async function updateUser(userId: string, updateUserDto: UpdateUserDto) {
  return await patch(`/users/${userId}`, updateUserDto);
}

export async function getUserInitiativesShort(
  userId: string,
  router: NextRouter
) {
  const response = await get(`/users/${userId}/initiatives`, router);

  return response as InitiativeShortDto[];
}

export default async function getUserApplicationsShort(
  userId: string,
  router: NextRouter
) {
  const applications = await get(`/users/${userId}/applications`, router);
  return applications as ApplicationShortDto[];
}
