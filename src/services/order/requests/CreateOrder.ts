import { IOrderCreate } from '../../../types/restaurantTypes'
import { fetch } from '../../common/DataFetchService'

export const CreateOrderRequest = async (
  url: string,
  newOrder: IOrderCreate
): Promise<any> => {
  const menus = newOrder.menu.map(
    m => `{name:"${m.name}",price:${m.price},count:${m.count}}`
  )

  const query = `mutation{
    createOrder(input:{userId:"${newOrder.userId}",restaurantId:"${newOrder.restaurantId}",totalPrice:${newOrder.totalPrice}, menus:[${menus}],
      phoneNumber:"${newOrder.phoneNumber}",
      comment:"${newOrder.comment}"
    }){
       id
    restaurantId
    menus {
    name
    price
    count
     }
    totalPrice
    phoneNumber
    userId
    }
  }`

  const response = await fetch(url, query, 'createOrder')
  return response
}
