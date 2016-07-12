import { combineReducers } from 'redux';

// Reducers
import applications from './applications';

// Routing Reducer
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    applications,
    routing: routerReducer,
});

export default rootReducer;
