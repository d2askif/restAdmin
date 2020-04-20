import { getNearByRestaurantRequest } from './requests/GetNearByResturant';
import { getRestaurantMenusRequest } from './requests/GetRestaurantMenus';
import { CreateNewRestaurantRequest } from './requests/CreateNewRestaurant';
import { DeleteRestaurantRequest } from './requests/DeleteRestaurantWithId';
import { SingleFileUploadRequest } from './requests/SingleFileUploadRequest';
import { getRestaurantRequest } from './requests/GetRestaurantsRequest';

export const url = 'http://localhost:4000/graphql';

export const getNearByRestaurants = async (): Promise<any> => {
  const response = await getNearByRestaurantRequest(url);

  return response;
};

export const getRestaurants = async (params: { [key: string]: any }) => {
  const response = await getRestaurantRequest(url, params);
  return response;
};

export const getRestaurantMenus = async (id: string): Promise<any> => {
  const response = await getRestaurantMenusRequest(url, id);
  console.log(response);

  return response;
};

export const createRestaurant = async (data: any): Promise<any> => {
  const response = await CreateNewRestaurantRequest(url, data);
  return response;
};

export const deleteRestaurantWithId = async (id: string): Promise<any> => {
  const response = await DeleteRestaurantRequest(url, id);
  return response;
};

export const singleFileUpload = async (file: any): Promise<any> => {
  const response = await SingleFileUploadRequest(url, file);
  return response;
};
