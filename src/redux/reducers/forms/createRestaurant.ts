const createRestaurantReducer = (state: any, action: any) => {
  const newState = { ...state };

  switch (action.type) {
    case 1:
      return newState;
    default:
      return newState;
  }
};
export default createRestaurantReducer;
