// @flow
import http from '../lib/http';

export const _querySearch = (
  searchValue: string = '',
  options: Object = {},
) => {
  return http
    .get('search', {
      params: {
        phrase: searchValue,
        limit: 5,
        entities: ['country', 'topic', 'group'].join(','),
        ...options,
      },
    })
    .then(({ data }) => data);
};
