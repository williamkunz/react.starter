import {
    DELETE_APPLICATIONS
} from 'actions';

// sample filler data
const initializeState = {
    apps: [
        {
            name: 'foo',
            id: 1,
        },
        {
            name: 'bar',
            id: 2,
        }
    ]
};

/**
 * Applications Reducer.
 * @param {Object} state Current state passed to reducer.
 * @param {Object} action State changes passed from action.
 * @returns {Object} New app state
 */
export default function applications(state = initializeState, action = {}) {
    switch (action.type) {
        // sample reducer
        case DELETE_APPLICATIONS:
        console.log(action);
            return {
                ...state,
                apps: action.apps,
            };

        default:
            return state;
    }
}
