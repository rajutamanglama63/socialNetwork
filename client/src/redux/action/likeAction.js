import {LIKE_POST} from '../constants/actionTypes'
import {setHeaders} from '../../utils/index'
import axios from 'axios'

export const likePost = (id) => async (dispatch) => {
    try {
        const post = await axios.put(`/api/post/likes/${id}`, setHeaders());

        dispatch({
            type : LIKE_POST,
            payload : post
        });
    } catch (error) {
        console.log(error);
    }
}