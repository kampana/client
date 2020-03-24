// @flow
import React, { useState } from 'react';
import _ from 'lodash';
import { Menu, Container, Search, Image, Responsive } from 'semantic-ui-react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { AppContext } from './Layout';
import { dummyFetchGroups } from '../../api/groups';

const logo = require('../../images/logo.png');

const StyledHeader = styled.header`
  padding: 3rem 0;
`;

const Header = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const [isLoading] = useState(false);
  const [results, setResults] = useState([]);
  const history = useHistory();
  // const [activeItem, setActiveItem] = useState('home');
  // const handleItemClick = item => {
  //   setActiveItem(item);
  // };

  const projectName = 'CivicTechHub';

  const handleSearchChange = e => {
    const searchTermOriginal = e.target.value;
    const searchTerm = searchTermOriginal.toLowerCase();

    dispatch({
      type: 'PERFORM_SEARCH',
      value: searchTermOriginal,
    });
    return dummyFetchGroups()
      .then(result => {
        const searchResults = result
          .filter(
            ({
              'group name': name,
              'Topics (separated by |||)': topicString,
            }) => {
              const matchesTopics = topicString.includes(searchTerm);

              return name.toLowerCase().includes(searchTerm) || matchesTopics;
            }
          )
          .map(r => ({
            title: r['group name'],
            description: r['Topics (separated by |||)'].split('|||').join(', '),
            // image: r.logo,
          }));
        setResults(searchResults);
      })
      .catch(reason => {
        throw reason;
      });
  };

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
              placeholder="Search name or topic"
              loading={isLoading}
              onResultSelect={handleResultSelect}
              onSearchChange={_.debounce(handleSearchChange, 300, {
                leading: true,
              })}
              results={results}
              value={state.globalSearchValue}
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
