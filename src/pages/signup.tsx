import { useState } from 'react';
import CreateUser from '../components/pages/create-user/create-user';
import RequestVerificationCodePage from '../components/pages/request-verification-code/request-verification-code';
import VerifyEmail from '../components/pages/verify-email/verify-email';
import { requestVerificationCode } from '../lib/requests/signup';

enum REGISTRATION_STAGE {
  REQUEST_VERIFICATION_CODE,
  VERIFY_EMAIL,
  SIGNUP,
}

export default function Signup() {
  const [registrationStage, setRegistrationStage] =
    useState<REGISTRATION_STAGE>(REGISTRATION_STAGE.REQUEST_VERIFICATION_CODE);

  const render = () => {
    switch (registrationStage) {
      case REGISTRATION_STAGE.REQUEST_VERIFICATION_CODE:
        return (
          <RequestVerificationCodePage
            onContinue={() =>
              setRegistrationStage(REGISTRATION_STAGE.VERIFY_EMAIL)
            }
          />
        );
      case REGISTRATION_STAGE.VERIFY_EMAIL:
        return <VerifyEmail />;
      case REGISTRATION_STAGE.SIGNUP:
        return <CreateUser />;
    }
  };

  return <main className='center-content'>{render()}</main>;
}
