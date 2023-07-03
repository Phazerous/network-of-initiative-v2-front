import { post } from './base';

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
