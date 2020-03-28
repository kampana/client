// @flow
import React, { useState, useEffect } from 'react';
import {
  Container,
  List,
  Icon,
  Segment,
  Button,
  Image,
  Label,
  Grid,
  Header,
  Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useStateContext } from '../../state';
import { fetchGroupById } from '../../actions/dispatchers';

const LINK_TYPE_ICONS = {
  // TODO: add all possible link type icons
  SLACK: 'slack',
  TWITTER: 'twitter',
  WEBSITE: 'linkify',
  FACEBOOK: 'facebook',
  DISCORD: 'discord',
  TELEGRAM: 'telegram plane',
  INSTAGRAM: 'instagram',
};

const GroupPage = props => {
  const {
    match: { params },
  } = props;
  const { countryId, groupId } = params;

  const [{ groups }, dispatch] = useStateContext();
  const [isFetchingGroup, setIsFetchingGroup] = useState(false);

  useEffect(() => {
    async function fetchGroup() {
      try {
        setIsFetchingGroup(true);
        await fetchGroupById(dispatch, groupId);
        setIsFetchingGroup(false);
      } catch (error) {
        setIsFetchingGroup(false);
        // console.log(error);
      }
    }
    if (
      !groups.byCountryId[countryId] ||
      !groups.byCountryId[countryId][groupId]
    ) {
      fetchGroup();
    }
  }, [groupId]);

  const group =
    groups.byCountryId[countryId] && groups.byCountryId[countryId][groupId];

  return (
    <Container>
      <Segment basic style={{ paddingLeft: '0', paddingRight: '0' }}>
        <Link
          to={`/${countryId}${
            group ? `?name=${group._embedded.country.name}` : ''
          }`}
        >
          <Button>
            <Icon name="arrow left" />
            {group ? group._embedded.country.name : 'Back'}
          </Button>
        </Link>
      </Segment>

      {isFetchingGroup ? (
        <Loader active inline="centered">
          Loading…
        </Loader>
      ) : (
        <>
          {group ? (
            <>
              <Image src={group.logo} style={{ marginBottom: '5rem' }} />

              <Header as="h1">{group.name}</Header>

              <Grid columns={2} stackable>
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <p>{group.description}</p>
                    </Segment>
                  </Grid.Column>

                  <Grid.Column>
                    <Segment>
                      <Header as="h2">Topics</Header>
                      {group.topics.map(topic => {
                        return <Label>{topic.name}</Label>;
                      })}
                    </Segment>

                    <Segment>
                      <Header as="h2">Resources & Links</Header>
                      <List>
                        {group.serviceLinks.map(serviceLink => {
                          return (
                            <List.Item>
                              <List.Icon
                                name={LINK_TYPE_ICONS[serviceLink.type]}
                                size="large"
                              />
                              <List.Content verticalAlign="middle">
                                <a href={serviceLink.url}>{serviceLink.text}</a>
                              </List.Content>
                            </List.Item>
                          );
                        })}
                      </List>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </>
          ) : (
            <Header as="h2">
              We encountered an issue trying to fetch the group!
            </Header>
          )}
        </>
      )}
    </Container>
  );
};

export default GroupPage;
