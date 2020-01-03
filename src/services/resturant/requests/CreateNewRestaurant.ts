import { fetch } from '../../common/DataFetchService';

export const CreateNewRestaurantRequest = async (
  url: string,
  data: any
): Promise<any> => {
  const query = `mutation {
    createRestaurant(input:{
        name:"${data.name}",
        minOrder:${data.minOrder},
        deliveryPrice:${data.deliveryPrice},
        rating:${data.rating},
        address:"${data.address}",
        phoneNumber:"${data.phoneNumber}",
        location:{lat:${data.location.lat},lng:${data.location.lng}}}){
      ... on Restaurant {
        id
        address
        phoneNumber
      }
     
    }
  }`;

  const response = await fetch(url, query, 'getNearByRestaurants');
  return response;
};
