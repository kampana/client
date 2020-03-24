// @flow
import React, { useState, useEffect } from 'react';
import { Flag, Card } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { fetchCountries } from '../../api/countries';

const CountryList = () => {
  // TODO: replace group fetch call with countries fetch call
  const [countries, setCountries] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchCountries();
        setCountries(response._embedded.country);
        // setIsLoading(false);
      } catch (error) {
        // console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Card.Group stackable itemsPerRow="4">
      {Object.values(countries).map(country => {
        const { id, name, iso3166Code, countGroups } = country;

        return (
          <Card onClick={() => history.push(`/country/${id}`)} key={id}>
            {/* <Item.Image>

                </Item.Image> */}

            <Card.Content>
              <Card.Header>
                <Flag name={iso3166Code.toLowerCase()} />
                {name}
                {/* <Link to={`/country/${id}`}></Link> */}
              </Card.Header>

              {/* <Item.Description>Find groups in {country}.</Item.Description> */}

              <Card.Meta>
                {countGroups} {countGroups === 1 ? 'group' : 'groups'}
              </Card.Meta>
            </Card.Content>
          </Card>
        );
      })}
    </Card.Group>
  );
};

export default CountryList;
