import { NextRouter } from 'next/router';
import ApplicationShortDto from '../../dto/application-short-dto';
import { extractText, get } from './base';
import InitiativeShortDto from '../../components/ui/account/my-initiatives/my-initiatives-table/initiative-short.dto';

export default async function getUserApplications(
  userId: string,
  router: NextRouter
) {
  try {
    console.log('start');
    const json = await get(`/${userId}/applications`, router);
    const applications = json as unknown as ApplicationShortDto[];
    return applications;
  } catch (e) {
    console.log(e);
    // TODO REDIRECT LOGIC
  }
}

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
  const initiatives = await get(
    `/initiatives/${initiativeId}/applications`,
    router
  );

  return initiatives as InitiativeApplicationShort[];
}

export async function getUserInitiatives(userId: string, router: NextRouter) {
  const response = await get(`/${userId}/initiatives`, router);

  return response as InitiativeShortDto[];
}

export async function redirectToAccount(router: NextRouter) {
  try {
    const response = await get('/account', router);
    const userId = await extractText(response);
    router.push(`/${userId}`);
  } catch (e) {
    throw e;
  }
}

export interface InitiativeApplicationForInitiator {
  about: string;
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
    `/applications/${applicationId}?type=initiator`,
    router
  );

  return application as InitiativeApplicationForInitiator;
}
