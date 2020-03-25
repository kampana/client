// @flow
import React, { useEffect } from 'react';
import { Container, Header, Loader } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useStateContext } from '../../state';
import { fetchCountries } from '../../actions/dispatchers';
// import { Link } from 'react-router-dom';

import CountryList from '../../components/CountryList/CountryList';

const HomePage = () => {
  const [
    {
      countries: { countryList, totalCountries },
    },
    dispatch,
  ] = useStateContext();

  const history = useHistory();

  const handleCountryClicked = countryId => {
    history.push(`/country/${countryId}`);
  };

  useEffect(() => {
    if (!countryList) fetchCountries(dispatch);
  }, []);

  return (
    <Container>
      {countryList ? (
        <>
          <Header as="h1">Choose your country</Header>
          <CountryList
            countryList={countryList}
            handleCountryClicked={handleCountryClicked}
          />{' '}
        </>
      ) : (
        <Loader active inline="centered">
          Loading our list of countries for you...
        </Loader>
      )}
    </Container>
  );
};

export default HomePage;
