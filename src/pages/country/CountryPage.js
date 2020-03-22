// @flow
import React from 'react';
import { Container, Button, Icon, Segment, Header } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GroupList from '../../components/GroupList/GroupList';

const CountryPage = props => {
  const {
    match: { params },
  } = props;
  const { countryId } = params;

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

        <Header as="h1">{countryId.toUpperCase()}</Header>
      </Segment>

      {/* Click to see an <Link to="/group/1">example detail page</Link>. */}
      <GroupList countryId={countryId} />
    </Container>
  );
};

export default CountryPage;
