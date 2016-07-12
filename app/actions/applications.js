export const DELETE_APPLICATIONS = 'DELETE_APPLICATIONS';

/**
 * Deletes all applications
 * @returns {Object} Action type
 */
export function deleteApplications(allApplications) {
    // ajax logic here if needed, then dispatch an action object
    // or in this case, return an action object

    console.log(allApplications);

    return {
        type: DELETE_APPLICATIONS,
        apps: [],
    };
}
