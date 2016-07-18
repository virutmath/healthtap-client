import expect from 'expect';
import adminPanelReducer from '../reducer';
import { fromJS } from 'immutable';

describe('adminPanelReducer', () => {
  it('returns the initial state', () => {
    expect(adminPanelReducer(undefined, {})).toEqual(fromJS({}));
  });
});
