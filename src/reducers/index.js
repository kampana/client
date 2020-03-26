import countriesReducer from './countries';
import groupsReducer from './groups';
import searchReducer from './search';

const mainReducer = ({ countries, groups, search }, action) => {
  // middleware goes here, i.e calling analytics service, etc.

  return {
    countries: countriesReducer(countries, action),
    groups: groupsReducer(groups, action),
    search: searchReducer(search, action),
  };
};

export default mainReducer;
