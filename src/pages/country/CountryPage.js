// @flow
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useHistory, Link } from 'react-router-dom';
import {
  Container,
  Button,
  Icon,
  Segment,
  Header,
  Loader,
} from 'semantic-ui-react';
import GroupList from '../../components/GroupList/GroupList';
import {
  fetchCountryById,
  fetchGroupsByCountry,
} from '../../actions/dispatchers';
import { useStateContext } from '../../state';

const CountryPage = props => {
  const {
    match: { params },
    location: { state },
  } = props;
  const { name } = state || {};
  const { countryId } = params;
  const [isFetchingGroups, setIsFetchingGroups] = useState(false);

  const [
    {
      countries: { activeCountry },
      groups,
    },
    dispatch,
  ] = useStateContext();
  const history = useHistory();

  useEffect(() => {
    if (!name) fetchCountryById(dispatch, countryId);
    async function fetchGroups() {
      try {
        setIsFetchingGroups(true);
        await fetchGroupsByCountry(dispatch, countryId);
        setIsFetchingGroups(false);
      } catch (error) {
        setIsFetchingGroups(false);
      }
    }
    fetchGroups();
  }, [countryId, dispatch, name]);

  const handleGroupClicked = groupId => {
    history.push(`/group/${groupId}`);
  };

  const countryName = name || (activeCountry && activeCountry.name);
  const groupList = groups.byCountryId[countryId];

  return (
    <Container>
      <Segment basic style={{ paddingLeft: '0', paddingRight: '0' }}>
        <Link to="/">
          <Button>
            <Icon name="arrow left" />
            Home
          </Button>
        </Link>

        <Header as="h1">{countryName || <Loader active inline />}</Header>
      </Segment>

      {_.isEmpty(groupList) && isFetchingGroups ? (
        <Loader active inline="centered">
          Loading groups…
        </Loader>
      ) : (
        <>
          {_.isEmpty(groupList) ? (
            <Header as="h2">There are no groups for this country.</Header>
          ) : (
            <GroupList
              groupList={groupList}
              handleGroupClicked={handleGroupClicked}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default CountryPage;
