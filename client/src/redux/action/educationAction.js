import {ADD_EDUCATION, GET_EDUCATION} from '../constants/actionTypes'
import axios from 'axios'
import {setHeaders} from '../../utils/index'

export const addEducation = (inputEdu) => async (dispatch) => {
    try {
        const eduData = await axios.post('/api/education/add', inputEdu, setHeaders());

        dispatch({
            type : ADD_EDUCATION,
            payload : eduData
        });
    } catch (error) {
        console.log(error);
    }
};

export const getEducation = () => async (dispatch) => {
    try {
        const allEdu = await axios.get('/api/education/render_edu', setHeaders());

        dispatch({
            type : GET_EDUCATION,
            payload : allEdu
        });
    } catch (error) {
        console.log(error);
    }
}