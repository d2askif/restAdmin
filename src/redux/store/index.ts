import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

const middleware: any[] = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const initialState: any = {
  appReducer: {
    restaurants: [],
    notification: { open: false, variant: '', message: '' }
  },
  form: {
    createRestaurant: {
      valid: false,
      generalError: null,
      working: false,
      name: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      owner: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      type: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      phoneNumber: {
        touched: false,
        valid: false,
        error: null,
        value: '0910101010'
      },
      address: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      city: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      subCity: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      kebele: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      state: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      country: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      lat: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      lng: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      status: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      }
    },
    signIn: {
      valid: false,
      generalError: null,
      working: false,
      email: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      },
      password: {
        touched: false,
        valid: false,
        error: null,
        value: ''
      }
    }
  }
};

const store = () =>
  createStore(reducer, initialState, applyMiddleware(...middleware));
export default store;
