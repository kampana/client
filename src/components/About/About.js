// @flow
import React from 'react';
import {
  Image,
} from 'semantic-ui-react';
import styled from 'styled-components/macro';
import { GlobalMargin } from '../Welcome/Welcome';

const logoHackathon = require('../../images/logo-wirvsvirus.png');

const ParagrahStyle = styled.p`
    width: 80%
`;

const About = () => {
  return (
    <GlobalMargin>
      <ParagrahStyle>
        CivicTechHub indexes and lists initiatives from more than 29
        countries to create visibility of social projects and
        activities like Covid-19 crisis-inspired hackathon{' '}
        <a
          href="https://wirvsvirushackathon.org/"
          title="#WirVsVirus"
        >
          #WirVsVirus
        </a>
        , government initiatives and local exchange groups.

        <a
          href="https://wirvsvirushackathon.org/"
          title="#WirVsVirus Hackathon"
        >
          <Image
            src={logoHackathon}
            style={{ width: 250, marginBottom: '1rem' }}
            centered
          />
        </a>
      </ParagrahStyle>
    </GlobalMargin>
  );
};

export default About;
