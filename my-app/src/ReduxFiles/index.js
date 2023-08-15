// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer'; // Import other reducers here

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers here
});

export default rootReducer;