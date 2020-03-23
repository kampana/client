// @flow
import React, { useReducer } from 'react';
// import logo from '../../images/logo.svg';
import { withRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

export const AppContext = React.createContext();
const initialState = {
  globalSearchValue: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PERFORM_SEARCH':
      return {
        ...state,
        globalSearchValue: action.value,
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <App>
      <GlobalStyle />

      <AppContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {props.location.pathname !== '/wirvsvirushack' && <Header />}

        <main>{children}</main>

        {props.location.pathname !== '/wirvsvirushack' && <Footer />}
      </AppContext.Provider>
    </App>
  );
};

export default withRouter(Layout);
