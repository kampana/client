// @flow
import React from 'react';
import { Flag, Label, Item, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const groups = require('../../data/groups.json');

const CountryList = () => {
  // const countries = groups.map(g => g.country);
  // const uniqueCountries = [...new Set(countries)].sort((a, b) => b - a);
  const uniqueCountries = groups.reduce((prev, curr) => {
    // const {} = curr
    const countryCode = curr['country_code (iso 3661-alpha2)'];

    // prev[countryCode] = prev.countryCode || {};

    if (!(prev[countryCode] || {}).count) {
      prev[countryCode] = { ...curr, count: 1 };
    } else {
      prev[countryCode].count = prev[countryCode].count + 1;
    }

    return prev;
  }, {});

  return (
    <div>
      <Item.Group>
        {Object.values(uniqueCountries).map(g => {
          const { country, count } = g;
          const name = country.toLowerCase();
          const countryCode = g['country_code (iso 3661-alpha2)'].toLowerCase();

          return (
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
          );
        })}
      </Item.Group>
    </div>
  );
};

export default CountryList;
