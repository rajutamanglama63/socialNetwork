import {REGISTER, LOGIN, LOGOUT} from '../constants/actionTypes'
import jwtDecode from 'jwt-decode'

const initialState = {
    token : localStorage.getItem("token"),
    username : null,
    email : null,
    _id : null
};

export const authReducers = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER:
        case LOGIN:
            const user = jwtDecode(action.token);
            return {
                ...initialState,
                token : user.token,
                username : user.username,
                email : user.email,
                _id : user._id
            };
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                token : null,
                username : null,
                email : null,
                _id : null
            };
        default:
            return state;
    }
}