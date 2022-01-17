import {INDIVITUAL_POST} from '../constants/actionTypes'
import axios from 'axios'


export const individualPost = (id) => async (dispatch) => {
    try {
        const singlePost = await axios.get(`/api/post/${id}`);

        dispatch({
            type : INDIVITUAL_POST,
            payload : singlePost
        })
    } catch (error) {
        console.log(error);
    }
}