export const formFiledUpdate = (
  formName: string,
  fieldName: string,
  value: string
) => (dispatch: any) => {
  dispatch({ type: 'FORM_UPDATE', payload: { formName, fieldName, value } });
};

export const formFiledLeaving = (
  formName: string,
  fieldName: string,
  error: string | null = null,
  valid: boolean = true
) => (dispatch: any) => {
  dispatch({
    type: 'LEAVING_FIELD',
    payload: { formName, fieldName, error, valid }
  });
};
