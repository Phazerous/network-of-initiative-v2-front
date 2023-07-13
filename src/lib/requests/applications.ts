import { get, patch, post } from './base';

export interface ApplicationDto {
  about: string;
}

export async function postApplication(
  initiativeId: string,
  applicationDto: ApplicationDto
) {
  const response = await post(
    `/initiatives/${initiativeId}/apply`,
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

export async function getMyApplication(applicationId: string) {
  const response = await get(`/applications/${applicationId}/applier`);

  return response as ApplicationForUser;
}

export async function approveApplication(
  applicationId: string,
  answer: string
) {
  const response = await patch(`/applications/${applicationId}`, {
    status: 1,
    answer,
  });

  return response;
}

export async function rejectApplication(applicationId: string, answer: string) {
  const response = await patch(`/applications/${applicationId}`, {
    status: 2,
    answer,
  });

  return response;
}
