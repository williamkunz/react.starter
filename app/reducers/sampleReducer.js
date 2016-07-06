import {
    SAMPLE_ACTION
} from '../actions';

// sample filler data
const initializeState = {
    signedIn: false,
    username: {
        given: 'John',
        family: 'Depp'
    }
};

/**
 * Placeholeder Reducer that currently does nothing.
 * @param {Object} state Current state passed to reducer.
 * @param {Object} action State changes passed from action.
 * @returns {Object} New app state
 */
export default function sampleReducer(state = initializeState, action = {}) {
    switch (action.type) {
        // sample reducer
        case SAMPLE_ACTION:
            return {
                ...state
            };

        default:
            return state;
    }
}
