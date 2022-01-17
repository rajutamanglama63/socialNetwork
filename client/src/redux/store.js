import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {authReducers} from './reducers/authReducers'
import { profileReducers } from './reducers/profileReducer';
import { projectReducers } from './reducers/projectReducers';
import { eduReducers } from './reducers/eduReducers';
import { postReducers } from './reducers/postReducers';
import { individualPostReducers } from './reducers/individualReducer'
import { likeReducers } from './reducers/likeReducers';

const middleware = [thunk];

const reducers = combineReducers({
    auth : authReducers,
    profile : profileReducers,
    project : projectReducers,
    education : eduReducers,
    post : postReducers,
    individualPost : individualPostReducers,
    like : likeReducers
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
 