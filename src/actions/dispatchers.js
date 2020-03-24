import { SET_SEARCH_VALUE, SET_SEARCH_RESULTS, FETCH_COUNTRIES } from './types';
import { dummyFetchGroups } from '../api/groups';

export const handleSearchChange = (dispatch, searchValue) => {
  const searchTerm = searchValue.toLowerCase();
  dispatch({
    type: SET_SEARCH_VALUE,
    value: searchTerm,
  });
  return (
    dummyFetchGroups()
      .then(result => {
        const searchResults = result
          .filter(({ 'group name': name }) =>
            name.toLowerCase().includes(searchTerm),
          )
          .map(r => ({
            title: r['group name'],
            // image: r.logo,
          }));
        dispatch({ type: SET_SEARCH_RESULTS, value: searchResults });
      })
      // TODO: error handling
      .catch(reason => {
        throw reason;
      })
  );
};
