// @flow
import React from 'react';
// import logo from '../../images/logo.svg';
import { withRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import _ from 'lodash';

import Header from './Header';
import Footer from './Footer';
import { StateProvider } from '../../state';
import {
  SET_SEARCH_VALUE,
  SET_SEARCH_RESULTS,
  FETCH_COUNTRIES,
  FETCH_COUNTRY_BY_ID,
  FETCH_GROUPS_BY_COUNTRY,
} from '../../actions/types';

const initialState = {
  search: {
    searchValue: '',
    searchResults: null,
  },
  countries: {
    activeCountry: null,
    countryList: null,
    totalCountries: null,
  },
  groups: {
    activeGroup: null,
    groupList: null,
    totalGroups: null,
  },
};

// TODO: split to different reducers
const reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        search: { ...state.search, searchValue: action.value },
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        search: { ...state.search, searchResults: action.value },
      };
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: _.merge(state.countries, action.value),
      };
    case FETCH_COUNTRY_BY_ID:
      return {
        ...state,
        countries: { ...state.countries, activeCountry: action.value },
      };
    case FETCH_GROUPS_BY_COUNTRY:
      return { ...state, groups: _.merge(state.groups, action.value) };
    default:
      return state;
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    color: #3a3a3a;
  }

  h1 {
    &.ui.header {
      margin-bottom: 2rem; 
    }
  }

  a {
    color: #A13262;

    &:hover {
      color: #A13262;
    }
  }
`;

const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

const Layout = props => {
  const { children } = props;

  return (
    <App>
      <GlobalStyle />

      <StateProvider initialState={initialState} reducer={reducer}>
        {props.location.pathname !== '/wirvsvirushack' && <Header />}

        <main>{children}</main>

        {props.location.pathname !== '/wirvsvirushack' && <Footer />}
      </StateProvider>
    </App>
  );
};

export default withRouter(Layout);
