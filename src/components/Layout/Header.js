// @flow
import React, { useState } from 'react';
import { Menu, Container, Search, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const logo = require('../../images/logo.png');

const StyledHeader = styled.header`
  padding: 3rem 0;
`;

const Header = () => {
  const [isLoading] = useState(false);
  const [results] = useState([]);
  const [value] = useState('');
  // const [activeItem, setActiveItem] = useState('home');
  // const handleItemClick = item => {
  //   setActiveItem(item);
  // };

  const projectName = 'CivicTechHub';
  const handleResultSelect = () => {};

  return (
    <StyledHeader>
      <Container>
        <Menu>
          <Menu.Item header style={{ padding: '0 1rem' }}>
            <NavLink to="/" title={projectName}>
              <Image src={logo} alt={projectName} style={{ width: 148 }} />
            </NavLink>
          </Menu.Item>

          <Menu.Item position="right">
            <Search
              loading={isLoading}
              onResultSelect={handleResultSelect}
              // onSearchChange={_.debounce(this.handleSearchChange, 500, {
              //   leading: true,
              // })}
              results={results}
              value={value}
              // {...this.props}
            />
          </Menu.Item>
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
