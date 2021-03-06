import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import providers from './providers';
import employees from './employees';
import auth from './auth';
import { LOGOUT_SUCCESS } from '../actions/types';


const appReducer = combineReducers({
  form: formReducer,
  employees,
  providers,
  auth
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
