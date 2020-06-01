import axios from 'axios';

const SET_ROBOT = 'SET_ROBOT';

export const setRobot = (robot) => ({
  type: SET_ROBOT,
  robot,
});

export const fetchRobot = (robotId) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/robots/${robotId}`);
    console.log('what dat', data);
    dispatch(setRobot(data));
  };
};

const initialState = {};

export default function robotReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOT:
      return { ...action.robot };
    default:
      return state;
  }
}
