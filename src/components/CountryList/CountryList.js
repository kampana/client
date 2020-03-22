// @flow
import React, { useState, useEffect } from 'react';
import { Flag, Card } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { dummyFetchGroups } from '../../api/groups';

const CountryList = () => {
  // TODO: replace group fetch call with countries fetch call
  const [countries, setCountries] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const getUniqueCountries = groups => {
    return groups.reduce((prev, curr) => {
      // const {} = curr
      const countryCode = curr['country_code (iso 3661-alpha2)'].toLowerCase();

      // prev[countryCode] = prev.countryCode || {};

      if (!(prev[countryCode] || {}).count) {
        prev[countryCode] = {
          country: curr.country,
          country_code: countryCode,
          count: 1,
        };
      } else {
        prev[countryCode].count += 1;
      }

      return prev;
    }, {});
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const groups = await dummyFetchGroups();
        setCountries(getUniqueCountries(groups));
        // setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Card.Group>
      {Object.values(countries).map(g => {
        const { country, count } = g;
        const name = country.toLowerCase();
        const countryCode = g.country_code;

        return (
          <Card
            onClick={() => history.push(`/country/${countryCode}`)}
            key={countryCode}
          >
            {/* <Item.Image>

                </Item.Image> */}

            <Card.Content>
              <Card.Header>
                <Flag name={name} />
                {country}
                {/* <Link to={`/country/${countryCode}`}></Link> */}
              </Card.Header>

              {/* <Item.Description>Find groups in {country}.</Item.Description> */}

              <Card.Meta>
                {count} {count === 1 ? 'group' : 'groups'}
                {/* <Icon name="clipboard outline" /> */}
              </Card.Meta>
            </Card.Content>
          </Card>
        );
      })}
    </Card.Group>
  );
};

export default CountryList;
