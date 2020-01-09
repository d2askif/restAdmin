import { fetch } from '../../common/DataFetchService';

export const signInUserRequest = async (
  url: string,
  username: string,
  password: string
): Promise<any> => {
  const query = `mutation {
  signIn(input:{phoneNumber:"${username}",password:"${password}"}){
    ...on Error {
      error
    }
    ...on SignUp {
      token
     user{
        firstName
        lastName
        phoneNumber
        isActive
        id
      }
      
    }
  }
}`;

  const response = await fetch(url, { query }, 'signIn');
  console.log('response', response);

  return response;
};
