import { extractText, post } from './base';

interface LoginDto {
  email: string;
  password: string;
}

export default async function login(loginDto: LoginDto) {
  try {
    const response = await post('/auth/login', loginDto);
    const userId = await extractText(response);

    return userId;
  } catch (e) {
    throw e;
  }
}
