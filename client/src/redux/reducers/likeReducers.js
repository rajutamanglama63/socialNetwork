import {LIKE_POST} from '../constants/actionTypes'

export const likeReducers = (state = [], action) => {
    switch(action.type) {
        case LIKE_POST:
            return [...state, action.payload.data];
        default:
            return state;
    }
}