import axios from 'axios';

const SET_ROBOTS = 'SET_ROBOTS';

export const setRobots = (robots) => ({
  type: SET_ROBOTS,
  robots,
});

export const fetchRobots = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/robots');
    dispatch(setRobots(data));
  };
};

const initialState = [];
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      return [...action.robots];
    default:
      return state;
  }
}
