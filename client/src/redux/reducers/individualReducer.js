import {INDIVITUAL_POST} from '../constants/actionTypes'

export const individualPostReducers = (state = [], action) => {
    switch(action.type) {
        case INDIVITUAL_POST:
            return action.payload.data;
        default:
            return state;
    }
};