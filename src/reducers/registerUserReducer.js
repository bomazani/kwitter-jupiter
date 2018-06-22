import { REGISTER_USER } from '../actions/registerUserAction';

export const registerUserState = {
    username: '',
    displayName:'',
    message: '',
}

export default (state = registerUserState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, message: '' };
        default:
            return state; 
    }
}    