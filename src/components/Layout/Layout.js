// @flow
import React from 'react';
// import logo from '../../images/logo.svg';
import { withRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import * as v from '../../config/variables';
import Header from './Header';
import Footer from './Footer';
import { StateProvider } from '../../state';
import mainReducer from '../../reducers';
import initialState from '../../reducers/initialState';

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    color: ${v.black}; 

    &.ui.header {
      color: ${v.black}; 
     }
  }

  h1, .h1 {
    color: ${v.primary};

    &.ui.header {
      color: ${v.primary}; 
    }
  }
  

  h3 {
    font-weight: normal; 

    &.ui.header {
      font-weight: normal; 
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

const Layout = (props) => {
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
