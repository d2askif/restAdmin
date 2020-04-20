import { fetch } from '../../common/DataFetchService';

export const getRestaurantRequest = async (
  url: string,
  params: { [key: string]: any }
): Promise<any> => {
  const query = `query{
  getNearByRestaurants(input:{
    location:{lng:23, lat:43},
    distance: 1000
  }){
    id
    name
    address
    deliveryPrice
    rating
    phoneNumber
    minOrder
    open
    active
    url
  }
}`;

  const response = await fetch(url, { query }, 'getRestaurantRequest');
  return response;
};
