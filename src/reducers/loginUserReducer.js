import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/loginUserActions';

export const userState = {
    username: '',
    token: '',
    error: '',
    message: '',
    isLoggedIn: false
}

export default  (state = userState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', message: '', username: action.username, token: action.token, isLoggedIn: true };
        case UNAUTH_USER:
            return { ...state, isLoggedIn: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }

}

