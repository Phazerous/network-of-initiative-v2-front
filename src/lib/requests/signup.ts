import { post } from './base';

export const requestVerificationCode = async (email: string) => {
  const data = {
    email,
  };

  return await post('/auth/request-verification-code', data);
};
