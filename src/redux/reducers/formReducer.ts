const setFieldValue = (
  state: any,
  formName: string,
  fieldName: string,
  value: string
) => {
  console.log(formName, fieldName, value);
  console.log('STATE', state[formName][fieldName]);
  const form = state[formName];
  form[fieldName].value = value;

  return { ...state, formName: form };
};

const setFieldLeaving = (state: any, payload: any) => {
  const { formName, fieldName, error, valid } = payload;
  console.log(payload.formName, payload.fieldName);
  console.log('STATE', state[formName][fieldName]);
  const form = state[formName];
  form[fieldName].error = error;
  form[fieldName].valid = valid;
  form[fieldName].touched = true;
  return { ...state, formName: form };
};

const initialState: { [key: string]: any } = {
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
};

const formReducer = (
  state: any = initialState,
  action: {
    type: string;
    payload: { formName: string; fieldName: string; value?: string };
  }
) => {
  const newState = { ...state };
  const { formName, fieldName, value, error = '', valid = '' } = {
    ...action.payload
  };

  switch (action.type) {
    case 'FORM_UPDATE':
      return setFieldValue(state, formName, fieldName, value || '');
    case 'LEAVING_FIELD':
      setFieldLeaving(state, { formName, fieldName, error, valid });
      return newState;

    default:
      return state;
  }
};
export default formReducer;
