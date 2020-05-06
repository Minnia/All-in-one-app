import {SignUpRequest, SIGN_UP_SUCCESS} from './types';

export const registerUser = ({email, password}: SignUpRequest) => ({
  type: SIGN_UP_SUCCESS,
});
