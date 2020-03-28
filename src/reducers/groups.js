import _ from 'lodash';
import { FETCH_GROUPS_BY_COUNTRY, FETCH_GROUP_BY_ID } from '../actions/types';

export const INITIAL_STATE = {
  byCountryId: {},
};

const groupsReducer = (state = INITIAL_STATE, action) => {
  const { value: group } = action;

  switch (action.type) {
    case FETCH_GROUPS_BY_COUNTRY:
    case FETCH_GROUP_BY_ID:
      return {
        ...state,
        [group.id]: group,
        byCountryId: _.merge(state.byCountryId, group),
      };
    default:
      return state;
  }
};

export default groupsReducer;
