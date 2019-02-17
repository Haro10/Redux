import { combineReducers } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
const store = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});
