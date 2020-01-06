import { fetch } from '../../common/DataFetchService';

export const DeleteRestaurantRequest = async (
  url: string,
  id: string
): Promise<any> => {
  const query = `mutation {
    deleteRestaurantWithId(id:"${id}"){
      ... on Restaurant {
        id
        address
        phoneNumber
      }
     
    }
  }`;

  const response = await fetch(url, { query }, 'deleteRestaurantWithId');
  return response;
};
