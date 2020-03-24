import http from '../lib/http';

export function fetchGroups(
  countryId, // Leave empty for all countries
  page, // Leave empty to get all items
  pageSize, // Leave empty to get all items
  options,
) {
  return http
    .get('group', { query: { countryId, page, pageSize }, ...options })
    .then(({ data }) => data);
}

export function fetchGroup(groupId, options) {
  return http.get(`group/${groupId}`, options).then(({ data }) => data);
}
