import { fetch } from '../../common/DataFetchService';

export const CreateNewRestaurantRequest = async (
  url: string,
  data: any
): Promise<any> => {
  const q = {
    query: `mutation ($file: Upload!) {
    createRestaurant(input:{
        file:$file,
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
  }`,
    variables: {
      file: null
    }
  };
  let map = {
    '0': ['variables.file']
  };
  let query = new FormData();
  query.append('operations', JSON.stringify(q));
  query.append('map', JSON.stringify(map));

  query.append('0', data.file);

  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  console.log(q);

  const response = await fetch(url, query, 'createRestaurant', headers);
  return response;
};
