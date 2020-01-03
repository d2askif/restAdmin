import { SignUpInput } from '../../../types/SignupType'
import { fetch } from '../../common/DataFetchService'

export const signUpUserRequest = async (
  url: string,
  SignUpInfo: SignUpInput
): Promise<any> => {
  const query = `mutation {
  signUp(input:{firstName:"${SignUpInfo.firstName}",
  lastName:"${SignUpInfo.lastName}",
  phoneNumber:"${SignUpInfo.phoneNumber}",
  password:"${SignUpInfo.password}",isActive:true,role:USER}){
    ...on SignUp {
      token
      user {
        id
        phoneNumber
        firstName
        lastName
      }
    }
  }
}`

  const response = await fetch(url, query, 'signUp')
  return response
}
