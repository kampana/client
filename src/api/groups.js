import http from '../lib/http';

// TODO: rplace hardcoded data with API call
// const groups = require('../data/groups.json');

export function fetchGroups() {
  return Promise.reject(new Error('Not implemented yet')); // http.get('/groups.json', options).then(({ data }) => data);
}

export function dummyFetchGroups() {
  return http.get('/groups.json').then(({ data }) => {
    return data;
  });
}
