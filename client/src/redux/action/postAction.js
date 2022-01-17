import {CREATE_POST, GET_ALL_RECENT_POST} from '../constants/actionTypes'
import {setHeaders} from '../../utils/index'
import axios from 'axios'

export const createPost = (postInput) => async (dispatch) => {
    try {
        const posts = await axios.post('/api/post', postInput, setHeaders());

        dispatch({
            type : CREATE_POST,
            payload : posts
        })
    } catch (error) {
        console.log(error);
    }
};

export const getAllRecentPosts = () => async (dispatch) => {
    try {
        const allRecentPosts = await axios.get('/api/post/most_recent_post');

        dispatch({
            type : GET_ALL_RECENT_POST,
            payload : allRecentPosts
        });
    } catch (error) {
        console.log(error);
    }
};


