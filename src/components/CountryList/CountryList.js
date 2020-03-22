// @flow
import React from 'react';
import { List, Flag } from 'semantic-ui-react';

const groups = require('../../data/groups.json');

const CountryList = () => {
  return (
    <div>
      <List>
        {groups.map(g => {
          const { country } = g;

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
