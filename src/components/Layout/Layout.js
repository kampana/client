// @flow
import React from 'react';
// import logo from '../../images/logo.svg';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

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
      {props.location.pathname !== '/wirvsvirushack' && <Header />}

      <main>{children}</main>

      {props.location.pathname !== '/wirvsvirushack' && <Footer />}
    </App>
  );
};

export default withRouter(Layout);
