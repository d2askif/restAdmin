import * as Service from '../../services/resturant/ReturantService';
import * as actionType from '../actionTypes/actionTypes';
export const getRestaurantsAction = () => async (
  dispatch: Function,
  getState: Function
) => {
  try {
    const response = await Service.getNearByRestaurants();
    console.log('getRestaurants', response);

    dispatch({
      type: actionType.ALL_RESTAURANTS,
      payload: { restaurants: response }
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteWithIdAction = (id: string) => async (
  dispatch: Function,
  getState: Function
) => {
  try {
    const deletedRestaurant = await Service.deleteRestaurantWithId(id);

    dispatch({
      type: 'RESTAURANT_DELETED',
      payload: { id: deletedRestaurant.id }
    });

    dispatch({
      type: 'SHOW_NOTIFICATION',
      payload: { open: true, variant: 'success', message: 'Restaurant deleted' }
    });
    setTimeout(() => {
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: {
          open: false,
          variant: 'success',
          message: 'Restaurant deleted'
        }
      });
    }, 600);
  } catch (error) {
    dispatch({
      type: 'SHOW_NOTIFICATION',
      payload: {
        open: true,
        variant: 'error',
        message: 'Restaurant deleting failed'
      }
    });
  }
};
