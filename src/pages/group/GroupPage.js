// @flow
import React from 'react';
import {
  Container,
  Card,
  Icon,
  Segment,
  Button,
  Header,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const HARDCODED_GROUP = {
  name: 'Code for Australia',
  country: 'Australia',
  countryCode: 'AU',
  description: 'Help for Australia',
  links:
    'Our awesome Slack channel>>>https://foo.slack.com>>>SLACK|||Our sweet Twitter account>>>https://twitter.com/codeforaustralia>>>TWITTER|||Our amazing website>>>https://www.codeforaustralie.com>>>WEBSITE',
};

const LINK_TYPE_ICONS = {
  // TODO: add all possible link type icons
  SLACK: 'slack',
  TWITTER: 'twitter',
  WEBSITE: 'linkify',
};

const GroupPage = props => {
  const {
    match: { params },
  } = props;
  // const { groupId } = params;

  // TODO: maybe move this logic into a new separate GroupLinks component?
  const groupLinks = HARDCODED_GROUP.links.split('|||');
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
        <Link to={`/country/${HARDCODED_GROUP.countryCode.toLowerCase()}`}>
          <Button>
            <Icon name="arrow left" />
            {HARDCODED_GROUP.country}
          </Button>
        </Link>

        <Header as="h1">{HARDCODED_GROUP.name}</Header>
      </Segment>

      <Card
        header={HARDCODED_GROUP.name}
        meta={HARDCODED_GROUP.countryCode}
        description={HARDCODED_GROUP.description}
        extra={extra}
      />
    </Container>
  );
};

export default GroupPage;
