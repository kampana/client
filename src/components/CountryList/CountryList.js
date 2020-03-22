// @flow
import React, { useState, useEffect } from 'react';
import { List, Flag } from 'semantic-ui-react';
import { dummyFetchGroups } from '../../api/groups';

const CountryList = () => {
  // TODO: replace group fetch call with countries fetch call
  const [countries, setCountries] = useState([]);
  // Loading indication set up
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    try {
      const groups = await dummyFetchGroups();
      setCountries(groups.map(g => g.country));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <List>
        {countries.map(country => {
          return (
            <List.Item>
              <Flag name={country.toLowerCase()} />
              <List.Content>{country}</List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default CountryList;
