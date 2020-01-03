export interface IRestaurant {
  id: string;
  name: string;
  category: string;
  rating: number;
  deliveryPrice: number;
  profilePicture: string;
  bannerPicture: string;
  minOrder: string;
  location: string;
  phoneNumber: number;
  address: string;
  active: boolean;
}
export interface IFoodMenu {
  name: string;
  id: string;
  price: number;
  category: string;
  description?: string;
}

export interface IDrinkMenu {
  name: string;
  id: string;
  price: number;
  category: string;
  description?: string;
}
export interface IOrder {
  menu: IFoodMenu;
  count: number;
}

export interface IOrderCreate {
  userId: string;
  restaurantId: string;
  phoneNumber: string;
  name: string;
  totalPrice: number;
  comment: string;
  email?: string;
  menu: [{ name: string; price: number; count: number }];
}
