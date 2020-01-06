import { fetch } from '../../common/DataFetchService';

export const getNearByRestaurantRequest = async (
  url: string,
  location?: any,
  radius?: any
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
  }
}`;

  const response = await fetch(url, { query }, 'getNearByRestaurants');
  return response;
};
