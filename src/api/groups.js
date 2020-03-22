import http from '../lib/http';

// TODO: replace hardcoded data with API call
import groups from '../data/groups';

export function fetchGroups(options) {
  return http.get('groups', options).then(({ data }) => data);
}

export function dummyFetchGroups() {
  return groups;
}
