import { NextRouter } from 'next/router';
import ApplicationShortDto from '../../dto/application-short-dto';
import { extractText, get } from './base';

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

export async function redirectToAccount(router: NextRouter) {
  try {
    const response = await get('/account', router);
    const userId = await extractText(response);
    router.push(`/${userId}`);
  } catch (e) {
    throw e;
  }
}
