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
import { _querySearch } from '../api/search';

// TODO: implement error handling 'redux promise middleware' style

export const handleSearchChange = async (dispatch, searchValue) => {
  const MAX_RESULTS_PER_GROUP = 5;
  const RESULT_TYPE_GROUP = 'group';
  const searchTerm = searchValue.toLowerCase();

  dispatch({
    type: SET_SEARCH_VALUE,
    value: searchTerm,
  });

  if (searchValue.length < 2) {
    return null;
  }

  const { results } = await _querySearch(searchTerm);

  const formattedResults = Object.keys(results)
    .filter(key => key !== 'topic' && results[key].length) // TODO: remove condition `key !== 'topic'` when topic page is set up
    .reduce((prev, searchGroupKey) => {
      prev[searchGroupKey] = {
        name: searchGroupKey,
        results: results[searchGroupKey]
          .slice(0, MAX_RESULTS_PER_GROUP)
          .map(r => {
            // TEMPORARY: set thumbnail image for imgur image
            const logoUrl =
              (r.logoUrl || r.logo_url) && searchGroupKey === RESULT_TYPE_GROUP;
            const quality = 'b';
            const imgurThumb = logoUrl
              ? [
                  logoUrl.slice(0, logoUrl.lastIndexOf('.')),
                  quality,
                  logoUrl.slice(logoUrl.lastIndexOf('.')),
                ].join('')
              : null;

            return {
              id: r.id,
              title: r.name,
              countryId: r.countryId || r.country_id,
              ...(logoUrl && { logoUrl }),
              ...(imgurThumb && { image: imgurThumb }),
              group: searchGroupKey,
              // ...r.description && { description: r.description },
            };
          }),
      };
      return prev;
    }, {});

  dispatch({ type: SET_SEARCH_RESULTS, value: formattedResults });
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
  const result = await _fetchGroup(groupId);

  dispatch({ type: FETCH_GROUP_BY_ID, value: result });
};
