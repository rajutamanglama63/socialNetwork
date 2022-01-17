import {CREATE_PROJECT, GET_PROJECT, DEL_PROJECT} from '../constants/actionTypes'
import {setHeaders} from '../../utils/index'
import axios from 'axios'

export const createProject = (inputProjectData) => async (dispatch) => {
    try {
        const data = await axios.post('api/project/add', inputProjectData, setHeaders());

        dispatch({
            type : CREATE_PROJECT,
            payload : data
        })
    } catch (error) {
        console.log(error);
    }
};

export const getProject = () => async (dispatch) => {
    try {
        const project = await axios.get('/api/project/render_project', setHeaders());

        dispatch({
            type : GET_PROJECT,
            payload : project
        });
    } catch (error) {
        console.log(error);
    }
};

export const delProject = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/project/del_project/${id}`, setHeaders());

        dispatch({
            type : DEL_PROJECT,
            payload : id
        });
    } catch (error) {
        console.log(error);
    }
}