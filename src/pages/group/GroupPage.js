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
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { dummyFetchGroups } from '../../api/groups';

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
  const { groupId } = params;
  const [group, setGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const allGroups = await dummyFetchGroups();
        setGroup(allGroups.find(g => g['group name'] === groupId));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, [groupId]);

  if (loading) {
    return (
      <Dimmer>
        <Loader />
      </Dimmer>
    );
  }
  const groupLinks = group.links.split('|||');
  const topics = group['Topics (separated by |||)'].split('|||');

  return (
    <Container>
      <Segment basic style={{ paddingLeft: '0', paddingRight: '0' }}>
        <Link
          to={`/country/${group[
            'country_code (iso 3661-alpha2)'
          ].toLowerCase()}`}
        >
          <Button>
            <Icon name="arrow left" />
            {group.country}
          </Button>
        </Link>
      </Segment>

      <Image src={group.logo} style={{ marginBottom: '5rem' }} />

      <Header as="h1">{group['group name']}</Header>

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
              {topics.map(topic => {
                return <Label>{topic}</Label>;
              })}
            </Segment>

            <Segment>
              <Header as="h2">Resources & Links</Header>
              <List>
                {groupLinks.map(groupLink => {
                  const [linkDescription, linkUrl, linkType] = groupLink.split(
                    '>>>'
                  );

                  return (
                    <List.Item>
                      <List.Icon
                        name={LINK_TYPE_ICONS[linkType]}
                        size="large"
                      />
                      <List.Content verticalAlign="middle">
                        <a href={linkUrl}>{linkDescription}</a>
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default GroupPage;
