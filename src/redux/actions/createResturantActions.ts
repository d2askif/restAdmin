import { formFiledLeaving, formFiledUpdate } from './formActions';
import * as Service from '../../services/resturant/ReturantService';
import Validate from '../../validation/createRestaurantValidation';
import { format } from 'path';
const formName = 'createRestaurant';
export const fieldUpdate = (filedName: string, value: string) => (
  dispatch: any
) => {
  dispatch(formFiledUpdate(formName, filedName, value));
};

export const filedLeaving = (filedName: string) => (
  dispatch: any,
  getState: Function
) => {
  const value = getState().form.createRestaurant[filedName].value;
  console.log({ value });
  const payload: {
    formName: string;
    filedName: string;
    error: string | null;
    valid: boolean;
  } = { formName, filedName, error: null, valid: true };
  const validationError = Validate[filedName](value);
  if (validationError) {
    payload.error = validationError;
    payload.valid = false;
  }
  dispatch(
    formFiledLeaving(
      payload.formName,
      payload.filedName,
      payload.error,
      payload.valid
    )
  );
};
/* {name:"name",minOrder:2,deliveryPrice:12,rating:12,address:"addres",phoneNumber:"12222",location:{lat:12,lng:12}})
 */
export const submitForm = () => async (dispatch: any, getState: Function) => {
  console.log('here');

  const form = getState().form.createRestaurant;
  const data = {
    name: form.name.value,
    owner: form.owner.value,
    city: form.city.value,
    subCity: 'form.subCity.value',
    kebele: 'form.kebele.value',
    type: 'form.type.value',
    active: 'form.active.value',
    minOrder: 2,
    deliveryPrice: 12,
    rating: 12,
    address: form.address.value,
    phoneNumber: form.phone.value,
    file: form.upload.value,
    location: { lat: form.lat.value, lng: form.lng.value }
  };
  try {
    const response = await Service.createRestaurant(data);
    console.log('createSubmitResponse', response);

    return true;
  } catch (error) {
    return false;
  }
};
