import http from '../lib/http';

export function fetchCountries(options) {
  return http.get('country', options).then(({ data }) => data);
}

export function fetchCountry(countryId, options) {
  return http.get(`country/${countryId}`, options).then(({ data }) => data);
}
