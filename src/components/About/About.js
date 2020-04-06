// @flow
import React from 'react';
import {
  Image,
  Grid,
  Button,
  Header,
} from 'semantic-ui-react';
import styled from 'styled-components/macro';

const logoHackathon = require('../../images/about-group.svg');

const ParagrahStyle = styled.div`
    color: white;
`;

const BackgroundBox = styled.div`
    background-color: #061F71;
    border-radius: 15px;
    overflow: hidden;
`;

const ImageBox = styled.div`
    background-color: #3B4E8F;
    height: 100%;
    width: 100%;
    border-radius: 0px 7rem 7rem 0px;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.5);
`;

const TextBox = styled.div` 
    padding-top: 1rem;
`;


const About = () => {
  return (
    <ParagrahStyle>
      <BackgroundBox>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <ImageBox>
                <Image
                  centered
                  src={logoHackathon}
                  style={{ top: '50%', right: '50%', transform: 'translate(50%, -50%)', position: 'absolute', width: 350 }}
                />
              </ImageBox>
            </Grid.Column>
            <Grid.Column style={{ padding: '3rem' }}>
              <Header as="h1" style={{ color: 'white' }}>CIVIC TECH HUB</Header>
              <TextBox>
                We are CivicTechHub, a bunch of diverse and driven global people.
                We want to save lives and hack to support our global society. This Corona crisis is requiring nearly all of us to stay at home,
                slow the spread of COVID-19 and to work remotely. We want to be levers of change managing to overcome this crisis the world is facing.
                In this trying and unprecedented time we have created a central hub that connects people in need & people with solutions.
              </TextBox>
              <TextBox>
                We are pleased to tell you that, even in lockdown, there is a central hub - CivicTechHub - a place for connection that can make a world of difference to someone struggling through what will be a challenging and lonely period of lockdown.
              </TextBox>
              <Button
                style={{ marginTop: '1rem', borderRadius: '10px', backgroundColor: 'transparent', border: '1px solid white', color: 'white', padding: '1.5rem' }}
                href="https://devpost.com/software/internationale-liste-covid-19-communities-hackathons"
                floated="right"
              >GET TO KNOW US
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </BackgroundBox>
    </ParagrahStyle>
  );
};

export default About;
