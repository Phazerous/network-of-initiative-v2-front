import { get, post } from './base';
import { NextRouter } from 'next/router';

export interface ApplicationDto {
  about: string;
}

export async function postApplication(
  initiativeId: string,
  applicationDto: ApplicationDto
) {
  const response = await post(
    `/initiatives/${initiativeId}/applications`,
    applicationDto
  );

  return response;
}

interface ApplicationForUser {
  about: string;
  status: number;
  answer: string;
  initiative: {
    title: string;
  };
}

export async function getMyApplication(
  applicationId: string,
  router: NextRouter
) {
  const response = await get(
    `/applications/${applicationId}?type=user`,
    router
  );

  return response as ApplicationForUser;
}
