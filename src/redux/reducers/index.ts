import { combineReducers } from 'redux';
import appReducer from './appReducer';
import formReduce from './formReducer';

const reducer = combineReducers({ appReducer: appReducer, form: formReduce });
export default reducer;
