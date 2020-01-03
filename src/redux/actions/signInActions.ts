import { formFiledLeaving, formFiledUpdate } from './formActions';
import * as Validate from '../../validation/createRestaurantValidation';
import * as UserService from '../../services/user/UserService';
const formName = 'signIn';
export const passwordUpdate = (filedName: string, value: string) => (
  dispatch: any
) => {
  dispatch(formFiledUpdate(formName, filedName, value));
};

export const passwordLeaving = (filedName: string) => (
  dispatch: any,
  getState: Function
) => {
  dispatch(formFiledLeaving(formName, filedName));
};

export const emailUpdate = (filedName: string, value: string) => (
  dispatch: any
) => {
  dispatch(formFiledUpdate(formName, filedName, value));
};

export const emailLeaving = (filedName: string) => (
  dispatch: any,
  getState: Function
) => {
  const value = getState().form.signIn[filedName].value;
  console.log('form', value);

  console.log('validate', Validate.validateFirstName(value));

  dispatch(formFiledLeaving(formName, filedName));
};

export const signIn = () => async (dispatch: any, getState: Function) => {
  console.log('here');

  const email = getState().form.signIn.email.value;
  const password = getState().form.signIn.password.value;
  try {
    const response = await UserService.signInUser(email, password);
    dispatch({ type: 'auth', payload: true });
    return true;
  } catch (error) {
    return false;
  }
};
