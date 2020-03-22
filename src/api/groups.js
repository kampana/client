import http from '../lib/http';

// TODO: rplace hardcoded data with API call
const groups = require('../data/groups.json');

export function fetchGroups(options) {
  return http.get('groups', options).then(({ data }) => data);
}

export function dummyFetchGroups() {
  return groups;
}
