import { ChallengeResponse } from '@backbase/identity-core-ang';

let currentScope: string | undefined;
const timeout = 100;
let resendCounter = 3;
let attemptsCounter = 3;
let pollCounter = 3;

const getChallengeData = (): ChallengeResponse => {
  switch (currentScope) {
    case 'my-custom-auth':
      return {
        challengeType: 'my-custom-auth',
        challengeData: {
          data: {
            someData: 'Please type the characters 123 into the field below',
          },
        },
      };
    case 'sms-otp-auth':
      return {
        challengeType: 'sms-otp-auth',
        challengeData: {
          phoneNumber: '+44 **** *** 8899',
          nextOtpTime: 5,
          expectedOtpLength: 6,
        },
      };
    case 'oob-uaf-auth':
      return {
        challengeType: 'oob-uaf-auth',
        challengeData: {
          data: {
            deviceInformation: {
              model: 'XR 11',
              vendor: 'Apple',
              friendlyName: "Corey's Device",
            },
          },
        },
      };
    case 'hard-token-auth':
    default:
      return {
        challengeType: 'hard-token-auth',
        challengeData: {
          data: {
            txnData: {
              paymentAmount: 109.99,
              currency: 'USD',
              recipient: 'Green Bicycle Factory LLC',
            },
            code: '12343212',
            vendorDetails: {
              model: 'Pinpad',
            },
          },
        },
      };
  }
};

const rejectWith = (data?: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(data), timeout);
  });
};
const resolveWith = (data?: any) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), timeout);
  });
};

const rejectedError = () => {
  return rejectWith({
    error: {
      errorCode: 'access_denied',
      errorDescription: 'rejected_by_user',
    },
  });
};

const failedError = () => {
  return rejectWith({
    error: {
      errorCode: 'invalid_scope',
      errorDescription: 'invalid_token',
    },
  });
};

const unknownError = () => {
  return rejectWith({
    error: {
      errorCode: 'invalid_scope',
      errorDescription: 'confirmation_is_not_pending',
    },
  });
};

const emptyOtpError = () => {
  return rejectWith({
    error: {
      errorCode: 'invalid_request',
      errorDescription: 'invalid_request',
    },
  });
};

const invalidCodeChallenge = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      attemptsCounter--;
      if (attemptsCounter < 0) {
        reject({
          error: {
            errorCode: 'invalid_scope',
            errorDescription: 'user_temporarily_disabled',
          },
        });
      } else {
        const response = getChallengeData();
        (<any>response.challengeData).remainingAuthenticationAttempts = attemptsCounter;
        reject({
          ...response,
          postChallengeResponse,
        });
      }
    }, timeout);
  });
};

const otpResendChallenge = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resendCounter--;
      const response = getChallengeData();
      (<any>response.challengeData).remainingOtpRequests = resendCounter;
      reject({
        ...response,
        postChallengeResponse,
      });
    }, timeout);
  });
};

const challengeSuccess = () => {
  return resolveWith({});
};

const successPoll = () => {
  pollCounter--;
  if (pollCounter <= 0) {
    return Promise.resolve({});
  }
  const update = getChallengeData();
  return Promise.reject({
    ...update,
    postChallengeResponse,
  });
};

const rejectedPoll = () => {
  pollCounter--;
  if (pollCounter <= 0) {
    return unknownError();
  }
  const update = getChallengeData();
  return Promise.reject({
    ...update,
    postChallengeResponse,
  });
};

const postChallengeResponse = (data: any) => {
  if (data.responseType === 'system-poll') {
    return successPoll();
  }
  if (data.responseType === 'system-poll-fail') {
    return rejectedPoll();
  }
  if (data.responseType === 'confirmation-abort') {
    return rejectedError();
  }
  if (data.responseType === 'otp-resend') {
    return otpResendChallenge();
  }
  if (data.otp && data.otp === '222222') {
    return invalidCodeChallenge();
  }
  if (data.otp && data.otp === '111111') {
    return unknownError();
  }
  if (data.otp && data.otp === '000000') {
    return emptyOtpError();
  }
  if (data.extOtp && data.extOtp !== '123') {
    return unknownError();
  }
  return challengeSuccess();
};

export const reauthenticate = (scope: string) => {
  if (scope === 'fail') {
    return failedError();
  }
  currentScope = scope;
  attemptsCounter = 3;
  resendCounter = 3;
  pollCounter = 3;

  const challengeData = getChallengeData();
  return Promise.reject({
    ...challengeData,
    postChallengeResponse,
  } as ChallengeResponse);
};
