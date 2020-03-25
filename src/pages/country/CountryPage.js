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
import useQuery from '../../lib/useQuery';

const CountryPage = props => {
  const {
    match: { params },
  } = props;
  const { countryId } = params;
  const query = useQuery();
  const name = query.get('name');
  const [isFetchingGroups, setIsFetchingGroups] = useState(false);

  const [
    {
      countries: { activeCountry },
      groups: { groupList, totalGroups },
    },
    dispatch,
  ] = useStateContext();
  const history = useHistory();

  useEffect(() => {
    if (!name) fetchCountryById(dispatch, countryId);
    async function fetchGroups() {
      try {
        if (!groupList || !groupList[countryId]) {
          setIsFetchingGroups(true);
          await fetchGroupsByCountry(dispatch, countryId);
          setIsFetchingGroups(false);
        }
      } catch (error) {
        setIsFetchingGroups(false);
      }
    }
    fetchGroups();
  }, [countryId]);

  const handleGroupClicked = groupName => {
    history.push(`/group/${groupName}`);
  };

  const countryName = name || (activeCountry && activeCountry.name);

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

      {isFetchingGroups ? (
        <Loader active inline="centered">
          Loading our list of groups for you...
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
