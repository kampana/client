import _ from 'lodash';
import { FETCH_GROUPS_BY_COUNTRY, FETCH_GROUP_BY_ID } from '../actions/types';

export const INITIAL_STATE = {
  activeGroup: null,
  groupList: [],
  totalGroups: null,
};

const groupsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GROUPS_BY_COUNTRY:
      return _.merge(state, action.value);
    case FETCH_GROUP_BY_ID:
      return {
        ...state,
        groupList: _.merge(state.groupList, action.value),
      };
    default:
      return state;
  }
};

export default groupsReducer;
