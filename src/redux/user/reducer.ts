import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './types';

export type BaseUserState = {
  isLoggedIn: boolean;
  email: string;
  error: string;
  errorMessage: string;
};

export type UserState = BaseUserState;

const INITIAL_STATE: BaseUserState = {
  isLoggedIn: false,
  email: '',
  error: null,
  errorMessage: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, isLoggedIn: true};
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: true,
        errorMessage: 'Could not log in',
      };

    case SIGN_UP_SUCCESS:
      return {...state, isLoggedIn: true};
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: true,
        errorMessage: 'Could not sign up',
      };

    default:
      return state;
  }
};
