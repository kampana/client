// @flow
import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../Search/Search';

const logo = require('../../images/logo.png');

const StyledHeader = styled.header`
  padding: 3rem 0;
`;

const Header = () => {
  // const [activeItem, setActiveItem] = useState('home');
  // const handleItemClick = item => {
  //   setActiveItem(item);
  // };

  const projectName = 'CivicTechHub';

  return (
    <StyledHeader>
      <Container>
        <Menu>
          <Menu.Item header style={{ padding: '0 1rem' }}>
            <NavLink to="/" title={projectName}>
              <Image src={logo} alt={projectName} style={{ width: 148 }} />
            </NavLink>
          </Menu.Item>

          <Search />
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
