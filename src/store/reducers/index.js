import { combineReducers } from 'redux';

// 导入项目reducers
import initState from './initState'

const allReducers = {
    initState: initState
}

const rootReducer = combineReducers(allReducers);
export default rootReducer;
