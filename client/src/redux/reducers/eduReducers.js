import {ADD_EDUCATION, GET_EDUCATION} from '../constants/actionTypes'

export const eduReducers = (state = [], action) => {
    switch(action.type) {
        case ADD_EDUCATION:
            return [...state, action.payload.data];
        case GET_EDUCATION:
            return action.payload.data;
        default:
            return state;
    }
}