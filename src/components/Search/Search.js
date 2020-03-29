// @flow
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { Menu, Search as SearchElement, Responsive } from 'semantic-ui-react';
import { useStateContext } from '../../state';
import { handleSearchChange } from '../../actions/dispatchers';

const Search = () => {
  const [
    {
      search: { searchValue, searchResults },
    },
    dispatch,
  ] = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleResultSelect = (e, { result: { id, countryId, group } }) => {
    if (group === 'country') {
      history.push(`/country/${id}`);
    }

    if (group === 'group' && countryId && id) {
      history.push(`/${countryId}/${id}`);
    }
  };

  return (
    <Responsive as={Menu.Item} minWidth={576} position="right">
      <SearchElement
        category
        placeholder="Search name or topic"
        loading={isLoading}
        onResultSelect={handleResultSelect}
        minCharacters={2}
        onSearchChange={_.debounce(
          e => {
            setIsLoading(true);
            handleSearchChange(dispatch, e.target.value).then(() => {
              setIsLoading(false);
            });
          },
          300,
          {
            leading: true,
          },
        )}
        results={searchResults}
        value={searchValue}
      />
    </Responsive>
  );
};

export default Search;
