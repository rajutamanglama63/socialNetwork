import {CREATE_PROFILE,GET_PROFILE} from '../constants/actionTypes'


export const profileReducers = (state = [], action) => {
    switch(action.type) {
        case CREATE_PROFILE:
            return [...state, action.payload.data];
        case GET_PROFILE:
            return action.payload.data;
        default:
            return state;
    }
}