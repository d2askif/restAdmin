import { IOrderCreate } from '../../types/restaurantTypes'
import { CreateOrderRequest } from './requests/CreateOrder'

export const url = 'http:/localhost:4000/graphql'

export const CreateOrder = async (newOrder: IOrderCreate): Promise<any> => {
  const response = await CreateOrderRequest(url, newOrder)
  return response
}
