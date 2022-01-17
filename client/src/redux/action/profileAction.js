import {CREATE_PROFILE, GET_PROFILE} from '../constants/actionTypes'
import axios from 'axios'
import {setHeaders} from '../../utils/index'

export const createProfile = (inputData) => async (dispatch) => {
    try {
        const data = await axios.post('/api/profile/create', inputData, setHeaders());

        dispatch({
            type : CREATE_PROFILE,
            payload : data
        });
    } catch (error) {
        console.log(error);
    }
};

export const getProfile = () => async (dispatch) => {
    try {
        const profile = await axios.get('/api/profile/render_profile', setHeaders());

        dispatch({
            type : GET_PROFILE,
            payload : profile
        });
    } catch (error) {
        console.log(error);
    }
};