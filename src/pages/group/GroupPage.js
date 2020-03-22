// @flow
import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Icon,
  Segment,
  Button,
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
  const extra = groupLinks.map(groupLink => {
    const [linkDescription, linkUrl, linkType] = groupLink.split('>>>');
    return (
      <div key={linkType}>
        {linkDescription} - <a href={linkUrl}>{linkUrl}</a>
        <br />
        <Icon name={LINK_TYPE_ICONS[linkType]} />
      </div>
    );
  });

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

        <Header as="h1">{group.name}</Header>
      </Segment>

      <Card
        image={group.logo}
        header={group.name}
        meta={group['country_code (iso 3661-alpha2)']}
        description={group.description}
        extra={extra}
      />
    </Container>
  );
};

export default GroupPage;
