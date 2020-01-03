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

const formReducer = (
  state: any,
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
      return newState;
  }
};
export default formReducer;
