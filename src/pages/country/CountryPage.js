// @flow
import React, { useEffect, useState } from 'react';
import { Container, Button, Icon, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { dummyFetchGroups } from '../../api/groups';
import GroupList from '../../components/GroupList/GroupList';

const CountryPage = props => {
  const {
    match: { params },
  } = props;
  const { countryId } = params;
  const [groups, setGroups] = useState([]);
  const countryName = groups.length
    ? groups.find(
        c => countryId === c['country_code (iso 3661-alpha2)'].toLowerCase(),
      ).country
    : null;

  useEffect(() => {
    async function fetchData() {
      try {
        const allGroups = await dummyFetchGroups();
        setGroups(allGroups);
        // setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // console.log('country id: ', params.countryId);

  return (
    <Container>
      <Segment basic style={{ paddingLeft: '0', paddingRight: '0' }}>
        <Link to="/">
          <Button>
            <Icon name="arrow left" />
            Home
          </Button>
        </Link>

        <Header as="h1">{countryName}</Header>
      </Segment>

      {/* Click to see an <Link to="/group/1">example detail page</Link>. */}
      <GroupList countryId={countryId} />
    </Container>
  );
};

export default CountryPage;
