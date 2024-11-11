import {combineReducers} from '@reduxjs/toolkit';
import profileReducer from '../slice/profileSlice.jsx';
import searchReducer from '../slice/searchSlice.jsx';

const rootReducer = combineReducers({
  profile:profileReducer,
  search : searchReducer,
})
export default rootReducer ;