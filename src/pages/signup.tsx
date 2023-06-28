import { useState } from 'react';
import RequestVerificationCodePage from '../components/pages/request-verification-code/request-verification-code';
import { requestVerificationCode } from '../lib/requests/signup';
import VerifyEmailPage from '../components/pages/verify-email/verify-email';
import CreateUserPage from '../components/pages/create-user/create-user';
import { useRouter } from 'next/router';

enum REGISTRATION_STAGE {
  REQUEST_VERIFICATION_CODE,
  VERIFY_EMAIL,
  SIGNUP,
}

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const [registrationStage, setRegistrationStage] =
    useState<REGISTRATION_STAGE>(REGISTRATION_STAGE.REQUEST_VERIFICATION_CODE);

  const render = () => {
    switch (registrationStage) {
      case REGISTRATION_STAGE.REQUEST_VERIFICATION_CODE:
        return (
          <RequestVerificationCodePage
            onContinue={(email: string) => {
              setEmail(email);
              setRegistrationStage(REGISTRATION_STAGE.VERIFY_EMAIL);
            }}
          />
        );
      case REGISTRATION_STAGE.VERIFY_EMAIL:
        return (
          <VerifyEmailPage
            email={email}
            onContinue={() => setRegistrationStage(REGISTRATION_STAGE.SIGNUP)}
          />
        );
      case REGISTRATION_STAGE.SIGNUP:
        return (
          <CreateUserPage
            onContinue={(userId: string) => router.push(`/${userId}`)}
          />
        );
    }
  };

  return <main className='center-content'>{render()}</main>;
}
