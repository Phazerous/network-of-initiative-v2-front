import CreateUserDto from '../../dto/create-user.dto';
import LoginDto from '../../dto/login-dto';
import VerifyEmailDto from '../../dto/verify-email.dto';
import { extractText, get, post } from './base';
import { NextRouter } from 'next/router';

export const requestVerificationCode = async (email: string) => {
  const data = {
    email,
  };

  return await post('/auth/request-verification-code', data);
};

export const verifyEmail = async (verifyEmailDto: VerifyEmailDto) => {
  return await post('/auth/verify-email', verifyEmailDto);
};

export const createUser = async (createUserDto: CreateUserDto) => {
  try {
    const response = await post('/auth/signup', createUserDto);
    const userId = await extractText(response);
    return userId!;
  } catch (e) {
    throw e;
  }
};

export async function loginUser(loginDto: LoginDto) {
  try {
    const response = await post(`/auth/login`, loginDto);
    const userId = await extractText(response);
    return userId;
  } catch (e) {
    throw e;
  }
}

export async function logout(router: NextRouter) {
  return await get('/auth/logout', router);
}
