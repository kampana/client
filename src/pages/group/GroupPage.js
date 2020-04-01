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

const serviceLabels = (type, url) => {
  const LINK_LABELS = {
    SLACK: 'Slack',
    FACEBOOK: 'Facebook',
    TWITTER: 'Twitter',
    TRELLO: 'Trello',
    DEVPOST: 'Devpost',
    VIMEO: 'Vimeo',
    YOUTUBE: 'Youtube',
    DISCORD: 'Discord',
    GITHUB: 'Github',
    INSTAGRAM: 'Instagram',
    TELEGRAM: 'Telegram',
    OTHER: 'Other',
    WHATSAPP: 'WhatsApp',
    JOGL: 'JOGL',
    MAIN_WEBSITE: 'Website',
    E_MAIL: 'E-Mail',
  };

  if (type === 'WEBSITE') {
    return url.split('/')[2] || url.split('/')[0];
  }

  return LINK_LABELS[type];
};

const GroupPage = (props) => {
  const {
    match: { params },
  } = props;
  const { groupId } = params;

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

    fetchGroup();
  }, [groupId, dispatch]);

  const group = groups[groupId] || null;
  const country = ((group || {})._embedded || {}).country || null;
  const primaryLink = group && group.serviceLinks.find((l) => l.isMainLink);

  return (
    <Container>
      <Segment basic style={{ paddingLeft: '0', paddingRight: '0' }}>
        {country && (
          <Link
            to={{
              pathname: `/country/${country.id}`,
              state: { name: country.name },
            }}
          >
            <Button>
              <Icon name="arrow left" />
              {group ? group._embedded.country.name : 'Back'}
            </Button>
          </Link>
        )}
      </Segment>

      {isFetchingGroup ? (
        <Loader active inline="centered">
          Loading group…
        </Loader>
      ) : (
        <>
          {group ? (
            <>
              {!!(group.logoUrl || group.logo) && (
                <Image
                  src={group.logoUrl || group.logo}
                  style={{ marginBottom: '5rem' }}
                />
              )}

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
                      {group.topics.map((topic) => {
                        return <Label key={topic.id}>{topic.name}</Label>;
                      })}
                    </Segment>

                    <Segment>
                      <Header as="h2">Resources & Links</Header>
                      <List>
                        {group.serviceLinks
                          .sort((a, b) =>
                            a.isMainLink === b.isMainLink
                              ? 0
                              : a.isMainLink
                              ? -1
                              : 1,
                          )
                          .map((s) => {
                            // console.log(serviceLink);
                            return (
                              <List.Item key={s.id}>
                                <List.Icon
                                  name={LINK_TYPE_ICONS[s.type]}
                                  size="large"
                                />
                                <List.Content verticalAlign="middle">
                                  <a href={s.url}>
                                    {s.text || serviceLabels(s.type, s.url)}
                                  </a>
                                </List.Content>
                              </List.Item>
                            );
                          })}
                      </List>

                      {!!primaryLink && (
                        <Button
                          as="a"
                          href={primaryLink.url}
                          primary
                          size="big"
                          style={{ marginTop: '1rem' }}
                        >
                          Join now
                        </Button>
                      )}
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
