import {combineReducers} from 'redux';

// Reducers
import sampleReducer from './sampleReducer';

// Routing Reducer
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    routing: routerReducer,
    sampleReducer
});

export default rootReducer;
