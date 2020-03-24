// @flow
import React, { useState } from 'react';
import _ from 'lodash';
import { Menu, Container, Search, Image, Responsive } from 'semantic-ui-react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { useStateContext } from '../../state';
import { handleSearchChange } from '../../actions/dispatchers';

const logo = require('../../images/logo.png');

const StyledHeader = styled.header`
  padding: 3rem 0;
`;

const Header = () => {
  const [
    {
      search: { searchValue, searchResults },
    },
    dispatch,
  ] = useStateContext();
  const [isLoading] = useState(false);
  const history = useHistory();
  // const [activeItem, setActiveItem] = useState('home');
  // const handleItemClick = item => {
  //   setActiveItem(item);
  // };

  const projectName = 'CivicTechHub';

  const handleResultSelect = (e, { result: { title } }) => {
    history.push(`/group/${title}`);
  };

  return (
    <StyledHeader>
      <Container>
        <Menu>
          <Menu.Item header style={{ padding: '0 1rem' }}>
            <NavLink to="/" title={projectName}>
              <Image src={logo} alt={projectName} style={{ width: 148 }} />
            </NavLink>
          </Menu.Item>

          <Responsive as={Menu.Item} minWidth={576} position="right">
            <Search
              placeholder="Search"
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
          {/* <Menu.Item
            name="home"
            active={activeItem === 'home'}
            // onClick={handleItemClick}
          >
            <a href="/"
          </Menu.Item> */}
        </Menu>
      </Container>
    </StyledHeader>
  );
};

export default Header;
