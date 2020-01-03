import { fetch } from '../../common/DataFetchService';

const menusQuery = (id: string) => `query{
    getMenus(input:{restaurantId:"${id}"}){
      id
      name
      price
      category
    }
  }`;

export const getRestaurantMenusRequest = async (
  url: string,
  id: string
): Promise<any> => {
  const query = `query{
    getMenus(input:{restaurantId:"${id}"}){
      id
      name
      price
      category
    }
  }`;

  const response = await fetch(url, query, 'getMenus');
  return response;
};
