import http from '../lib/http';

export function _fetchCountries(options) {
  return http.get('country', options).then(({ data }) => data);
}

export function _fetchCountry(countryId, options) {
  return http.get(`country/${countryId}`, options).then(({ data }) => data);
}
