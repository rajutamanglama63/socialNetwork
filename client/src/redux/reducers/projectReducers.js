import {CREATE_PROJECT, DEL_PROJECT, GET_PROJECT} from '../constants/actionTypes'

export const projectReducers = (state = [], action) => {
    switch(action.type) {
        case CREATE_PROJECT:
            return [...state, action.payload.data];
        case GET_PROJECT:
            return action.payload.data;
        case DEL_PROJECT:
            return state.filter((project) => project._id !== action.payload);
        default:
            return state;
    }
};