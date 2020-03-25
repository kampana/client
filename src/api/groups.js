import axios from 'axios';
import http from '../lib/http';

export function _fetchGroups(
  countryId, // Leave empty for all countries
  page, // Leave empty to get all items
  pageSize, // Leave empty to get all items
  options,
) {
  return http
    .get('group', { params: { countryId, page, pageSize }, ...options })
    .then(({ data }) => data);
}

export function _fetchGroup(groupId, options) {
  return http.get(`group/${groupId}`, options).then(({ data }) => data);
}

export function dummyFetchGroups() {
  axios.create({
    baseURL: '/',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return axios.get('./groups.json').then(({ data }) => data);
}
