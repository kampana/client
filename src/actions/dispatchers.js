import { SET_SEARCH_VALUE, SET_SEARCH_RESULTS, FETCH_COUNTRIES } from './types';
import { dummyFetchGroups } from '../api/groups';
import { _fetchCountries } from '../api/countries';

// TODO: implement error handling 'redux promise middleware' style

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
          .filter(
            ({
              'group name': name,
              'Topics (separated by |||)': topicString,
            }) => {
              const matchesTopics = topicString.includes(searchTerm);

              return name.toLowerCase().includes(searchTerm) || matchesTopics;
            },
          )
          .map(r => ({
            title: r['group name'],
            description: r['Topics (separated by |||)'].split('|||').join(', '),
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

export const fetchCountries = async dispatch => {
  try {
    const response = await _fetchCountries();
    const {
      country: countryList,
      total_items: totalCountries,
    } = response._embedded;
    dispatch({
      type: FETCH_COUNTRIES,
      value: { countryList, totalCountries },
    });
    // setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};
