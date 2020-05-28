import { combineReducers } from 'redux';
import SongReducer from './songReducer';


const rootReducer = combineReducers({
  song: SongReducer,
});

export default rootReducer;