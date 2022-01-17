import {REGISTER, LOGIN, LOGOUT} from '../constants/actionTypes'
import axios from 'axios'

export const register = (user) => async (dispatch) => {
    try {
        const token = await axios.post('/api/auth/register', user);
        if(token) {
            localStorage.setItem("token", token.data);
        }

        dispatch({
            type : REGISTER,
            token : token.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        const token = await axios.post('/api/auth/login', {email, password});
        if(token) {
            localStorage.setItem("token", token.data);
        }

        dispatch({
            type : LOGIN,
            token : token.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const logout = () => (dispatch) => {
    dispatch({
        type : LOGOUT
    });
}