export const SAMPLE_ACTION = 'SAMPLE_ACTION';

/**
 * Does nothing at the moment
 * @returns {Object} Action type
 */
export function sampleAction() {
    return dispatch => dispatch({type: SAMPLE_ACTION});
}
