import http from '../lib/http';

export function fetchCountries(options) {
  return http.get('countries', options).then(({ data }) => data);
}
