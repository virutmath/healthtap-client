import {createSelector} from 'reselect';

/**
 * Direct selector to the adminPanel state domain
 */
const selectAdminPanelDomain = () => state => state.get('adminPanel');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AdminPanel
 */

const selectAdminPanel = () => createSelector(
	selectAdminPanelDomain(),
	(substate) => substate.toJS()
);

export default selectAdminPanel;
export {
	selectAdminPanelDomain,
};
