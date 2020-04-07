// @flow
import React from 'react';
import {
  Image,
  Grid,
  Button,
  Header,
  Container,
  Responsive,
} from 'semantic-ui-react';
import styled from 'styled-components/macro';
import aboutImage from '../../images/about-group.svg';
import { blue, lightBlue } from '../../config/variables';

const ParagrahStyle = styled.div`
    color: white;
`;

const BackgroundBox = styled.div`
    background-color: ${blue};
    border-radius: 15px;
    overflow: hidden;
`;

const ImageBoxHorizontal = styled.div`
    background-color: ${lightBlue};
    height: 100%;
    width: 100%;
    border-radius: 0px 7rem 7rem 0px;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.5);
`;

const ImageBoxVertical = styled.div`
    background-color: ${lightBlue};
    height: 100%;
    width: 100%;
    border-radius: 7rem 7rem 0px 0px;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.5);
`;

const TextBox = styled.div` 
    padding-top: 1rem;
`;

const aboutTextElement = (
  <Container style={{ padding: '1rem' }}>
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
      as="button"
      href="https://devpost.com/software/internationale-liste-covid-19-communities-hackathons"
      floated="right"
      style={{ margin: '1rem' }}
    >GET TO KNOW US
    </Button>
  </Container>
);

const aboutImageElement = (
  <Container>
    <Image
      centered
      src={aboutImage}
      size="medium"
      style={{ top: '50%', right: '50%', transform: 'translate(50%, -50%)', position: 'absolute' }}
    />
  </Container>
);

const About = () => {
  return (
    <ParagrahStyle>
      <BackgroundBox>

        <Responsive as={Container} {...Responsive.onlyMobile}>
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                {aboutTextElement}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column style={{ padding: 0, margin: '-1rem', width: '120%' }}>
                <Container style={{ height: '300px' }}>
                  <ImageBoxVertical>
                    {aboutImageElement}
                  </ImageBoxVertical>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive as={Container} minWidth={Responsive.onlyMobile.maxWidth + 1}>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <ImageBoxHorizontal>
                  {aboutImageElement}
                </ImageBoxHorizontal>
              </Grid.Column>
              <Grid.Column>
                {aboutTextElement}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>

      </BackgroundBox>
    </ParagrahStyle>
  );
};

export default About;
