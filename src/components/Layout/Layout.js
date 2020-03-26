// @flow
import React from 'react';
// import logo from '../../images/logo.svg';
import { withRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import { StateProvider } from '../../state';
import mainReducer from '../../reducers';
import initialState from '../../reducers/initialState';

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

      <StateProvider initialState={initialState} reducer={mainReducer}>
        {props.location.pathname !== '/wirvsvirushack' && <Header />}

        <main>{children}</main>

        {props.location.pathname !== '/wirvsvirushack' && <Footer />}
      </StateProvider>
    </App>
  );
};

export default withRouter(Layout);
