import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['form']
};

const persistedReducer = persistReducer(persistConfig, reducer);

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
      phone: {
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
      },
      upload: {
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

export default () => {
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  const persistor = persistStore(store);
  return { store, persistor };
};
