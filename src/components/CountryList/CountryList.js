// @flow
import React from 'react';
import { Flag, Card } from 'semantic-ui-react';

const CountryList = ({ countryList, handleCountryClicked }) => {
  return (
    <Card.Group stackable itemsPerRow="4">
      {countryList.map(country => {
        const { id, name, iso3166Code, countGroups } = country;

        return (
          <Card onClick={() => handleCountryClicked(id, name)} key={id}>
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
