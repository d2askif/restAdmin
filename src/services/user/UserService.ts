import { SignUpInput } from '../../types/SignupType';
import { SinginDto } from './dto/SigninDto';
import { signInUserRequest } from './requests/SignInUserRequest';
import { signUpUserRequest } from './requests/SingUpUserRequest';

export const url = 'http://localhost:8000/graphql';

export const signInUser = async (
  username: string,
  password: string
): Promise<SinginDto> => {
  const response: SinginDto = await signInUserRequest(url, username, password);
  return response;
};

export const signUpUser = async (
  SignUpInfo: SignUpInput
): Promise<SinginDto> => {
  const response: SinginDto = await signUpUserRequest(url, SignUpInfo);
  return response;
};
