// @flow
import React from 'react';
import { Container, Card, Icon } from 'semantic-ui-react';

const HARDCODED_GROUP = {
  name: 'Code for Australia',
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

const GroupDetailsPage = props => {
  const {
    match: { params },
  } = props;

  console.log('group id: ', params.groupId);

  // TODO: maybe move this logic into a new separate GroupLinks component?
  const groupLinks = HARDCODED_GROUP.links.split('|||');
  const extra = groupLinks.map(groupLink => {
    const [linkDescription, linkUrl, linkType] = groupLink.split('>>>');
    return (
      <div>
        {linkDescription} - <a href={linkUrl}>{linkUrl}</a>
        <br />
        <Icon name={LINK_TYPE_ICONS[linkType]} />
      </div>
    );
  });

  return (
    <Container>
      <Card
        header={HARDCODED_GROUP.name}
        meta={HARDCODED_GROUP.countryCode}
        description={HARDCODED_GROUP.description}
        extra={extra}
      />
    </Container>
  );
};

export default GroupDetailsPage;
