// @flow
import React, { useState, useEffect } from 'react';
import { Flag, Label, Item, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { dummyFetchGroups } from '../../api/groups';

const CountryList = () => {
  // TODO: replace group fetch call with countries fetch call
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUniqueCountries = groups => {
    return groups.reduce((prev, curr) => {
      // const {} = curr
      const countryCode = curr['country_code (iso 3661-alpha2)'];

      // prev[countryCode] = prev.countryCode || {};

      if (!(prev[countryCode] || {}).count) {
        prev[countryCode] = { ...curr, count: 1 };
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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Item.Group>
        {/* <Grid> */}
        {Object.values(countries).map(g => {
          const { country, count } = g;
          const name = country.toLowerCase();
          const countryCode = g['country_code (iso 3661-alpha2)'].toLowerCase();

          return (
            // <Grid.Column width="3">
            <Item>
              {/* <Item.Image>

                </Item.Image> */}

              <Item.Content>
                <Item.Header>
                  <Flag name={name} />
                  <Link to={`/country/${countryCode}`}>{country}</Link>
                </Item.Header>

                {/* <Item.Description>Find groups in {country}.</Item.Description> */}

                <Item.Meta>
                  <Label>
                    Groups
                    {/* <Icon name="clipboard outline" /> */}
                    <Label.Detail>{count}</Label.Detail>
                  </Label>
                </Item.Meta>
              </Item.Content>
            </Item>
            // </Grid.Column>
          );
        })}
        {/* </Grid> */}
      </Item.Group>
    </div>
  );
};

export default CountryList;
