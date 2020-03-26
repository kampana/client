import {
  SET_SEARCH_VALUE,
  SET_SEARCH_RESULTS,
  FETCH_COUNTRIES,
  FETCH_COUNTRY_BY_ID,
  FETCH_GROUPS_BY_COUNTRY,
  FETCH_GROUP_BY_ID,
} from './types';
import { _fetchGroups, _fetchGroup } from '../api/groups';
import { _fetchCountries, _fetchCountry } from '../api/countries';

// TODO: implement error handling 'redux promise middleware' style

export const handleSearchChange = (dispatch, searchValue) => {
  // THIS IS BROKEN
  // NEED TO REPLACE WITH API CALL
  const searchTerm = searchValue.toLowerCase();
  dispatch({
    type: SET_SEARCH_VALUE,
    value: searchTerm,
  });
  // LOGIC HERE
  // SET SEARCH RESULTS LIKE THIS:
  // dispatch({ type: SET_SEARCH_RESULTS, value: searchResults });

  /* return dummyFetchGroups()
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
    .catch(error => {
      // TODO: error handling
      throw error;
    }); */
};

export const fetchCountries = async dispatch => {
  const response = await _fetchCountries();
  const {
    _embedded: { country: countryList },
    total_items: totalCountries,
  } = response;
  dispatch({
    type: FETCH_COUNTRIES,
    value: { countryList, totalCountries },
  });
};

export const fetchCountryById = async (
  dispatch,
  countryId,
  countryList = [], // optional
) => {
  const country =
    countryList.find(c => c.id === countryId) ||
    (await _fetchCountry(countryId));
  dispatch({ type: FETCH_COUNTRY_BY_ID, value: country });
};

export const fetchGroupsByCountry = async (dispatch, countryId) => {
  const { byCountryId } = await _fetchGroups(countryId);

  dispatch({
    type: FETCH_GROUPS_BY_COUNTRY,
    value: byCountryId,
  });
};

export const fetchGroupById = async (dispatch, groupId) => {
  const { byCountryId } = await _fetchGroup(groupId);

  dispatch({ type: FETCH_GROUP_BY_ID, value: byCountryId });
};
