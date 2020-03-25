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

  const [isLoading] = useState(false);
  const history = useHistory();

  const handleResultSelect = (e, { result: { id } }) => {
    history.push(`/group/${id}`);
  };

  return (
    <Responsive as={Menu.Item} minWidth={576} position="right">
      <SearchElement
        placeholder="Search name or topic"
        loading={isLoading}
        onResultSelect={handleResultSelect}
        onSearchChange={_.debounce(
          e => handleSearchChange(dispatch, e.target.value),
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
