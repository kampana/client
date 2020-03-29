import React, { useEffect } from 'react';
import { useStateContext } from '../../state';
import { useHistory } from 'react-router-dom';
import { fetchCountries } from '../../actions/dispatchers';
import { Container, Header, Loader } from 'semantic-ui-react';
import CountryList from '../../components/CountryList/CountryList';

const CountriesPage = () => {
  const [
    {
      countries: { countryList }, // totalCountries
    },
    dispatch,
  ] = useStateContext();

  const history = useHistory();

  useEffect(() => {
    if (!countryList) fetchCountries(dispatch);
  }, [countryList, dispatch]);

  const handleCountryClicked = (countryId, countryName) => {
    history.push(`/country/${countryId}`, {
      name: countryName,
    });
  };

  return (
    <Container>
      {countryList ? (
        <>
          <Header as="h1">Choose your country</Header>
          <CountryList
            countryList={countryList}
            handleCountryClicked={handleCountryClicked}
          />
        </>
      ) : (
        <Loader active inline="centered">
          Loading countries…
        </Loader>
      )}
    </Container>
  );
};

export default CountriesPage;
