import { SET_SEARCH_VALUE, SET_SEARCH_RESULTS } from '../actions/types';

export const INITIAL_STATE = {
  searchValue: '',
  searchResults: null,
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.value,
      };
    default:
      return state;
  }
};

export default searchReducer;
