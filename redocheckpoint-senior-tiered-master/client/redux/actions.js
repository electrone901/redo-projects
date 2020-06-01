import axios from 'axios';
import { SET_CAMPUSES, SELECT_CAMPUS, ADD_CAMPUS } from './constants';

// ACTION CREATORS

export const setCampuses = (campuses) => ({
    type: SET_CAMPUSES,
    campuses
})

export const selectCampus = (campus) => ({
    type: SELECT_CAMPUS,
    campus
});

export const addCampus = (campus) => ({
    type: ADD_CAMPUS,
    campus
});

// THUNK CREATORS
export const fetchCampuses = () => {
    return async(dispatch) => {
        const { data } = await axios.get('/api/campuses');
        dispatch(setCampuses(data))
    }
}


export const postCampus = (campus) => {
    return async(dispatch) => {
        const { data } = await axios.post('/api/campuses', campus);
        dispatch(addCampus(data))
    }
};