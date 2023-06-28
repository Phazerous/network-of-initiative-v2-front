import { extractText, post } from './base';

export const requestVerificationCode = async (email: string) => {
  const data = {
    email,
  };

  return await post('/auth/request-verification-code', data);
};

interface VerifyEmailDto {
  email: string;
  verificationCode: string;
}

export const verifyEmail = async (verifyEmailDto: VerifyEmailDto) => {
  return await post('/auth/verify-email', verifyEmailDto);
};

interface CreateUserDto {
  name: string;
  lastname: string;
  password: string;
}

export const createUser = async (createUserDto: CreateUserDto) => {
  try {
    const response = await post('/auth/signup', createUserDto);
    const userId = await extractText(response);

    if (!userId) throw Error(`UserId wasn't provided`);

    return userId;
  } catch (e) {
    throw e;
  }
};
