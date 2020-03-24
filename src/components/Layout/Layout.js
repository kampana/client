// @flow
import React from 'react';
// import logo from '../../images/logo.svg';
import { withRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import { StateProvider } from '../../state';
import {
  SET_SEARCH_VALUE,
  SET_SEARCH_RESULTS,
  FETCH_COUNTRIES,
} from '../../actions/types';

const initialState = {
  search: {
    searchValue: '',
    searchResults: null,
  },
  countries: {
    countryList: null,
    totalCountries: null,
  },
};

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
        countries: action.value,
      };
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
