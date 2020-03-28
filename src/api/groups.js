import { normalize, schema } from 'normalizr';
import http from '../lib/http';

const groupsByCountryIdSchema = new schema.Entity(
  'byCountryId',
  {},
  {
    processStrategy: value => ({ [value.id]: value }),
    mergeStrategy: (entityA, entityB) => ({ ...entityA, ...entityB }),
    idAttribute: value => {
      return value.countryId;
    },
  },
);

export function _fetchGroups(
  countryId, // Leave empty for all countries
  page, // Leave empty to get all items
  pageSize, // Leave empty to get all items
  options,
) {
  return http
    .get('group', { params: { countryId, page, pageSize }, ...options })
    .then(
      ({ data }) =>
        normalize(data, {
          _embedded: { group: [groupsByCountryIdSchema] },
        }).entities,
    );
}

export function _fetchGroup(groupId, options) {
  return http.get(`group/${groupId}`, options).then(({ data }) => data);
}
