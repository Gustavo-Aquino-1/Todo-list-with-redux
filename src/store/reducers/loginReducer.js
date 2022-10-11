import { LOGIN } from "../actions/actionTypes";

const INITIAL_STATE = {
  email: '',
  password: '',
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return action.user
    default:
      return state;
  }
}

export default loginReducer;