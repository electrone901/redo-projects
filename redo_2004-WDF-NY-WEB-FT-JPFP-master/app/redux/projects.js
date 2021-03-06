const axios = require('axios');
const SET_PROJECTS = 'SET_PROJECTS';

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  projects,
});

export const fetchProjects = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/projects');
    dispatch(setProjects(data));
  };
};

const initialState = [];
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return [...action.projects];
    default:
      return state;
  }
}
