import {CREATE_POST, GET_ALL_RECENT_POST, LIKE_POST, INDIVITUAL_POST} from '../constants/actionTypes'

export const postReducers = (state = [], action) => {
    switch(action.type) {
        case CREATE_POST:
            return [...state, action.payload.data];
        case GET_ALL_RECENT_POST:
            return action.payload.data;
        case INDIVITUAL_POST:
            return action.payload.data;
        case LIKE_POST:
            return state.map((post) => post.likes.user === [...state, action.payload.data] ? action.payload.data : state);
        default:
            return state;
    }
}