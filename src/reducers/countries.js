import _ from 'lodash';
import { FETCH_COUNTRIES, FETCH_COUNTRY_BY_ID } from '../actions/types';

export const INITIAL_STATE = {
  activeCountry: null,
  countryList: null,
  totalCountries: null,
};

const countriesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return _.merge(state.countries, action.value);
    case FETCH_COUNTRY_BY_ID:
      return {
        ...state,
        activeCountry: action.value,
      };
    default:
      return state;
  }
};

export default countriesReducer;
