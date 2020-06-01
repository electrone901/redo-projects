import { combineReducers } from 'redux';
import projectsReducer from './projects';
import robotsReducer from './robots';
import robotReducer from './singleRobot';

const appReducer = combineReducers({
  projects: projectsReducer,
  robots: robotsReducer,
  robot: robotReducer,
});

export default appReducer;
