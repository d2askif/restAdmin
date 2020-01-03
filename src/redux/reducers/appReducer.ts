import * as actionTypes from '../actionTypes/actionTypes';

const setAllRestaurants = (state: any, payload: any) => {
  console.log('{ state }');

  const newState = { ...state };
  console.log({ newState });

  newState.restaurants = [...payload.restaurants];
  return { ...newState, restaurants: [...payload.restaurants] };
};

const deleteRestaurant = (state: any, payload: any) => {
  const { id } = payload;

  const { restaurants } = state;

  return {
    ...state,
    restaurants: restaurants.filter((restaurant: any) => restaurant.id !== id)
  };
};
const appReducer = (state: any, action: any) => {
  console.log('acion', action);

  const newState = { ...state };
  switch (action.type) {
    case 'test':
      return newState;
    case actionTypes.ALL_RESTAURANTS:
      return setAllRestaurants(state, action.payload);
    case 'auth':
      return { ...newState, isAuthenticated: action.payload };
    case 'SHOW_NOTIFICATION':
      return { ...newState, notification: action.payload };
    case 'RESTAURANT_DELETED':
      return deleteRestaurant(state, action.payload);

    default:
      return newState;
  }
};
export default appReducer;
